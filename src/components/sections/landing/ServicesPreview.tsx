"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import Link from "next/link";
import {
  WashingMachine,
  Zap,
  Snowflake,
  Thermometer,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    id: 1,
    index: "01",
    title: "Línea Blanca",
    category: "LAVADO & SECADO",
    icon: WashingMachine,
    desc: "Reparación y mantenimiento especializado de lavadoras y secadoras de todas las marcas líderes del mercado.",
    stat: "+500",
    statLabel: "equipos reparados",
    accent: "#0f2549",
    accentDark: "#0a1931",
  },
  {
    id: 2,
    index: "02",
    title: "Refrigeración",
    category: "FRÍO INDUSTRIAL",
    icon: Snowflake,
    desc: "Servicio técnico especializado para neveras, nevecones y sistemas de enfriamiento comercial de alta exigencia.",
    stat: "24/7",
    statLabel: "disponibilidad",
    accent: "#e4802c",
    accentDark: "#cc7227",
  },
  {
    id: 3,
    index: "03",
    title: "Instalaciones Eléctricas",
    category: "INGENIERÍA ELÉCTRICA",
    icon: Zap,
    desc: "Cableado estructurado, tableros de distribución, iluminación LED y soluciones eléctricas residenciales certificadas.",
    stat: "100%",
    statLabel: "certificado RETIE",
    accent: "#0f2549",
    accentDark: "#0a1931",
  },
  {
    id: 4,
    index: "04",
    title: "Aires Acondicionados",
    category: "CLIMATIZACIÓN",
    icon: Thermometer,
    desc: "Mantenimiento preventivo y correctivo de sistemas de climatización residenciales, comerciales e industriales.",
    stat: "15+",
    statLabel: "años de experiencia",
    accent: "#e4802c",
    accentDark: "#cc7227",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [4, -4]);
  const rotateY = useTransform(x, [-60, 60], [-4, 4]);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer h-full flex flex-col"
    >
      {/* Glow background */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `radial-gradient(ellipse at center, ${service.accent}30, transparent 70%)`,
        }}
      />

      {/* Card */}
      <div
        className="relative flex-1 flex flex-col rounded-2xl overflow-hidden border border-[var(--color-brand-blue)]/5 bg-white"
        style={{
          boxShadow: hovered
            ? `0 0 0 1px ${service.accent}40, 0 32px 64px rgba(15,37,73,0.08)`
            : `0 0 0 1px rgba(15,37,73,0.04), 0 16px 32px rgba(15,37,73,0.05)`,
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* Top stripe accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            hovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 0.4 }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative p-7 flex flex-col h-full min-h-[340px]">
          {/* Header row */}
          <div className="flex items-start justify-between mb-8">
            {/* Index + category */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[var(--color-brand-muted)] font-mono block mb-1">
                {service.index}
              </span>
              <span
                className="text-[9px] font-black tracking-[0.3em] uppercase"
                style={{ color: service.accent, opacity: 1 }}
              >
                {service.category}
              </span>
            </div>

            {/* Icon container */}
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center relative"
              animate={hovered ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                background: `linear-gradient(135deg, ${service.accent}15, ${service.accent}05)`,
                border: `1px solid ${service.accent}20`,
              }}
            >
              <Icon
                size={22}
                style={{ color: service.accent }}
                strokeWidth={1.5}
              />
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `radial-gradient(circle, ${service.accent}15, transparent 70%)`,
                }}
                animate={hovered ? { opacity: 1 } : { opacity: 0 }}
              />
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className="text-[22px] font-black text-[var(--color-brand-blue)] leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            {service.title}
          </h3>

          {/* Separator */}
          <div
            className="w-8 h-[1px] mb-4"
            style={{
              background: `linear-gradient(90deg, ${service.accent}, transparent)`,
            }}
          />

          {/* Description */}
          <p className="text-[13px] text-[var(--color-brand-dark)]/80 leading-relaxed flex-1 font-light">
            {service.desc}
          </p>

          {/* Bottom stat + CTA */}
          <div className="mt-7 flex items-end justify-between">
            <div>
              <div
                className="text-2xl font-black text-[var(--color-brand-blue)] tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {service.stat}
              </div>
              <div className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-brand-muted)] mt-0.5">
                {service.statLabel}
              </div>
            </div>

            <motion.div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${service.accent}15, ${service.accent}05)`,
                border: `1px solid ${service.accent}20`,
              }}
              animate={hovered ? { x: 0, opacity: 1 } : { x: -4, opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={15} style={{ color: service.accent }} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesPreview() {
  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden bg-[var(--color-brand-bg)]"
    >
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, var(--color-brand-bg) 100%)",
        }}
      />

      {/* Ambient glow spots */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full opacity-[0.03] blur-[120px]"
        style={{ background: "var(--color-brand-blue)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[250px] rounded-full opacity-[0.03] blur-[100px]"
        style={{ background: "var(--color-brand-orange)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/50" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[var(--color-brand-muted)] font-mono">
              Portafolio de Servicios
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl lg:text-6xl font-black text-[var(--color-brand-blue)] leading-[1.02] tracking-tight max-w-xl"
              style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >
              Nuestros{" "}
              <span
                className="relative inline-block"
                style={{
                  color: "var(--color-brand-orange)",
                }}
              >
                Servicios
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[15px] text-[var(--color-brand-dark)]/80 leading-relaxed max-w-sm lg:text-right font-light"
            >
              Soluciones técnicas de la más alta calidad, respaldadas por
              ingenieros certificados y décadas de experiencia en el sector.
            </motion.p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="w-full">
          <MobileCarousel className="md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:auto-rows-fr">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </MobileCarousel>
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl border border-[var(--color-brand-blue)]/5 bg-white shadow-sm"
        >
          <div className="flex items-center gap-6">
            {[
              { val: "4", label: "Especialidades" },
              { val: "+10", label: "Marcas atendidas" },
              { val: "4.9★", label: "Valoración media" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`${i > 0 ? "pl-6 border-l border-[var(--color-brand-muted)]/30" : ""}`}
              >
                <div
                  className="text-xl font-black text-[var(--color-brand-blue)] tracking-tight"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {stat.val}
                </div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-brand-muted)] mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <Link href="/servicios" passHref>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl text-[13px] font-bold tracking-wide text-[var(--color-brand-blue)] transition-all duration-300 group"
              style={{
                background: "rgba(15,37,73,0.04)",
                border: "1px solid rgba(15,37,73,0.1)",
              }}
            >
              Ver todos los servicios
              <ChevronRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
