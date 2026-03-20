"use client";
import { motion } from "framer-motion";
import {
  WashingMachine,
  Snowflake,
  Zap,
  Thermometer,
  Wrench,
  Flame,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  Refrigerator,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/social";

const categories = [
  {
    title: "Línea Blanca y Refrigeración",
    accent: "#e4802c",
    items: [
      {
        name: "Mantenimiento de Lavadoras",
        desc: "Carga frontal, superior y centros de lavado. Diagnóstico exhaustivo de motores y transmisión.",
        icon: WashingMachine,
      },
      {
        name: "Reparación de Neveras",
        desc: "Sistemas no-frost, nevecones, cambios de compresor y recarga de gas refrigerante.",
        icon: Refrigerator,
      },
      {
        name: "Aires Acondicionados",
        desc: "Mantenimiento preventivo, limpieza de filtros y reparación de tarjetas electrónicas.",
        icon: Snowflake,
      },
      {
        name: "Calentadores",
        desc: "Mantenimiento preventivo, cambio de termopares, limpieza de inyectores (gas o eléctricos).",
        icon: Flame,
      },
    ],
  },
  {
    title: "Instalaciones y Mantenimiento Eléctrico",
    accent: "#0f2549",
    items: [
      {
        name: "Cableado y Tableros",
        desc: "Remodelación de redes eléctricas, balanceo de cargas e instalación de breakers.",
        icon: Zap,
      },
      {
        name: "Iluminación Residencial",
        desc: "Instalación de luminarias LED, sensores de movimiento y automatización básica.",
        icon: Lightbulb,
      },
      {
        name: "Revisiones Técnicas",
        desc: "Detección y solución de cortos, fugas de energía y puestas a tierra.",
        icon: Wrench,
      },
      {
        name: "Certificaciones",
        desc: "Trabajos apegados a la normativa vigente con personal debidamente calificado.",
        icon: ShieldCheck,
      },
    ],
  },
];

export function ServicesFull() {
  return (
    <section className="relative py-32 overflow-hidden bg-[var(--color-brand-bg)]">
      {/* Ambient glow spots */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full opacity-[0.03] blur-[120px]"
        style={{ background: "var(--color-brand-blue)" }}
      />
      <div
        className="absolute bottom-40 right-1/4 w-[500px] h-[300px] rounded-full opacity-[0.03] blur-[100px]"
        style={{ background: "var(--color-brand-orange)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/50" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[var(--color-brand-muted)] font-mono">
              Catálogo de Servicios
            </span>
            <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl md:text-5xl lg:text-[60px] font-black text-[var(--color-brand-blue)] leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            Soluciones diseñadas para
            <br />
            <span
              style={{
                color: "var(--color-brand-orange)",
              }}
            >
              la tranquilidad de su hogar.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-[15px] text-[var(--color-brand-dark)]/80 leading-relaxed font-light max-w-2xl"
          >
            Cada uno de nuestros servicios cuenta con personal especializado,
            diagnósticos certeros y nuestro respaldo total de garantía.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {categories.map((category, idx) => (
            <div key={idx}>
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className="mb-14 flex items-center gap-6"
              >
                <h3
                  className="text-3xl font-black tracking-tight"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    color: category.accent,
                  }}
                >
                  {category.title}
                </h3>
                <div
                  className="h-[2px] flex-1"
                  style={{
                    background: `linear-gradient(90deg, ${category.accent}60, transparent)`,
                  }}
                />
              </motion.div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative h-full"
                  >
                    {/* Card Container */}
                    <div className="relative h-full flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white border border-[var(--color-brand-blue)]/5 hover:border-[var(--color-brand-blue)]/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${category.accent}15, ${category.accent}05)`,
                          border: `1px solid ${category.accent}20`,
                        }}
                      >
                        <item.icon
                          size={26}
                          style={{ color: category.accent }}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col flex-1 h-full">
                        <h4
                          className="text-xl font-bold text-[var(--color-brand-blue)] mb-3 tracking-tight"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {item.name}
                        </h4>
                        <p className="text-[14px] text-[var(--color-brand-dark)]/80 leading-relaxed font-light mb-6 flex-1">
                          {item.desc}
                        </p>

                        <button
                          onClick={() =>
                            window.open(
                              getWhatsAppUrl(
                                `Hola, deseo cotizar el servicio de: ${item.name}`,
                              ),
                              "_blank",
                            )
                          }
                          className="self-start flex items-center gap-2 group/btn"
                        >
                          <span
                            className="text-[12px] font-bold tracking-widest uppercase"
                            style={{ color: category.accent }}
                          >
                            Cotizar Servicio
                          </span>
                          <span
                            className="flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 group-hover/btn:translate-x-1"
                            style={{ background: `${category.accent}15` }}
                          >
                            <ArrowRight
                              size={12}
                              style={{ color: category.accent }}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
