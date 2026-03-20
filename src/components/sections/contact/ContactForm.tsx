"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FloatingInput, FloatingTextArea } from "@/components/ui/floating-input";
import { User, Mail, Phone, MessageSquare, Send, MapPin, Clock } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const text = `Hola, mi nombre es ${name}. Mi teléfono es ${phone}. Mensaje: ${message}`;
    window.open(`https://wa.me/573182732524?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #07090D 0%, #0A0C12 50%, #07090D 100%)",
      }}
    >
      {/* Background Ambience */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[150px]"
        style={{ background: "#10B981" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[130px]"
        style={{ background: "#0EA5E9" }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-[10px] font-black tracking-[0.35em] uppercase text-white/40 font-mono">
                Atención al cliente
              </span>
            </div>

            <h1
              className="text-5xl lg:text-[64px] font-black text-white leading-[1.02] tracking-tight mb-8"
              style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >
              Hablemos de su{" "}
              <span
                style={{
                  background: "linear-gradient(120deg, #10B981 0%, #34D399 60%, rgba(52,211,153,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                próximo proyecto.
              </span>
            </h1>

            <p className="text-[15px] text-white/40 leading-relaxed font-light mb-12 max-w-lg">
              Ya sea para solicitar una visita técnica, pedir un presupuesto o resolver dudas, nuestro equipo está listo para asistirle con la mayor prontitud.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Llámanos o escríbenos", desc: "+57 318 273 2524", accent: "#10B981" },
                { icon: Mail, title: "Correo electrónico", desc: "contacto@coymanproyectos.com", accent: "#0EA5E9" },
                { icon: MapPin, title: "Ubicación", desc: "Cali y todo el Valle del Cauca, Colombia.", accent: "#F59E0B" },
                { icon: Clock, title: "Horarios", desc: "24/7 para emergencias técnicas.", accent: "#A78BFA" },
              ].map((info, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${info.accent}15, ${info.accent}05)`,
                      border: `1px solid ${info.accent}25`,
                    }}
                  >
                    <info.icon size={22} style={{ color: info.accent }} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-[15px] font-bold text-white tracking-tight mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {info.title}
                    </h4>
                    <p className="text-[13px] text-white/45 font-light">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative rounded-3xl p-8 lg:p-10 border overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              {/* Form background noise/glows */}
              <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Formulario de Cotización</h3>
              <p className="text-[13px] text-white/45 mb-8 font-light">Completá los datos y te contactaremos a la brevedad.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <FloatingInput
                  id="name"
                  label="Nombre completo"
                  icon={User}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatingInput
                    id="phone"
                    type="tel"
                    label="Teléfono / WhatsApp"
                    icon={Phone}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    id="email"
                    type="email"
                    label="Correo electrónico"
                    icon={Mail}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FloatingTextArea
                  id="message"
                  label="¿En qué podemos ayudarte?"
                  icon={MessageSquare}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[14px] text-white tracking-wide group overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #10B981, #059669)",
                      boxShadow: "0 10px 25px -5px rgba(16,185,129,0.3)",
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Enviar mensaje <Send size={16} />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
