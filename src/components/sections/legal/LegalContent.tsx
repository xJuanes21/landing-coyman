"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Shield,
  FileText,
  ChevronRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/social";

// ─── Data ──────────────────────────────────────────────────────────────────

const TABS = [
  { id: "terminos", label: "Términos de Uso", icon: FileText },
  { id: "privacidad", label: "Política de Privacidad", icon: Shield },
];

const terminos = [
  {
    id: "t1",
    title: "1. Aceptación de los Términos",
    content: `Al acceder y utilizar el sitio web de COYMAN PROYECTOS (en adelante "la Empresa"), así como al contratar cualquiera de nuestros servicios técnicos, usted acepta quedar vinculado por los presentes Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros servicios ni acceda a esta plataforma.

Estos términos se aplican a todos los visitantes, usuarios y cualquier persona que acceda o utilice el sitio web o contrate los servicios de COYMAN PROYECTOS.`,
  },
  {
    id: "t2",
    title: "2. Descripción de los Servicios",
    content: `COYMAN PROYECTOS ofrece soluciones técnicas integrales que incluyen:

• Mantenimiento preventivo y correctivo de línea blanca (lavadoras, neveras, secadoras, estufas, calentadores y aires acondicionados).
• Instalaciones, reparaciones y mantenimiento de sistemas eléctricos residenciales e industriales.
• Venta de repuestos originales e insumos eléctricos de alta calidad.
• Diagnóstico técnico profesional realizado por técnicos certificados con más de 15 años de experiencia.

Los servicios se prestan principalmente en la ciudad de Cali, Valle del Cauca y ciudades aledañas de la región.`,
  },
  {
    id: "t3",
    title: "3. Condiciones de Prestación del Servicio",
    content: `3.1 Presupuesto y Diagnóstico: Todo servicio comienza con una visita de diagnóstico profesional. El técnico evaluará el estado del equipo y proporcionará un diagnóstico preciso.

3.2 Autorización: El inicio de cualquier intervención técnica requerirá la aprobación expresa del cliente, ya sea verbal, escrita o mediante confirmación vía WhatsApp.

3.3 Repuestos: COYMAN PROYECTOS garantiza el uso de repuestos originales o certificados compatibles de alta calidad para asegurar el respaldo y la durabilidad de la reparación.

3.4 Cancelaciones: El cliente podrá cancelar el servicio antes de iniciada la intervención sin penalización. Una vez iniciado el trabajo, se cobrarán los costos correspondientes al diagnóstico y mano de obra proporcional.`,
  },
  {
    id: "t4",
    title: "4. Garantías",
    content: `COYMAN PROYECTOS respalda todos sus trabajos con una garantía escrita por un período de noventa (90) días contados a partir de la fecha de prestación del servicio. Esta garantía cubre:

• Defectos en la mano de obra técnica realizada.
• Fallas en repuestos suministrados e instalados por nuestro equipo durante la intervención.

La garantía no aplica en casos de mal uso del equipo, fluctuaciones eléctricas externas, humedad excesiva o manipulación por personal ajeno a COYMAN PROYECTOS.`,
  },
  {
    id: "t5",
    title: "5. Responsabilidades del Cliente",
    content: `El cliente se compromete a:

• Proporcionar información veraz sobre las fallas y el historial del equipo.
• Garantizar un acceso seguro y despejado al área donde se encuentra el equipo.
• No manipular los componentes intervenidos durante el periodo de garantía sin consulta previa.
• Cumplir con los pagos acordados según el presupuesto autorizado.`,
  },
  {
    id: "t6",
    title: "6. Limitación de Responsabilidad",
    content: `COYMAN PROYECTOS no será responsable por daños indirectos o pérdidas consecuentes, como la pérdida de alimentos por fallas en equipos de refrigeración durante el tiempo de reparación o diagnóstico, o daños derivados de instalaciones eléctricas preexistentes defectuosas.

Nuestra responsabilidad se limita exclusivamente a la correcta ejecución técnica del servicio contratado.`,
  },
  {
    id: "t7",
    title: "7. Propiedad Intelectual",
    content: `Todo el contenido de este sitio web, incluyendo logotipos, textos, fotografías y estructura de diseño, es propiedad de COYMAN PROYECTOS y está protegido por las leyes de propiedad intelectual de Colombia. Queda prohibida su reproducción sin autorización escrita.`,
  },
  {
    id: "t8",
    title: "8. Legislación Aplicable",
    content: `Estos términos se rigen por las leyes de la República de Colombia, incluyendo el Estatuto del Consumidor (Ley 1480 de 2011). Cualquier controversia será resuelta ante las autoridades competentes en la ciudad de Cali, Valle del Cauca.`,
  },
];

