import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "COYMAN PROYECTOS | Mantenimiento y Reparación de Línea Blanca en Cali",
  description:
    "Servicios técnicos profesionales para lavadoras, neveras y electrodomésticos en Cali. Más de 15 años de experiencia con técnicos certificados y garantía total en cada trabajo.",
  keywords: [
    "reparación de lavadoras Cali",
    "mantenimiento de neveras",
    "servicio técnico línea blanca",
    "técnico electrodomésticos Cali",
    "Coyman Proyectos",
    "reparación de estufas",
    "mantenimiento aire acondicionado",
    "servicios integrales hogar",
    "reparación Whirlpool Cali",
    "reparación Samsung Cali",
    "reparación LG Cali",
  ],
  authors: [{ name: "COYMAN PROYECTOS" }],
  openGraph: {
    title: "COYMAN PROYECTOS - Expertos en Mantenimiento y Reparación",
    description:
      "Soluciones técnicas integrales con la más alta calidad y calidez humana en Cali y el Valle del Cauca. Reparamos para que dure.",
    url: "https://coymanproyectos.com",
    siteName: "COYMAN PROYECTOS",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo-coyman-completo.png",
        width: 1200,
        height: 630,
        alt: "COYMAN PROYECTOS - Servicios Integrales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COYMAN PROYECTOS - Mantenimiento y Reparación en Cali",
    description:
      "Expertos en línea blanca y soluciones técnicas para su hogar o empresa con garantía certificada.",
    images: ["/logo-coyman-completo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
