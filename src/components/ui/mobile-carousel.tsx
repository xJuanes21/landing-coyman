"use client";

import React from "react";
import { motion } from "framer-motion";

interface MobileCarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileCarousel({
  children,
  className = "",
}: MobileCarouselProps) {
  return (
    <motion.div
      className={`
        /* Mobile: Horizontal Scroll */
        flex overflow-x-auto snap-x snap-mandatory 
        pb-8 pt-8 -my-8 px-4 scrollbar-hide
        items-stretch
        
        /* Desktop: Standard Grid or Flex (controlled by parent/className) */
        md:grid md:overflow-visible md:pb-0 md:pt-0 md:my-0 md:px-0
        
        ${className}
      `}
    >
      {React.Children.map(children, (child) => (
        <div className="snap-center shrink-0 w-[85vw] px-2 md:w-auto flex flex-col items-stretch">
          {child}
        </div>
      ))}
    </motion.div>
  );
}
