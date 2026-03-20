import type { Metadata } from "next"
import { AboutContent } from "@/components/sections/about/AboutContent"
import { CTA } from "@/components/sections/landing/CTA"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Coyman Proyectos",
  description: "Conozca nuestra historia, misión y visión corporativa. Expertos en línea blanca e instalaciones eléctricas en Cali.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-10">
        <AboutContent />
      </div>
      <CTA />
    </div>
  )
}
