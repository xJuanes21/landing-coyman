import { ProductsFull } from "@/components/sections/products/ProductsFull";
import { CTA } from "@/components/sections/landing/CTA";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-10">
        <ProductsFull />
      </div>
      <CTA />
    </div>
  );
}
