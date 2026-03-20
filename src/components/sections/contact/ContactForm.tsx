"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  ShieldCheck,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/social";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingTextarea } from "@/components/ui/floating-textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customMessage = `Hola, mi nombre es ${formData.name}.

*Teléfono:* ${formData.phone}
*Correo:* ${formData.email}
*Mensaje:* ${formData.message}`;
    const whatsappUrl = getWhatsAppUrl(customMessage);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FloatingInput
          id="name"
          label="Nombre Completo"
          icon={User}
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <FloatingInput
          id="phone"
          label="Teléfono Móvil"
          icon={Phone}
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <FloatingInput
        id="email"
        label="Correo Electrónico"
        icon={Mail}
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <FloatingTextarea
        id="message"
        label="¿Cuál es su requerimiento?"
        icon={MessageSquare}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <div className="pt-6">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[var(--color-brand-blue)] text-white font-bold tracking-wide hover:bg-[var(--color-brand-orange)] transition-colors duration-300 shadow-lg shadow-[var(--color-brand-blue)]/20"
        >
          <span>Enviar Solicitud </span>
          <Send size={18} />
        </button>
        <p className="text-center text-[12px] text-[var(--color-brand-muted)] mt-4 flex items-center justify-center gap-1.5">
          <ShieldCheck size={14} className="text-[var(--color-brand-orange)]" />
          Sus datos están seguros con nosotros.
        </p>
      </div>
    </form>
  );
}
