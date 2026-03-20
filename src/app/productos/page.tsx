import type { Metadata } from "next"
import { ProductsFull } from "@/components/sections/products/ProductsFull"
import { CTA } from "@/components/sections/landing/CTA"

export const metadata: Metadata = {
  title: "Productos y Repuestos | Coyman Proyectos",
  description: "Repuestos originales para línea blanca y materiales eléctricos de la máxima calidad garantizada en Cali.",
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-10">
        <ProductsFull />
      </div>
      <CTA />
    </div>
  )
}
