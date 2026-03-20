import { LegalContent } from "@/components/sections/legal/LegalContent";
import { CTA } from "@/components/sections/landing/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Privacidad | COYMAN PROYECTOS",
  description:
    "Consulte nuestros términos de uso y política de privacidad. Transparencia y seguridad en el tratamiento de sus datos personales y condiciones de servicio técnico.",
};

export default function LegalPage() {
  return (
    <div className="pt-20">
      <LegalContent />
      <CTA />
    </div>
  );
}