const privacidad = [
  {
    id: "p1",
    title: "1. Responsable del Tratamiento",
    content: `COYMAN PROYECTOS, con sede principal en Cali, es responsable del tratamiento de sus datos personales. Valoramos su privacidad y protegemos su información de acuerdo con la normatividad vigente.`,
  },
  {
    id: "p2",
    title: "2. Datos que Recopilamos",
    content: `Recopilamos datos mínimos necesarios para la prestación del servicio:
• Nombre y contacto (Teléfono/WhatsApp).
• Dirección de prestación del servicio en Cali o Valle del Cauca.
• Información técnica del equipo (Marca, modelo, falla reportada).
• Correo electrónico para envío de cotizaciones o facturas.`,
  },
  {
    id: "p3",
    title: "3. Finalidad del Tratamiento",
    content: `Sus datos son utilizados únicamente para:
• Agendar y realizar visitas técnicas.
• Seguimiento de garantías y satisfacción del cliente.
• Cumplimiento de obligaciones contables y legales.
• Comunicación directa vía WhatsApp para coordinación de servicios.`,
  },
  {
    id: "p4",
    title: "4. Derechos del Titular",
    content: `Usted tiene derecho a conocer, actualizar y rectificar sus datos. Puede solicitar la eliminación de sus datos de nuestra base de contacto enviando un mensaje a nuestro WhatsApp oficial +57 318 273 2524 conforme a la Ley 1581 de 2012.`,
  },
  {
    id: "p5",
    title: "5. Seguridad",
    content: `Implementamos medidas de seguridad para proteger sus datos contra acceso no autorizado. COYMAN PROYECTOS no vende ni comparte su información con terceros con fines comerciales.`,
  },
];

// ─── Section accordion item ──────────────────────────────────────────────

