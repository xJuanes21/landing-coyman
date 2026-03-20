"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { CheckCircle2, ShieldCheck, Clock, Wrench } from "lucide-react";
import { useRef, useState } from "react";

const benefits = [
  {
    id: 1,
    index: "01",
    title: "Técnicos Certificados",
    desc: "Personal altamente calificado y en constante capacitación, con certificaciones vigentes del sector.",
    icon: Wrench,
    accent: "#F59E0B",
    tag: "TALENTO HUMANO",
    metric: "100%",
    metricLabel: "certificados",
  },
  {
    id: 2,
    index: "02",
    title: "Atención Rápida",
    desc: "Respuesta inmediata para emergencias en su hogar o local. Tiempo de llegada garantizado.",
    icon: Clock,
    accent: "#0EA5E9",
    tag: "TIEMPO DE RESPUESTA",
    metric: "<2h",
    metricLabel: "tiempo promedio",
  },
  {
    id: 3,
    index: "03",
    title: "Garantía Total",
    desc: "Todos nuestros trabajos están respaldados por escrito, para su total tranquilidad y seguridad.",
    icon: ShieldCheck,
    accent: "#10B981",
    tag: "RESPALDO ESCRITO",
    metric: "90d",
    metricLabel: "de garantía",
  },
  {
    id: 4,
    index: "04",
    title: "Diagnóstico Profesional",
    desc: "Revisión exhaustiva antes de cualquier intervención técnica. Presupuesto sin sorpresas.",
    icon: CheckCircle2,
    accent: "#A78BFA",
    tag: "EVALUACIÓN TÉCNICA",
    metric: "0$",
    metricLabel: "costo de visita",
  },
];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-50, 50], [3, -3]);
  const ry = useTransform(mx, [-50, 50], [-3, 3]);
  const srx = useSpring(rx, { stiffness: 180, damping: 22 });
  const sry = useSpring(ry, { stiffness: 180, damping: 22 });

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
        setHovered(false);
      }}
      className="relative group"
    >
      {/* Outer glow */}
      <motion.div
        className="absolute -inset-px rounded-2xl blur-md pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${benefit.accent}25, transparent 65%)`,
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden h-full"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
          border: hovered
            ? `1px solid ${benefit.accent}35`
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)`
            : `0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)`,
          transition: "border 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1.5px]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${benefit.accent} 40%, transparent 100%)`,
          }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Subtle scanline texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
            backgroundSize: "100% 6px",
          }}
        />

        <div className="relative p-7 flex gap-6 items-start">
          {/* Left column: icon + metric */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            {/* Icon bubble */}
            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center relative"
              animate={hovered ? { scale: 1.06 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                background: `linear-gradient(145deg, ${benefit.accent}20, ${benefit.accent}08)`,
                border: `1px solid ${benefit.accent}30`,
              }}
            >
              <benefit.icon
                size={24}
                style={{ color: benefit.accent }}
                strokeWidth={1.5}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{ opacity: hovered ? 1 : 0 }}
                style={{
                  background: `radial-gradient(circle, ${benefit.accent}15, transparent)`,
                }}
              />
            </motion.div>

            {/* Vertical divider */}
            <div
              className="w-[1px] h-12"
              style={{
                background: `linear-gradient(180deg, ${benefit.accent}30, transparent)`,
              }}
            />

            {/* Metric */}
            <div className="text-center">
              <div
                className="text-lg font-black leading-none"
                style={{
                  color: benefit.accent,
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                {benefit.metric}
              </div>
              <div className="text-[9px] font-bold tracking-widest uppercase text-white/25 mt-1 whitespace-nowrap">
                {benefit.metricLabel}
              </div>
            </div>
          </div>

          {/* Right column: content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[9px] font-black tracking-[0.28em] uppercase font-mono"
                style={{ color: benefit.accent, opacity: 0.7 }}
              >
                {benefit.tag}
              </span>
              <span className="text-[9px] font-mono text-white/20">
                {benefit.index}
              </span>
            </div>

            <h3
              className="text-[21px] font-black text-white leading-tight tracking-tight mb-3"
              style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >
              {benefit.title}
            </h3>

            <div
              className="w-6 h-[1.5px] mb-4"
              style={{
                background: `linear-gradient(90deg, ${benefit.accent}60, transparent)`,
              }}
            />

            <p className="text-[13px] text-white/42 leading-relaxed font-light">
              {benefit.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Benefits() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #07090D 0%, #0A0C12 60%, #07090D 100%)",
      }}
    >


      {/* Diagonal accent band */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-[0.015] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(99,102,241,1) 100%)",
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[400px] rounded-full opacity-[0.05] blur-[130px]"
        style={{ background: "#F59E0B" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full opacity-[0.05] blur-[100px]"
        style={{ background: "#10B981" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-white/20" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-white/30 font-mono">
              Propuesta de valor
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl lg:text-[58px] font-black text-white leading-[1.02] tracking-tight mb-6"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            ¿Por qué{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, #fff 20%, rgba(255,255,255,0.4))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              elegirnos?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-[15px] text-white/38 leading-relaxed font-light"
          >
            Nos destacamos por nuestra calidad, compromiso y transparencia en
            cada servicio prestado. Cada diferencial está diseñado para su total
            confianza.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="w-full max-w-5xl">
          <MobileCarousel className="md:grid-cols-2 md:gap-4 md:auto-rows-fr">
            {benefits.map((b, i) => (
              <BenefitCard key={b.id} benefit={b} index={i} />
            ))}
          </MobileCarousel>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 max-w-5xl flex flex-wrap items-center gap-y-4 gap-x-8 px-8 py-5 rounded-2xl border border-white/[0.05]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.01))",
          }}
        >
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20 font-mono mr-2">
            Compromisos
          </span>
          {[
            "Presupuesto sin costo",
            "Garantía por escrito",
            "Sin cobros ocultos",
            "Técnicos identificados",
            "Materiales originales",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[12px] text-white/35 font-medium">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
