"use client";
import { motion } from "framer-motion";
import { CopyPlus, ArrowRight } from "lucide-react";

const productGroups = [
  {
    title: "Repuestos para Línea Blanca",
    accent: "#F59E0B",
    items: [
      {
        name: "Tarjetas Electrónicas",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Bombas y Válvulas",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Correas y Poleas",
        image:
          "https://images.unsplash.com/photo-1537151377170-9c19a791bbea?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Motores Originales",
        image:
          "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    title: "Insumos Eléctricos",
    accent: "#0EA5E9",
    items: [
      {
        name: "Cableado y Tubería",
        image:
          "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Breakers y Tableros",
        image:
          "https://images.unsplash.com/photo-1621535921896-1c4b7b2fb0a6?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Interruptores y Tomas",
        image:
          "https://images.unsplash.com/photo-1584950348704-51543d2c8c4a?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Luminarias y Sensores",
        image:
          "https://images.unsplash.com/photo-1523315904943-345389dd88fa?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

export function ProductsFull() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #07090D 0%, #0C0F16 50%, #07090D 100%)",
      }}
    >
      {/* Ambient */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[400px] rounded-full opacity-[0.03] blur-[140px]"
        style={{ background: "#F59E0B" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[350px] rounded-full opacity-[0.03] blur-[120px]"
        style={{ background: "#0EA5E9" }}
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
              Inventario Especializado
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
            className="text-4xl md:text-5xl lg:text-[60px] font-black text-white leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            Suministros originales
            <br />
            <span
              style={{
                background:
                  "linear-gradient(120deg, #fff 20%, rgba(255,255,255,0.38))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
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
            className="text-[15px] text-white/40 leading-relaxed font-light max-w-2xl"
          >
            Distribuimos refacciones originales y materiales eléctricos para
            garantizar la máxima durabilidad en cada intervención que
            realizamos o que su empresa necesite.
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
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/[0.08]"
                  >
                    <CopyPlus size={18} style={{ color: group.accent }} />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-black tracking-tight"
                    style={{ fontFamily: "'Sora', sans-serif", color: group.accent }}
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
                    className="group relative flex flex-col p-3 rounded-2xl h-full"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Hover Glow Edge */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 0 1px ${group.accent}40`,
                      }}
                    />

                    {/* Image Box */}
                    <div className="relative h-48 rounded-xl overflow-hidden mb-5 bg-[#0A0C12]">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-col flex-1 px-2 pb-2">
                      <h4
                        className="font-bold text-[17px] text-white tracking-tight mb-4"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.name}
                      </h4>
                      <div className="mt-auto pt-4 border-t border-white/[0.04]">
                        <button
                          onClick={() =>
                            window.open(
                              `https://wa.me/573182732524?text=Hola,%20busco%20la%20disponibilidad%20para%20el%20producto:%20${encodeURIComponent(
                                item.name
                              )}`,
                              "_blank"
                            )
                          }
                          className="w-full flex items-center justify-between group/btn"
                        >
                          <span className="text-[11px] font-bold tracking-widest uppercase text-white/50 transition-colors group-hover/btn:text-white">
                            Consultar
                          </span>
                          <span
                            className="flex items-center justify-center w-7 h-7 rounded-lg transition-colors group-hover/btn:bg-white/10"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                          >
                            <ArrowRight
                              size={14}
                              className="text-white/50 group-hover/btn:text-white transition-colors"
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

