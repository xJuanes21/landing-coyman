"use client";

import Image from "next/image";

const logos = [
  { src: "/carrousel/part1.png", alt: "Socio Coyman 1" },
  { src: "/carrousel/part2.png", alt: "Socio Coyman 2" },
  { src: "/carrousel/part3.png", alt: "Socio Coyman 3" },
  { src: "/carrousel/part4.png", alt: "Socio Coyman 4" },
];

// Double the logos for seamless loop
const extendedLogos = [...logos, ...logos, ...logos, ...logos];

export function LogoCarousel() {
  return (
    <section className="relative -mt-12 mb-12 py-12 bg-transparent overflow-hidden select-none z-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[var(--color-brand-bg)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[var(--color-brand-bg)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center w-max animate-scroll will-change-transform">
          {[...extendedLogos, ...extendedLogos].map((logo, index) => (
            <div
              key={index}
              className="relative w-72 h-48 md:w-80 md:h-40 transition-all duration-500 cursor-default flex items-center justify-center shrink-0 px-4 md:px-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating subtle dots/decoration */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/10 to-transparent" />
    </section>
  );
}
