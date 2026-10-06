import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/email";
import { sendJobApplicationWhatsApp } from "@/lib/whatsapp";

const careersSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(40).optional().or(z.literal("")),
  role: z.string().min(1, "Role is required"),
  portfolio: z.string().max(255).optional().or(z.literal("")),
  message: z.string().max(4000).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = careersSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, phone, role, portfolio, message } = parsed.data;

    const formattedMessage = [
      `[JOB APPLICATION] Role: ${role}`,
      phone ? `Phone/WhatsApp: ${phone}` : null,
      portfolio ? `Portfolio/Profiles: ${portfolio}` : null,
      message ? `\nCover Note:\n${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    // 1. Save to Database
    const saved = await prisma.contactMessage.create({
      data: {
        name,
        email,
        company: `[Applicant] ${role}`,
        message: formattedMessage,
      },
    });

    // 2. Dispatch Email Alert
    await sendContactNotification({
      name,
      email,
      company: `Candidate for: ${role}`,
      message: formattedMessage,
    });

    // 3. Dispatch WhatsApp Alert to 03135300649
    await sendJobApplicationWhatsApp({
      name,
      email,
      phone: phone || null,
      role,
      portfolio: portfolio || null,
      message: message || null,
    });

    return NextResponse.json(
      { success: true, id: saved.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[careers-api]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