function AccordionSection({
  item,
  index,
}: {
  item: { id: string; title: string; content: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div
        className="rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer bg-white"
        style={{
          borderColor: open ? "rgba(228,128,44,0.3)" : "rgba(15,37,73,0.08)",
          boxShadow: open ? "0 12px 24px rgba(15,37,73,0.05)" : "none",
        }}
        onClick={() => setOpen(!open)}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-black font-mono text-[var(--color-brand-muted)] w-6 shrink-0 opacity-50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3
              className="text-[16px] font-bold text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-orange)] transition-colors"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {item.title.replace(/^\d+\.\s/, "")}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 ml-4"
          >
            <ChevronRight
              size={18}
              style={{
                color: open ? "#E4802C" : "rgba(15,37,73,0.3)",
              }}
            />
          </motion.div>
        </div>

        {/* Body */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pl-16">
            <div
              className="w-full h-[1px] mb-5"
              style={{
                background:
                  "linear-gradient(90deg, rgba(228,128,44,0.2), transparent)",
              }}
            />
            <p
              className="text-[14px] text-[var(--color-brand-dark)]/70 leading-relaxed font-light whitespace-pre-line"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {item.content}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Content ────────────────────────────────────────────────────────────

export function LegalContent() {
  const [activeTab, setActiveTab] = useState<"terminos" | "privacidad">(
    "terminos",
  );
  const sections = activeTab === "terminos" ? terminos : privacidad;

  return (
    <div className="relative py-24 bg-[var(--color-brand-bg)]">
      {/* Ambient Glows */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.03] blur-[140px] pointer-events-none"
        style={{ background: "var(--color-brand-blue)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
        style={{ background: "var(--color-brand-orange)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/30" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[var(--color-brand-muted)] font-mono">
              Marco Legal · COYMAN PROYECTOS
            </span>
          </div>

          <h1
            className="text-5xl lg:text-[60px] font-black text-[var(--color-brand-blue)] leading-[1.02] tracking-tight mb-5"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            Legal &{" "}
            <span
              style={{
                color: "var(--color-brand-orange)",
              }}
            >
              Privacidad
            </span>
          </h1>

          <p
            className="text-[15px] text-[var(--color-brand-dark)]/60 leading-relaxed max-w-xl font-light"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Consulte la información sobre el uso de nuestros servicios técnicos
            y el tratamiento responsable de sus datos personales, en
            cumplimiento de la legislación colombiana vigente.
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            {[
              { label: "Última actualización", val: "Marzo 2026" },
              { label: "Versión", val: "1.0" },
              { label: "Sede", val: "Cali, Valle del Cauca" },
            ].map((m, i) => (
              <div
                key={i}
                className={`${i > 0 ? "pl-6 border-l border-[var(--color-brand-muted)]/10" : ""}`}
              >
                <div className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-brand-muted)]/40 mb-1">
                  {m.label}
                </div>
                <div
                  className="text-[13px] font-bold text-[var(--color-brand-blue)]/80"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {m.val}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-2 p-1.5 rounded-2xl mb-10 w-fit"
          style={{
            background: "rgba(15,37,73,0.03)",
            border: "1px solid rgba(15,37,73,0.05)",
          }}
        >
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "terminos" | "privacidad")}
                className="relative flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-[13px] font-bold transition-colors duration-200 overflow-hidden"
                style={{
                  color: active
                    ? "var(--color-brand-blue)"
                    : "var(--color-brand-muted)",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                {active && (
                  <motion.div
                    layoutId="tab-bg-light"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "white",
                      border: "1px solid rgba(228,128,44,0.15)",
                      boxShadow: "0 4px 12px rgba(15,37,73,0.04)",
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <Icon
                  size={15}
                  style={{
                    color: active ? "#E4802C" : "rgba(15,37,73,0.3)",
                  }}
                  strokeWidth={active ? 2.5 : 2}
                  className="relative z-10"
                />
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3"
        >
          {sections.map((item, i) => (
            <AccordionSection key={item.id} item={item} index={i} />
          ))}
        </motion.div>

        {/* Contact block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-3xl overflow-hidden bg-white border border-[var(--color-brand-blue)]/5 shadow-sm"
        >
          <div className="px-8 py-10">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-[1px]"
                style={{ background: "rgba(228,128,44,0.3)" }}
              />
              <span
                className="text-[10px] font-black tracking-[0.3em] uppercase font-mono"
                style={{ color: "#E4802C" }}
              >
                Respaldo Legal
              </span>
            </div>

            <h3
              className="text-2xl font-black text-[var(--color-brand-blue)] mb-3"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              ¿Dudas sobre estos términos?
            </h3>
            <p
              className="text-[14px] text-[var(--color-brand-dark)]/50 mb-10 font-light max-w-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Estamos comprometidos con la transparencia. Si requiere
              aclaraciones adicionales, contacte a nuestro equipo técnico y de
              soporte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Phone,
                  label: "WhatsApp Oficial",
                  val: "+57 318 273 2524",
                  href: getWhatsAppUrl(),
                },
                {
                  icon: MapPin,
                  label: "Atención regional",
                  val: "Cali, Valle del Cauca",
                  href: null,
                },
              ].map(({ icon: Icon, label, val, href }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-[var(--color-brand-bg)] border border-[var(--color-brand-blue)]/[0.03]"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(228,128,44,0.06)",
                      border: "1px solid rgba(228,128,44,0.1)",
                    }}
                  >
                    <Icon
                      size={18}
                      style={{ color: "#E4802C" }}
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-brand-muted)] mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-bold text-[var(--color-brand-blue)] hover:text-[var(--color-brand-orange)] transition-colors"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {val}
                      </a>
                    ) : (
                      <span
                        className="text-[14px] font-bold text-[var(--color-brand-blue)]"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {val}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-[11px] text-[var(--color-brand-muted)] font-medium opacity-50"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          © {new Date().getFullYear()} COYMAN PROYECTOS · Todos los derechos
          reservados · Ley 1480 de 2011 & Ley 1581 de 2012
        </motion.p>
      </div>
    </div>
  );
}
