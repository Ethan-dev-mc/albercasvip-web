"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

const containerVariants = (stagger: number, delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const EASE = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export function StaggerGrid({
  children,
  className = "",
  stagger = 0.09,
  delay = 0.05,
}: Props) {
  const reduced = useReducedMotion();
  const iv = reduced ? itemVariantsReduced : itemVariants;

  return (
    <motion.div
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {React.Children.map(children, (child, i) =>
        child ? (
          <motion.div
            key={i}
            variants={iv}
            style={{ willChange: "transform, opacity" }}
          >
            {child}
          </motion.div>
        ) : null,
      )}
    </motion.div>
  );
}
