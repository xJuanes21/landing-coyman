"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import Link from "next/link";
import {
  Plug,
  Settings,
  ArrowUpRight,
  Package,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";

const products = [
  {
    id: 1,
    index: "01",
    title: "Repuestos Originales",
    tag: "LÍNEA BLANCA",
    icon: Settings,
    desc: "Piezas de fábrica certificadas para garantizar el correcto funcionamiento y durabilidad de su línea blanca.",
    accent: "#e4802c",
    items: [
      "Motores y bombas",
      "Tarjetas electrónicas",
      "Resistencias y termostatos",
      "Correas y rodamientos",
    ],
    stat: "500+",
    statLabel: "referencias en stock",
  },
  {
    id: 2,
    index: "02",
    title: "Material Eléctrico",
    tag: "INSUMOS & EQUIPOS",
    icon: Plug,
    desc: "Insumos y equipos certificados para tableros, cableado estructurado e iluminación residencial y comercial.",
    accent: "#0f2549",
    items: [
      "Cableado THHN certificado",
      "Breakers y protecciones",
      "Luminarias LED",
      "Tomas e interruptores",
    ],
    stat: "RETIE",
    statLabel: "materiales certificados",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-60, 60], [3, -3]), {
    stiffness: 180,
    damping: 22,
  });
  const ry = useSpring(useTransform(mx, [-60, 60], [-3, 3]), {
    stiffness: 180,
    damping: 22,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => {
        if (!ref.current || window.innerWidth < 768) return;
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
        className="absolute -inset-px rounded-2xl blur-lg pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(ellipse at 40% 30%, ${product.accent}22, transparent 65%)`,
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden h-full bg-white border border-[var(--color-brand-blue)]/5"
        style={{
          boxShadow: hovered
            ? `0 28px 64px rgba(15,37,73,0.08)`
            : `0 10px 28px rgba(15,37,73,0.04)`,
          transition: "box-shadow 0.35s ease",
        }}
      >
        {/* Top accent bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${product.accent}, transparent)`,
          }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <span className="text-[9px] font-black tracking-[0.3em] uppercase font-mono text-[var(--color-brand-muted)] block mb-1">
                {product.index}
              </span>
              <span
                className="text-[9px] font-black tracking-[0.28em] uppercase"
                style={{ color: product.accent, opacity: 1 }}
              >
                {product.tag}
              </span>
            </div>

            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              animate={hovered ? { scale: 1.07 } : { scale: 1 }}
              style={{
                background: `linear-gradient(145deg, ${product.accent}15, ${product.accent}05)`,
                border: `1px solid ${product.accent}20`,
              }}
            >
              <product.icon
                size={26}
                style={{ color: product.accent }}
                strokeWidth={1.5}
              />
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className="text-3xl font-black text-[var(--color-brand-blue)] tracking-tight mb-2"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            {product.title}
          </h3>

          <div
            className="w-8 h-[2px] mb-5"
            style={{
              background: `linear-gradient(90deg, ${product.accent}90, transparent)`,
            }}
          />

          {/* Description */}
          <p className="text-[13px] text-[var(--color-brand-dark)]/80 leading-relaxed font-light mb-8">
            {product.desc}
          </p>

          {/* Item list */}
          <ul className="space-y-2.5 mb-10">
            {product.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.06 + 0.3 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: product.accent, opacity: 0.8 }}
                />
                <span className="text-[12.5px] text-[var(--color-brand-dark)] font-medium">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Bottom: stat + action */}
          <div className="flex items-end justify-between pt-6 border-t border-[var(--color-brand-blue)]/5">
            <div>
              <div
                className="text-2xl font-black tracking-tight"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  color: product.accent,
                }}
              >
                {product.stat}
              </div>
              <div className="text-[9px] font-bold tracking-widest uppercase text-[var(--color-brand-muted)] mt-0.5">
                {product.statLabel}
              </div>
            </div>

            <motion.div
              className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase cursor-pointer"
              style={{ color: product.accent, opacity: hovered ? 1 : 0.6 }}
              animate={hovered ? { x: 0 } : { x: -3 }}
              transition={{ duration: 0.3 }}
            >
              Ver catálogo
              <ArrowUpRight size={13} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductsPreview() {
  return (
    <section
      className="relative py-32 overflow-hidden bg-[var(--color-brand-bg)]"
    >
      {/* Ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.05] blur-[130px]"
        style={{ background: "var(--color-brand-orange)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full opacity-[0.05] blur-[110px]"
        style={{ background: "var(--color-brand-blue)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[var(--color-brand-muted)]/50" />
              <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[var(--color-brand-muted)] font-mono">
                Inventario & Suministros
              </span>
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
              className="text-5xl lg:text-[58px] font-black text-[var(--color-brand-blue)] leading-[1.02] tracking-tight"
              style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >
              Productos{" "}
              <span
                style={{
                  color: "var(--color-brand-orange)",
                }}
              >
                & Repuestos
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-[15px] text-[var(--color-brand-dark)]/80 leading-relaxed max-w-xs lg:text-right font-light"
          >
            Además de servicios, proveemos partes originales e insumos
            eléctricos con total garantía de calidad.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="w-full max-w-5xl mx-auto">
          <MobileCarousel className="md:grid-cols-2 md:gap-5 md:auto-rows-fr">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </MobileCarousel>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 rounded-2xl bg-white border border-[var(--color-brand-blue)]/5 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <Package size={15} className="text-[var(--color-brand-blue)]" />
            <span className="text-[12px] text-[var(--color-brand-dark)]/80 font-medium">
              Despacho a todo el Valle del Cauca · Entrega el mismo día
              disponible
            </span>
          </div>

          <Link href="/productos" passHref>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-[12px] font-bold tracking-wide text-[var(--color-brand-blue)] transition-all duration-300 group shrink-0"
              style={{
                background: "rgba(15,37,73,0.04)",
                border: "1px solid rgba(15,37,73,0.1)",
              }}
            >
              Catálogo completo
              <ChevronRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
