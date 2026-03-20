"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ChevronDown, ArrowUpRight, Zap } from "lucide-react";
import { useRef } from "react";

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
      <div className="absolute inset-0 bg-[#060810]/75" />
      {/* Gradient vignette — darkens edges, opens center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 20%, rgba(6,8,16,0.65) 70%, rgba(6,8,16,0.95) 100%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{ background: "linear-gradient(to top, #07090D, transparent)" }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, #07090D, transparent)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.07] blur-[160px] pointer-events-none"
        style={{ background: "#0EA5E9" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
        style={{ background: "#6366F1" }}
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
          className="text-6xl md:text-7xl lg:text-[88px] font-black text-white leading-[1.0] tracking-tight mb-8 max-w-5xl mt-8"
          style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
        >
          Soluciones{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, #38BDF8 0%, #0EA5E9 40%, #7DD3FC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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
          className="text-[17px] md:text-[19px] text-white/45 mb-12 max-w-xl leading-relaxed font-light"
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
            onClick={() => window.open("https://wa.me/573182732524", "_blank")}
            className="relative flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[14px] font-black tracking-wide text-white overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, #0284C7, #0EA5E9 55%, #38BDF8)",
              boxShadow:
                "0 0 0 1px rgba(14,165,233,0.25), 0 16px 40px rgba(14,165,233,0.2), 0 4px 8px rgba(0,0,0,0.4)",
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
            <MessageCircle size={18} strokeWidth={2} />
            Cotizar por WhatsApp
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
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[14px] font-bold tracking-wide text-white"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
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
                className={`px-7 text-center ${i > 0 ? "border-l border-white/[0.08]" : ""}`}
              >
                <div
                  className="text-[22px] font-black text-white tracking-tight leading-none"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {s.val}
                </div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/28 mt-1">
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
          <Zap size={11} className="text-white/20" />
          <span className="text-[11px] text-white/22 font-medium tracking-widest uppercase">
            Respuesta en menos de 2 horas · Sin costos de visita
          </span>
          <Zap size={11} className="text-white/20" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[9px] font-black tracking-[0.35em] uppercase text-white/20 font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
