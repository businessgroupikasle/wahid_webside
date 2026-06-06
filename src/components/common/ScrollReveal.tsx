"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}
