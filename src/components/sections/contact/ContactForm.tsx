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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const validateForm = () => {
    setFormError(null);
    // Protección contra contenido "trampa" o spam
    const spamPatterns = [/http/i, /www\./i, /<script/i, /ftp/i];
    
    if (formData.name.trim().length < 3) return "El nombre es demasiado corto.";
    if (spamPatterns.some(p => p.test(formData.name))) return "Formato de nombre no permitido.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Correo electrónico no válido.";
    
    const phoneDigits = formData.phone.length;
    if (phoneDigits < 7) return "El teléfono debe tener al menos 7 dígitos.";
    
    if (formData.message.trim().length < 10) return "El requerimiento debe ser más detallado (mín. 10 caract.).";
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errorMsg = validateForm();
    if (errorMsg) {
      setFormError(errorMsg);
      setIsSubmitting(false);
      return;
    }

    try {
      setFormError(null);
      // 1. Enviar notificación por correo
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el correo");
      }

      // 2. Notificación de éxito (se removió redirección a WhatsApp)
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      // Ocultar mensaje de éxito después de 8 segundos
      setTimeout(() => setSubmitted(false), 8000);
    } catch (error) {
      setFormError("Hubo un problema al procesar su solicitud. Por favor, intente nuevamente o contáctenos por WhatsApp directamente.");
    } finally {
      setIsSubmitting(false);
    }
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
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "");
            setFormData({ ...formData, phone: val });
            if (formError) setFormError(null);
          }}
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
        {formError ? (
          <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-4 rounded-xl text-center mb-6 animate-in fade-in slide-in-from-bottom-2">
            <p className="text-sm font-medium">{formError}</p>
          </div>
        ) : null}

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500/20 text-green-700 p-4 rounded-xl text-center mb-6 animate-in fade-in slide-in-from-bottom-2">
            <p className="font-bold">¡Solicitud Enviada!</p>
            <p className="text-sm">Gracias por contactarnos. Le responderemos a la brevedad.</p>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[var(--color-brand-blue)] text-white font-bold tracking-wide hover:bg-[var(--color-brand-orange)] transition-colors duration-300 shadow-lg shadow-[var(--color-brand-blue)]/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Procesando...</span>
            </>
          ) : (
            <>
              <span>Enviar Solicitud </span>
              <Send size={18} />
            </>
          )}
        </button>
        <p className="text-center text-[12px] text-[var(--color-brand-muted)] mt-4 flex items-center justify-center gap-1.5">
          <ShieldCheck size={14} className="text-[var(--color-brand-orange)]" />
          Sus datos están seguros con nosotros.
        </p>
      </div>
    </form>
  );
}
