import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "AI Automation & Services — Evaroid.AI" };

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <Services />
    </div>
  );
}
