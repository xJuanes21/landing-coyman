"use client";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { getWhatsAppUrl } from "@/lib/social";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [nudged, setNudged] = useState(false);
  const controls = useAnimation();

  const whatsappUrl = getWhatsAppUrl();

  // Nudge de atención cada ~8s
  useEffect(() => {
    const cycle = async () => {
      if (hovered) return;
      setNudged(true);
      controls.start({
        y: [0, -10, 4, -6, 2, 0],
        rotate: [0, -4, 3, -2, 1, 0],
        transition: { duration: 0.7, ease: "easeInOut" },
      });
      // Mantener el tooltip (efecto) visible por más tiempo (3.5 segundos) antes de ocultarse
      await new Promise((resolve) => setTimeout(resolve, 3800));
      setNudged(false);
    };

    const first = setTimeout(cycle, 3500);
    const interval = setInterval(cycle, 12000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, [hovered, controls]);

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-7 right-7 z-50"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        animate={controls}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center"
      >
        {/* Breathing glow — siempre activo, se intensifica en nudge */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          animate={{
            scale: nudged ? [1, 1.7, 1] : [1, 1.45, 1],
            opacity: nudged ? [0.45, 0, 0.45] : [0.25, 0, 0.25],
          }}
          transition={{
            duration: nudged ? 0.7 : 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            inset: "-10px",
            background:
              "radial-gradient(circle, rgba(37,211,102,0.5), transparent 65%)",
          }}
        />

        {/* Segundo ring desfasado */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          animate={{ scale: [1, 1.28, 1], opacity: [0.15, 0, 0.15] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.3,
          }}
          style={{
            inset: "-4px",
            background:
              "radial-gradient(circle, rgba(37,211,102,0.35), transparent 70%)",
          }}
        />

        {/* Tooltip — aparece durante el nudge */}
        <AnimatePresence>
          {nudged && !hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.93 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div
                className="relative px-4 py-2.5 rounded-xl whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,20,28,0.97), rgba(10,14,20,0.99))",
                  border: "1px solid rgba(37,211,102,0.25)",
                  boxShadow:
                    "0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,211,102,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  className="text-[12px] font-black text-white tracking-wide block"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  ¿Necesita ayuda?
                </span>
                <span className="text-[10px] text-white/38 font-medium mt-0.5 block">
                  Respondemos en minutos
                </span>
                {/* Flecha */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-3 h-3 rotate-45"
                  style={{
                    background: "rgb(10,14,20)",
                    border: "1px solid rgba(37,211,102,0.18)",
                    borderLeft: "none",
                    borderBottom: "none",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pill principal */}
        <motion.div
          animate={{
            width: hovered ? "auto" : "56px",
            borderRadius: hovered ? "18px" : "28px",
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center overflow-hidden h-14"
          style={{
            background:
              "linear-gradient(135deg, #1DB954, #25D366 55%, #20C55A)",
            boxShadow: hovered
              ? "0 0 0 1px rgba(37,211,102,0.4), 0 20px 50px rgba(37,211,102,0.35), 0 4px 12px rgba(0,0,0,0.4)"
              : "0 0 0 1px rgba(37,211,102,0.22), 0 10px 28px rgba(37,211,102,0.2), 0 4px 8px rgba(0,0,0,0.35)",
            transition: "box-shadow 0.35s ease",
          }}
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                }}
              />
            )}
          </AnimatePresence>

          <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
            <motion.div
              animate={hovered ? { rotate: [0, -8, 8, 0] } : {}}
              transition={{ duration: 0.45 }}
            >
              <svg
                fill="white"
                viewBox="0 0 32 32"
                className="w-[26px] h-[26px]"
              >
                <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
              </svg>
            </motion.div>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden pr-5 flex flex-col items-start"
              >
                <motion.span
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 4, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 }}
                  className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60 leading-none whitespace-nowrap"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Cotizar ahora
                </motion.span>
                <motion.span
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 4, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="text-[14px] font-black text-white leading-tight whitespace-nowrap mt-0.5"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  WhatsApp
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.a>
    </motion.div>
  );
}
