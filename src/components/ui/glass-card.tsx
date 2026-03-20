"use client"
import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

export function GlassCard({ className, hoverEffect = true, children, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.15)" } : {}}
      className={cn("glass-card p-6 overflow-hidden relative", className)}
      {...props}
    >
      {/* Optional shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
