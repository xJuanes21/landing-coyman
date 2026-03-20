import { ServicesFull } from "@/components/sections/services/ServicesFull";
import { CTA } from "@/components/sections/landing/CTA";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-10">
        <ServicesFull />
      </div>
      <CTA />
    </div>
  );
}
