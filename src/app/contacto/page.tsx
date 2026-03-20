"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { getInstagramUrl, getFacebookUrl, getWhatsAppUrl } from "@/lib/social";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-bg)] flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.03] blur-[150px] bg-[var(--color-brand-orange)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] rounded-full opacity-[0.03] blur-[150px] bg-[var(--color-brand-blue)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/50" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[var(--color-brand-muted)] font-mono">
              Contacto
            </span>
            <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl lg:text-[64px] font-black text-[var(--color-brand-blue)] leading-[1.02] tracking-tight mb-8"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            ¿En qué le podemos{" "}
            <span style={{ color: "var(--color-brand-orange)" }}>ayudar?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-[15px] text-[var(--color-brand-dark)]/80 leading-relaxed font-light max-w-2xl mx-auto"
          >
            Estamos listos para atender sus requerimientos técnicos. Escríbanos
            y nuestro equipo de expertos se comunicará con usted en el menor
            tiempo posible.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-32">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgba(15,37,73,0.04)] border border-[var(--color-brand-blue)]/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-brand-orange)]/5 blur-[100px] pointer-events-none rounded-full" />

              <div className="relative">
                <h3
                  className="text-2xl font-black text-[var(--color-brand-blue)] mb-2"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Envíenos un mensaje
                </h3>
                <p className="text-[14px] text-[var(--color-brand-dark)]/70 mb-10 font-light">
                  Complete los datos a continuación para iniciar su solicitud.
                </p>

                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              {[
                {
                  icon: MapPin,
                  title: "Nuestra Sede Principal",
                  content: "Calle 102 f # 23b-68\nCali, Colombia",
                  accent: "var(--color-brand-blue)",
                  href: null,
                },
                {
                  icon: Phone,
                  title: "Líneas de Atención",
                  content: "+57 (318) 273-2524\nWhatsApp disponible 24/7",
                  accent: "var(--color-brand-orange)",
                  href: getWhatsAppUrl(),
                },
                {
                  icon: Instagram,
                  title: "Siga nuestro trabajo",
                  content: "@coymanproyectos\nInstagram oficial",
                  accent: "#E1306C",
                  href: getInstagramUrl(),
                },
                {
                  icon: Facebook,
                  title: "Comunidad en Facebook",
                  content: "Coyman Proyectos\nPágina oficial",
                  accent: "#1877F2",
                  href: getFacebookUrl(),
                },
                {
                  icon: Mail,
                  title: "Correo Electrónico",
                  content: "coymanproyectos@gmail.com\nSoporte y cotizaciones",
                  accent: "var(--color-brand-blue)",
                  href: "mailto:coymanproyectos@gmail.com",
                },
              ].map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href || undefined}
                  target={info.href ? "_blank" : undefined}
                  rel={info.href ? "noopener noreferrer" : undefined}
                  whileHover={info.href ? { y: -2, scale: 1.01 } : {}}
                  className={`bg-white p-5 rounded-2xl flex items-start gap-5 shadow-sm border border-[var(--color-brand-blue)]/5 transition-all duration-300 ${info.href ? "hover:shadow-md hover:border-[var(--color-brand-orange)]/20 cursor-pointer" : ""}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${info.accent}10` }}
                  >
                    <info.icon size={20} style={{ color: info.accent }} />
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-[14px] font-bold text-[var(--color-brand-blue)] mb-1"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {info.title}
                    </h4>
                    <p className="text-[12px] text-[var(--color-brand-dark)]/70 whitespace-pre-line leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
