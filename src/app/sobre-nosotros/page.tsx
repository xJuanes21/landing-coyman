import { AboutContent } from "@/components/sections/about/AboutContent";
import { CTA } from "@/components/sections/landing/CTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-10">
        <AboutContent />
      </div>
      <CTA />
    </div>
  );
}
