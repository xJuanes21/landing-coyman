"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowUpRight, Zap } from "lucide-react";
import { useRef } from "react";
import { getWhatsAppUrl } from "@/lib/social";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80')",
          y: imgY,
        }}
      />

      {/* Multi-layer overlay system */}
      {/* Base dark */}
      {/* Base overlay */}
      <div className="absolute inset-0 bg-[var(--color-brand-bg)]/80" />
      {/* Gradient vignette — lightens edges, opens center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 20%, rgba(244,244,243,0.7) 70%, rgba(244,244,243,1) 100%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background:
            "linear-gradient(to top, var(--color-brand-bg), transparent)",
        }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-brand-bg), transparent)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,37,73,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,37,73,1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.05] blur-[160px] pointer-events-none"
        style={{ background: "var(--color-brand-blue)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
        style={{ background: "var(--color-brand-orange)" }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center pt-24"
      >
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-7xl lg:text-[88px] font-black text-[var(--color-brand-blue)] leading-[1.0] tracking-tight mb-8 max-w-5xl mt-8"
          style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
        >
          Soluciones{" "}
          <span
            style={{
              color: "var(--color-brand-orange)",
            }}
          >
            integrales
          </span>{" "}
          para su <br className="hidden md:block" />
          hogar y empresa
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[17px] md:text-[19px] text-[var(--color-brand-dark)]/80 mb-12 max-w-xl leading-relaxed font-light"
        >
          Servicio profesional y garantizado en mantenimiento, reparación de
          línea blanca e instalaciones eléctricas.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-16"
        >
          {/* Primary */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open(getWhatsAppUrl(), "_blank")}
            className="relative flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[14px] font-black tracking-wide text-white overflow-hidden group"
            style={{
              background: "var(--color-brand-orange)",
              boxShadow: "0 10px 30px rgba(228,128,44,0.3)",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {/* Shimmer */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
              }}
            />
            <svg fill="white" viewBox="0 0 32 32" className="w-[20px] h-[20px]">
              <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
            </svg>
            Cotizar Ahora
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </motion.button>

          {/* Secondary */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[14px] font-bold tracking-wide text-[var(--color-brand-blue)]"
            style={{
              background: "rgba(15,37,73,0.05)",
              border: "1px solid rgba(15,37,73,0.1)",
              backdropFilter: "blur(12px)",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Ver Servicios
            <ChevronDown size={16} strokeWidth={2} className="opacity-60" />
          </motion.button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-y-4 gap-x-0"
        >
          {[
            { val: "15+", label: "Años de experiencia" },
            { val: "500+", label: "Equipos reparados" },
            { val: "4.9★", label: "Valoración media" },
            { val: "24/7", label: "Atención urgencias" },
          ].map((s, i) => (
            <div key={i} className="flex items-center">
              <div
                className={`px-4 md:px-7 text-center ${i > 0 ? "border-l border-[var(--color-brand-muted)]/30" : ""}`}
              >
                <div
                  className="text-[17px] md:text-[22px] font-black text-[var(--color-brand-blue)] tracking-tight leading-none"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {s.val}
                </div>
                <div className="text-[9px] md:text-[10px] font-semibold tracking-widest uppercase text-[var(--color-brand-muted)] mt-1">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Micro trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex items-center gap-2"
        >
          <Zap size={11} className="text-[var(--color-brand-orange)]" />
          <span className="text-[11px] text-[var(--color-brand-dark)]/60 font-medium tracking-widest uppercase">
            Respuesta en menos de 2 horas · Sin costos de visita
          </span>
          <Zap size={11} className="text-[var(--color-brand-orange)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
