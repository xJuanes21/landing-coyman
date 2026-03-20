"use client";
import { motion } from "framer-motion";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import Link from "next/link";
import { Shield, ThumbsUp, Star, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Protección",
    desc: "Cada trabajo respaldado por garantía escrita y responsabilidad civil.",
    accent: "#0f2549",
    index: "01",
  },
  {
    icon: ThumbsUp,
    title: "Calidad",
    desc: "Estándares técnicos de la industria en cada intervención.",
    accent: "#e4802c",
    index: "02",
  },
  {
    icon: Star,
    title: "Reputación",
    desc: "Valoración promedio de 4.9★ respaldada por cientos de clientes.",
    accent: "#0f2549",
    index: "03",
  },
];

export function Trust() {
  return (
    <section
      className="relative py-32 overflow-hidden bg-[var(--color-brand-bg)]"
    >
      {/* Central radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(15,37,73,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Glows */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[350px] rounded-full opacity-[0.05] blur-[130px]"
        style={{ background: "var(--color-brand-blue)" }}
      />
      <div
        className="absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full opacity-[0.05] blur-[110px]"
        style={{ background: "var(--color-brand-orange)" }}
      />

      {/* Horizontal rule accent at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(15,37,73,0.08) 30%, rgba(15,37,73,0.08) 70%, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two-column layout: headline left, pillar cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/50" />
              <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[var(--color-brand-muted)] font-mono">
                Filosofía de trabajo
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl lg:text-[56px] font-black text-[var(--color-brand-blue)] leading-[1.04] tracking-tight mb-7"
              style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >
              Construyendo{" "}
              <span style={{ color: "var(--color-brand-orange)" }}>
                confianza
              </span>{" "}
              en cada hogar
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="text-[15px] text-[var(--color-brand-dark)]/90 leading-relaxed font-light mb-10 max-w-md"
            >
              En COYMAN PROYECTOS entendemos que su tranquilidad es lo primero.
              Trabajamos con los estándares más altos, asegurando que cada
              reparación y mantenimiento supere sus expectativas.
            </motion.p>

            {/* Metrics row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="flex items-center gap-8 mb-12"
            >
              {[
                { val: "4.9★", label: "valoración media" },
                { val: "500+", label: "clientes atendidos" },
                { val: "15+", label: "años en el sector" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={i > 0 ? "pl-8 border-l border-[var(--color-brand-muted)]/30" : ""}
                >
                  <div
                    className="text-2xl font-black text-[var(--color-brand-blue)] tracking-tight"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {s.val}
                  </div>
                  <div className="text-[9px] font-bold tracking-widest uppercase text-[var(--color-brand-muted)] mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.42 }}
            >
              <Link href="/sobre-nosotros" passHref>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[13px] font-bold tracking-wide text-[var(--color-brand-blue)] group"
                  style={{
                    background: "rgba(15,37,73,0.05)",
                    border: "1px solid rgba(15,37,73,0.1)",
                  }}
                >
                  Conozca más sobre nosotros
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={14} style={{ color: "var(--color-brand-orange)" }} />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right: pillar cards stacked */}
          <div className="w-full min-w-0">
            <MobileCarousel className="md:flex md:flex-col md:gap-4 md:w-full">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative rounded-2xl overflow-hidden shadow-sm"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(15,37,73,0.08)",
                  }}
                  whileHover={{
                    borderColor: `${pillar.accent}35`,
                    boxShadow: `0 16px 40px rgba(15,37,73,0.08), 0 0 0 1px ${pillar.accent}20`,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Left accent stripe */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full"
                    style={{
                      background: `linear-gradient(180deg, ${pillar.accent}, ${pillar.accent}20)`,
                    }}
                  />

                  <div className="flex items-center gap-5 px-7 py-5 pl-10">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `linear-gradient(145deg, ${pillar.accent}18, ${pillar.accent}07)`,
                        border: `1px solid ${pillar.accent}25`,
                      }}
                    >
                      <pillar.icon
                        size={22}
                        style={{ color: pillar.accent }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="text-[16px] font-black text-[var(--color-brand-blue)] tracking-tight"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {pillar.title}
                        </h3>
                        <span className="text-[9px] font-mono text-[var(--color-brand-muted)]">
                          {pillar.index}
                        </span>
                      </div>
                      <p className="text-[12px] text-[var(--color-brand-dark)]/80 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Decorative quote block */}
              <motion.div
                key="quote"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-2 px-7 py-5 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(228,128,44,0.07), rgba(228,128,44,0.02))",
                  border: "1px solid rgba(228,128,44,0.12)",
                }}
              >
                <div className="text-[28px] leading-none font-black text-[var(--color-brand-orange)] opacity-40 mb-2">
                  &quot;
                </div>
                <p className="text-[12px] text-[var(--color-brand-dark)]/90 italic leading-relaxed font-light">
                  La mejor reparación es la que se hace bien desde la primera vez.
                  Eso es lo que prometemos.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-[var(--color-brand-orange)]/50" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-brand-orange)]">
                    COYMAN PROYECTOS
                  </span>
                </div>
              </motion.div>
            </MobileCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
