"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-brand-blue)] overflow-hidden pt-24 pb-10 border-t border-black/5">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[var(--color-brand-orange)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-brand-orange)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8 group">
              <Image
                src="/logo-coyman-completo.png"
                alt="Coyman Proyectos"
                width={200}
                height={60}
                className="h-36 w-auto group-hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
              />
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed font-light mb-8 max-w-xs">
              Soluciones técnicas de la más alta calidad para su hogar y
              empresa, respaldadas por ingenieros certificados y décadas de
              experiencia operando.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/60 hover:text-[var(--color-brand-orange)] hover:border-[var(--color-brand-orange)]/30 hover:bg-[var(--color-brand-orange)]/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 font-mono mb-8">
              Navegación
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Inicio", href: "/" },
                { name: "Sobre Nosotros", href: "/sobre-nosotros" },
                { name: "Servicios", href: "/servicios" },
                { name: "Suministros", href: "/productos" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/40 hover:text-white transition-colors flex items-center gap-2 group w-fit"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 font-mono mb-8">
              Especialidades
            </h4>
            <ul className="space-y-4">
              {[
                "Línea Blanca y Lavado",
                "Refrigeración Residencial",
                "Instalaciones Eléctricas",
                "Aires Acondicionados",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-[13px] text-white/60 flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-[var(--color-brand-orange)]/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 font-mono mb-8">
              Contacto
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 shrink-0 text-white/80">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">
                    Sede Cali
                  </div>
                  <span className="text-[13px] text-white/70 leading-snug block">
                    Calle 102 f # 23b-68
                    <br />
                    Valle del Cauca, Colombia
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[var(--color-brand-orange)]/10 border border-[var(--color-brand-orange)]/20 shrink-0 text-[var(--color-brand-orange)]">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">
                    Línea Atención
                  </div>
                  <a
                    href="tel:3182732524"
                    className="text-[13px] text-white/70 hover:text-white transition-colors block"
                  >
                    318 273 2524
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 shrink-0 text-white/80">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">
                    Correo Electrónico
                  </div>
                  <a
                    href="mailto:coymanproyectos@gmail.com"
                    className="text-[13px] text-white/70 hover:text-white transition-colors block"
                  >
                    coymanproyectos@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Coyman Proyectos. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
