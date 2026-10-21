import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonaModal from "@/components/PersonaModal";
import AIAssistantWidget from "@/components/AIAssistantWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Evaroid.AI — Intelligent AI Automation & Web Engineering",
  description:
    "Evaroid.AI specializes in custom AI automation, autonomous agents, and modern web platforms that streamline operations and accelerate growth.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-slate-700 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PersonaModal />
        <AIAssistantWidget />
      </body>
    </html>
  );
}
