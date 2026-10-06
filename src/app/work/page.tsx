import WorkGallery from "@/components/WorkGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Work & Solutions Portfolio — Evaroid.AI",
  description:
    "Explore case studies and enterprise systems in Agentic AI, Computer Vision, YOLOv8, and modern Web Platforms built by Evaroid.AI.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <WorkGallery />
    </main>
  );
}
