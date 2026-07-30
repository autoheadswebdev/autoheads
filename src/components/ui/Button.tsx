"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out overflow-hidden rounded-full";
  
  const variants = {
    primary:
      "bg-brand-graphite text-brand-white hover:bg-brand-charcoal hover:shadow-md",
    secondary:
      "bg-brand-white text-brand-graphite border border-brand-border hover:border-brand-silver hover:bg-brand-soft",
    outline:
      "bg-transparent text-brand-graphite border border-brand-graphite hover:bg-brand-graphite hover:text-brand-white",
    ghost: "bg-transparent text-brand-silver hover:text-brand-graphite",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
