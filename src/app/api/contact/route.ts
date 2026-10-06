import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/email";
import { sendWhatsAppNotification } from "@/lib/whatsapp";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, company, message } = parsed.data;

    // 1. Persist to database
    const saved = await prisma.contactMessage.create({
      data: {
        name,
        email,
        company: company || null,
        message,
      },
    });

    // 2. Dispatch notification email to user
    await sendContactNotification({
      name,
      email,
      company: company || null,
      message,
    });

    // 3. Dispatch automated WhatsApp notification
    await sendWhatsAppNotification({
      name,
      email,
      company: company || null,
      message,
    });

    return NextResponse.json(
      { success: true, id: saved.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Admin endpoint: list messages (protect with auth in production)
export async function GET() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  return NextResponse.json({ messages });
}
