"use client";

import { type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared scroll-reveal primitives.
 *
 * Everything here honours `prefers-reduced-motion`: when the user has asked for
 * less motion we render the final state immediately rather than animating.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={reduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct children as the container scrolls into view. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial={reduce ? "show" : "hidden"}
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** A single staggered child inside a RevealGroup. */
export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={revealItem} className={className}>
      {children}
    </motion.div>
  );
}

/** Subtle lift on hover, disabled under reduced motion. */
export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
