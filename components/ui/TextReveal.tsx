"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

const container = (delay: number, stagger: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const EASE = [0.22, 1, 0.36, 1] as const;

const word = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.65, ease: EASE },
  },
};

export function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.045,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <motion.span
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-0 ${className}`}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block leading-none pb-[0.1em]"
        >
          <motion.span
            variants={word}
            className="inline-block"
            style={{ willChange: "transform" }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
