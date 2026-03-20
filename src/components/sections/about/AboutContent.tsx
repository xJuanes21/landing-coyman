"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";

export function AboutContent() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #07090D 0%, #0A0C12 50%, #07090D 100%)",
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.04] blur-[150px]"
        style={{ background: "#10B981" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[500px] rounded-full opacity-[0.03] blur-[150px]"
        style={{ background: "#0EA5E9" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
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
            <div className="w-8 h-[1px] bg-white/20" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-white/40 font-mono">
              Nuestra Historia
            </span>
            <div className="w-8 h-[1px] bg-white/20" />
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
            className="text-5xl lg:text-[64px] font-black text-white leading-[1.02] tracking-tight mb-8"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            Más que técnicos,
            <br />
            <span
              style={{
                background:
                  "linear-gradient(120deg, #10B981 0%, #34D399 60%, rgba(52,211,153,0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              somos su respaldo.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-[15px] text-white/40 leading-relaxed font-light max-w-2xl"
          >
            Conozca nuestra historia y el firme compromiso que tenemos con la
            excelencia técnica y la satisfacción total de nuestros clientes en el Valle del Cauca.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3
              className="text-3xl font-black text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Evolución y Liderazgo
            </h3>
            <p className="text-[15px] text-white/45 mb-6 leading-relaxed font-light">
              En COYMAN PROYECTOS, nacimos de la necesidad de ofrecer un
              servicio técnico verdaderamente confiable y diferente en la ciudad
              de Cali. Hemos construido un equipo de profesionales que no solo entienden
              de equipos, sino también de la importancia de brindar tranquilidad al cliente.
            </p>
            <p className="text-[15px] text-white/45 mb-10 leading-relaxed font-light">
              Nos especializamos en mantenimiento, reparación de línea blanca, y
              soluciones eléctricas, garantizando atención cálida, diagnósticos
              precisos y refacciones genuinas. Cada día trabajamos bajo una
              premisa clara: reparar para que dure.
            </p>

            <div className="space-y-4">
              {[
                { text: "Atención personalizada y franca", icon: Award },
                { text: "Técnicos certificados y capacitados", icon: CheckCircle2 },
                { text: "Garantía total en todos los procesos", icon: ShieldCheck },
                { text: "Rapidez de respuesta ante emergencias", icon: Zap },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/[0.04] bg-white/[0.015]"
                >
                  <item.icon className="text-[#10B981]" size={20} />
                  <span className="text-[14px] font-medium text-white/70">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decoration frame */}
            <div className="absolute -inset-4 rounded-3xl border border-white/[0.05] bg-white/[0.01] blur-sm" />
            <div className="absolute inset-2 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br from-[#10B981]/20 to-transparent blur-xl" />

            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[550px] border border-white/[0.08]"
            >
              <img
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1000&q=80"
                alt="Técnico realizando mantenimiento"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, #07090D 0%, transparent 40%)",
                }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="px-6 py-4 rounded-xl border border-white/[0.08] backdrop-blur-md bg-black/40">
                  <div className="text-3xl font-black text-white" style={{ fontFamily: "'Sora', sans-serif" }}>15+ Años</div>
                  <div className="text-[11px] font-bold tracking-widest text-[#10B981] mt-1 uppercase">De experiencia comprobada</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Misión y Visión Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-10 rounded-3xl relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(16,185,129,0.1), transparent 60%)",
              }}
            />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#10B981]/10 border border-[#10B981]/20">
                <TargetIcon size={22} className="text-[#10B981]" />
              </div>
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Sora', sans-serif" }}>Nuestra Misión</h3>
            </div>
            <p className="text-[15px] text-white/45 leading-relaxed font-light">
              Proporcionar soluciones técnicas integrales con la más alta calidad y calidez humana, extendiendo la vida útil de los equipos de nuestros clientes a través de un servicio transparente, oportuno y altamente profesional.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-10 rounded-3xl relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(145deg, rgba(16,185,129,0.08), rgba(16,185,129,0.02))",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 60%)",
              }}
            />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/20">
                <EyeIcon size={22} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Sora', sans-serif" }}>Nuestra Visión</h3>
            </div>
            <p className="text-[15px] text-white/80 leading-relaxed font-light">
              Ser el referente principal en la región, ofreciendo confianza absoluta en soluciones para el hogar y la industria. Distinguiéndonos por nuestra eficiencia, innovación y el compromiso inquebrantable de ser los mejores líderes de la zona.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Simple icons to keep it self-contained
function TargetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

