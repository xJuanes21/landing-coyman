import { Hero } from "@/components/sections/landing/Hero"
import { ServicesPreview } from "@/components/sections/landing/ServicesPreview"
import { Benefits } from "@/components/sections/landing/Benefits"
import { CTA } from "@/components/sections/landing/CTA"
import { ProductsPreview } from "@/components/sections/landing/ProductsPreview"
import { Trust } from "@/components/sections/landing/Trust"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesPreview />
      <Benefits />
      <CTA />
      <ProductsPreview />
      <Trust />
    </div>
  )
}
