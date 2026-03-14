"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, onMount = false }: { children: React.ReactNode, delay?: number, onMount?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      {...(onMount ? { animate: { opacity: 1, y: 0 } } : { whileInView: { opacity: 1, y: 0 } })}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
