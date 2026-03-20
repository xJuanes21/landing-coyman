"use client"

import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#05070A] overflow-hidden pt-24 pb-10 border-t border-white/[0.04]">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#0EA5E9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                <span className="text-xl font-black text-white" style={{ fontFamily: "'Sora', sans-serif" }}>C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-black tracking-tight text-white leading-none" style={{ fontFamily: "'Sora', sans-serif" }}>COYMAN</span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase leading-none mt-1">Proyectos</span>
              </div>
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed font-light mb-8 max-w-xs">
              Soluciones técnicas de la más alta calidad para su hogar y empresa, respaldadas por ingenieros certificados y décadas de experiencia operando.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#0EA5E9] hover:border-[#0EA5E9]/30 hover:bg-[#0EA5E9]/10 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 font-mono mb-8">Navegación</h4>
            <ul className="space-y-4">
              {[
                { name: "Inicio", href: "/" },
                { name: "Sobre Nosotros", href: "/sobre-nosotros" },
                { name: "Servicios", href: "/servicios" },
                { name: "Suministros", href: "/productos" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[13px] text-white/40 hover:text-white transition-colors flex items-center gap-2 group w-fit">
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 font-mono mb-8">Especialidades</h4>
            <ul className="space-y-4">
              {[
                "Línea Blanca y Lavado",
                "Refrigeración Residencial",
                "Instalaciones Eléctricas",
                "Aires Acondicionados",
              ].map((item, i) => (
                <li key={i} className="text-[13px] text-white/40 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#0EA5E9]/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 font-mono mb-8">Contacto</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 shrink-0 text-[#0EA5E9]">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase mb-1">Sede Cali</div>
                  <span className="text-[13px] text-white/50 leading-snug block">Calle 102 f # 23b-68<br/>Valle del Cauca, Colombia</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 shrink-0 text-[#10B981]">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase mb-1">Línea Atención</div>
                  <a href="tel:3182732524" className="text-[13px] text-white/50 hover:text-white transition-colors block">318 273 2524</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 shrink-0 text-[#F59E0B]">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase mb-1">Correo Electrónico</div>
                  <a href="mailto:coymanproyectos@gmail.com" className="text-[13px] text-white/50 hover:text-white transition-colors block">coymanproyectos@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} Coyman Proyectos. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-white/20 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Operando al 100% en Cali y Valle del Cauca
          </div>
        </div>
      </div>
    </footer>
  )
}
