import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Coyman Proyectos",
  description: "Póngase en contacto con nosotros para cotizaciones, solicitudes de servicio o cualquier consulta técnica.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-20">
        <ContactForm />
      </div>
    </div>
  );
}
