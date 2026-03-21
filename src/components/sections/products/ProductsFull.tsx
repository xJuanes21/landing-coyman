"use client";
import { motion } from "framer-motion";
import { CopyPlus, ArrowRight } from "lucide-react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/social";

const productGroups = [
  {
    title: "Repuestos para Línea Blanca",
    accent: "#e4802c",
    items: [
      {
        name: "Tarjetas Electrónicas",
        image: "/products/tarjetas-electronicas.png",
      },
      {
        name: "Bombas y Válvulas",
        image: "/products/bombas-valvulas.png",
      },
      {
        name: "Correas y Poleas",
        image: "/products/correas-poleas.png",
      },
      {
        name: "Motores Originales",
        image: "/products/motores-originales.png",
      },
    ],
  },
  {
    title: "Insumos Eléctricos",
    accent: "#0f2549",
    items: [
      {
        name: "Cableado y Tubería",
        image: "/products/cableado-tuberia.png",
      },
      {
        name: "Breakers y Tableros",
        image: "/products/breakers-tableros.png",
      },
      {
        name: "Interruptores y Tomas",
        image: "/products/interruptores.png",
      },
      {
        name: "Luminarias y Sensores",
        image: "/products/luimineria-sensores.png",
      },
    ],
  },
];

export function ProductsFull() {
  return (
    <section className="relative py-32 overflow-hidden bg-[var(--color-brand-bg)]">
      {/* Ambient */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[400px] rounded-full opacity-[0.03] blur-[140px]"
        style={{ background: "var(--color-brand-orange)" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[350px] rounded-full opacity-[0.03] blur-[120px]"
        style={{ background: "var(--color-brand-blue)" }}
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
            <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/40" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[var(--color-brand-muted)] font-mono">
              Inventario Especializado
            </span>
            <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/40" />
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
            Suministros originales
            <br />
            <span
              style={{
                color: "var(--color-brand-orange)",
              }}
            >
              con total garantía.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-[15px] text-[var(--color-brand-dark)]/80 leading-relaxed font-light max-w-2xl"
          >
            Distribuimos refacciones originales y materiales eléctricos para
            garantizar la máxima durabilidad en cada intervención que realizamos
            o que su empresa necesite.
          </motion.p>
        </div>

        {/* Product Groups */}
        <div className="space-y-32">
          {productGroups.map((group, idx) => (
            <div key={idx}>
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className="mb-14 flex items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[var(--color-brand-blue)]/5 shadow-sm">
                    <CopyPlus size={18} style={{ color: group.accent }} />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-black tracking-tight"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      color: group.accent,
                    }}
                  >
                    {group.title}
                  </h3>
                </div>
                <div
                  className="hidden md:block h-[1px] flex-1 ml-6"
                  style={{
                    background: `linear-gradient(90deg, ${group.accent}40, transparent)`,
                  }}
                />
              </motion.div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item, i) => (
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
                    className="group relative flex flex-col p-3 rounded-2xl h-full bg-white shadow-sm hover:shadow-lg transition-all duration-500 border border-[var(--color-brand-blue)]/5 hover:border-[var(--color-brand-blue)]/15"
                  >
                    {/* Hover Glow Edge */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 0 1px ${group.accent}20`,
                      }}
                    />

                    {/* Image Box */}
                    <div className="relative h-48 rounded-xl overflow-hidden mb-5 bg-[#f4f4f3]">
                      <div className="absolute inset-0 bg-[var(--color-brand-blue)]/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <Image
                        src={
                          item.image ||
                          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
                        }
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-col flex-1 px-2 pb-2">
                      <h4
                        className="font-bold text-[17px] text-[var(--color-brand-blue)] tracking-tight mb-4"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.name}
                      </h4>
                      <div className="mt-auto pt-4 border-t border-[var(--color-brand-blue)]/5">
                        <button
                          onClick={() =>
                            window.open(
                              getWhatsAppUrl(
                                `Hola, busco la disponibilidad para el producto: ${item.name}`,
                              ),
                              "_blank",
                            )
                          }
                          className="w-full flex items-center justify-between group/btn"
                        >
                          <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--color-brand-muted)] transition-colors group-hover/btn:text-[var(--color-brand-orange)]">
                            Consultar
                          </span>
                          <span className="flex items-center justify-center w-7 h-7 rounded-lg transition-colors bg-[var(--color-brand-blue)]/5 group-hover/btn:bg-[var(--color-brand-orange)]/10">
                            <ArrowRight
                              size={14}
                              className="text-[var(--color-brand-muted)] group-hover/btn:text-[var(--color-brand-orange)] transition-colors"
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
