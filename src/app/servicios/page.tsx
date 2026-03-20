import type { Metadata } from "next"
import { ServicesFull } from "@/components/sections/services/ServicesFull"
import { CTA } from "@/components/sections/landing/CTA"

export const metadata: Metadata = {
  title: "Nuestros Servicios | Coyman Proyectos",
  description: "Reparación de lavadoras, neveras, aires acondicionados e instalaciones eléctricas certificadas.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-10">
        <ServicesFull />
      </div>
      <CTA />
    </div>
  )
}
