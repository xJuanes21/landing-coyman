"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  icon: Icon,
  error,
  id,
  value,
  ...props
}) => {
  return (
    <div className="group relative w-full pt-6">
      <div className="relative flex items-center bg-white/[0.02] rounded-t-xl border-x border-t border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-300">
        {/* Icon */}
        <div className="absolute left-4 text-white/30 group-focus-within:text-[#10B981] transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>

        {/* Input */}
        <input
          {...props}
          id={id}
          value={value}
          className={`
            peer w-full bg-transparent border-b-2 py-3 pl-12 pr-4 text-white outline-none transition-all duration-300 rounded-t-xl
            ${error ? "border-red-500" : "border-white/[0.08] focus:border-[#10B981]"}
          `}
          placeholder=" "
        />

        {/* Label (Floating) */}
        <label
          htmlFor={id}
          className={`
            absolute left-12 pointer-events-none transition-all duration-300
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-white/40
            peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#10B981]
            ${value ? "-top-4 text-sm text-[#10B981]" : ""}
          `}
        >
          {label}
        </label>

        {/* Bottom Bar Effect */}
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#10B981] transition-all duration-300 peer-focus:left-0 peer-focus:w-full" />
        
        {/* Subtle background glow on focus */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-500">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#10B981]/10 blur-xl" />
        </div>
      </div>

      {error && <p className="mt-2 text-xs text-red-400 font-medium pl-2">{error}</p>}
    </div>
  );
};

interface FloatingTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
}

export const FloatingTextArea: React.FC<FloatingTextAreaProps> = ({
  label,
  icon: Icon,
  error,
  id,
  value,
  ...props
}) => {
  return (
    <div className="group relative w-full pt-6">
      <div className="relative flex items-start bg-white/[0.02] rounded-t-xl border-x border-t border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-300">
        {/* Icon */}
        <div className="absolute left-4 top-4 text-white/30 group-focus-within:text-[#10B981] transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>

        {/* TextArea */}
        <textarea
          {...props}
          id={id}
          value={value}
          className={`
            peer w-full bg-transparent border-b-2 py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 resize-none rounded-t-xl
            ${error ? "border-red-500" : "border-white/[0.08] focus:border-[#10B981]"}
          `}
          placeholder=" "
        />

        {/* Label (Floating) */}
        <label
          htmlFor={id}
          className={`
            absolute left-12 pointer-events-none transition-all duration-300
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-white/40
            peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#10B981]
            ${value ? "-top-4 text-sm text-[#10B981]" : ""}
          `}
        >
          {label}
        </label>

        {/* Bottom Bar Effect */}
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#10B981] transition-all duration-300 peer-focus:left-0 peer-focus:w-full" />
        
        {/* Subtle background glow on focus */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-500">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#10B981]/10 blur-xl" />
        </div>
      </div>

      {error && <p className="mt-2 text-xs text-red-400 font-medium pl-2">{error}</p>}
    </div>
  );
};
