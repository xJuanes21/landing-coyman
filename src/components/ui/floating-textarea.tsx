"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
}

export const FloatingTextarea: React.FC<FloatingTextareaProps> = ({
  label,
  icon: Icon,
  error,
  id,
  value,
  className = "",
  ...props
}) => {
  return (
    <div className={`group relative w-full pt-6 ${className}`}>
      <div className="relative flex items-start">
        {/* Icon */}
        <div className="absolute left-0 top-3 text-[var(--color-brand-muted)] group-focus-within:text-[var(--color-brand-orange)] transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>

        {/* Textarea */}
        <textarea
          id={id}
          value={value}
          className="peer w-full bg-transparent border-b-2 border-[var(--color-brand-blue)]/10 text-[var(--color-brand-dark)] text-[15px] font-medium pl-9 pr-4 py-3 min-h-[120px] resize-y outline-none transition-all duration-300 focus:border-[var(--color-brand-orange)] disabled:opacity-50"
          placeholder=" "
          {...props}
        />

        {/* Floating Label */}
        <label
          htmlFor={id}
          className="absolute left-9 top-3 text-[14px] text-[var(--color-brand-muted)] font-medium transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:left-0 peer-focus:text-[12px] peer-focus:text-[var(--color-brand-orange)] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-[var(--color-brand-blue)] peer-[:not(:placeholder-shown)]:font-bold"
        >
          {label}
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <span className="absolute -bottom-5 left-0 text-[11px] font-medium text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};
