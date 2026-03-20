"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Productos", href: "/productos" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50 group">
              <Image
                src="/logo-coyman.png"
                alt="Coyman Proyectos Logo"
                width={70}
                height={40}
                className="group-hover:opacity-80 transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-colors group"
                  >
                    <span
                      className={`relative z-10 ${isActive ? "text-[var(--color-brand-blue)] font-bold" : "text-[var(--color-brand-dark)] hover:text-[var(--color-brand-orange)]"}`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-[var(--color-brand-blue)]/5"
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
              <div className="ml-4 pl-4 border-l border-white/10 flex items-center">
                <Link href="/contacto" passHref>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 rounded-full text-[12px] font-black tracking-wide text-white cursor-pointer"
                    style={{
                      background: "var(--color-brand-orange)",
                      boxShadow: "0 8px 20px rgba(228,128,44,0.3)",
                    }}
                  >
                    Cotizar ahora
                  </motion.div>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 p-2 text-[var(--color-brand-dark)] hover:text-[var(--color-brand-orange)] transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-brand-bg)]/95 backdrop-blur-xl md:hidden"
          >
            {/* Top glowing orb */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-brand-orange)]/5 rounded-full blur-[100px]" />

            <nav className="flex flex-col items-center justify-center h-full gap-8 relative z-10 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-black tracking-tight relative ${pathname === link.href ? "text-[var(--color-brand-blue)]" : "text-[var(--color-brand-dark)]"}`}
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="mobile-nav-active"
                      className="h-1 w-1/2 bg-[var(--color-brand-orange)] mx-auto mt-2 rounded-full"
                    />
                  )}
                </Link>
              ))}

              <div className="mt-8 pt-8 border-t border-white/5 w-full max-w-xs">
                <Link href="/contacto" passHref className="w-full block">
                  <button
                    className="w-full py-4 rounded-xl text-[14px] font-black tracking-wide text-white flex items-center justify-center gap-2"
                    style={{
                      background: "var(--color-brand-orange)",
                      boxShadow: "0 8px 20px rgba(228,128,44,0.3)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cotizar ahora
                  </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
