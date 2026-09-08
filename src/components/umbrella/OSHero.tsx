"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { PRODUCT_LIST } from "@/data/products";
import { softwareDemoLink } from "@/data/constant";

const BADGES = [
  "Built and run in Lagos",
  "Workshop software",
  "Our own garage",
  "Corporate fleets",
];

export function OSHero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative bg-[#001F3E] overflow-hidden">
      {/* Ambient colour — one blob per product accent. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-48 -right-24 h-[36rem] w-[36rem] rounded-full bg-[#DAE648]/12 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#4CC9E8]/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-[24rem] w-[24rem] rounded-full bg-[#FF8A3D]/8 blur-3xl" />
      </div>

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <motion.p
          {...rise(0)}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-gray-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DAE648] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#DAE648]" />
          </span>
          Three products, one operation
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="mt-7 max-w-4xl font-display text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em]"
        >
          The operating system for{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10 text-[#DAE648]">auto</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 120 12"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 h-2.5 w-full text-[#DAE648]/35"
            >
              <path
                d="M2 8c28-5 62-6 116-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          in Nigeria
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="mt-7 max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          Software for workshops, a workshop of our own, and fleet management
          for companies — designed, built and run by one team in Lagos.
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap gap-2">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-sm text-gray-300"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          {...rise(0.32)}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#products"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#DAE648] px-7 py-3.5 font-semibold text-[#001F3E] transition-all hover:bg-[#E8F34F] hover:shadow-[0_8px_30px_-8px_rgba(218,230,72,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DAE648] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001F3E]"
          >
            Explore what we build
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <a
            href={softwareDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Talk to us
          </a>
        </motion.div>

        {/* Product shot, tilted slightly and cropped by the section edge. */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-2xl backdrop-blur">
            <Image
              src="/product/dashboard.png"
              alt="The Jobcard dashboard showing invoiced, net profit, expenses, overdue and total revenue for a Lagos workshop"
              width={1800}
              height={518}
              priority
              sizes="(max-width: 1023px) 100vw, 1100px"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-400">
            Jobcard, the software behind all three — running in our own
            workshop.
          </p>
        </motion.div>
      </div>

      {/* Product quick-links rail */}
      <div className="relative border-t border-white/10 bg-[#001732]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {PRODUCT_LIST.map((product) => (
              <Link
                key={product.slug}
                href={product.slug}
                className="group flex items-center justify-between gap-4 px-2 py-5 sm:px-6 transition-colors hover:bg-white/[0.04] focus-visible:outline-none focus-visible:bg-white/[0.06]"
              >
                <span>
                  <span
                    className="block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: product.accent.hex }}
                  >
                    {product.audience}
                  </span>
                  <span className="mt-1 block font-display font-semibold text-white">
                    {product.name}
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-gray-500 transition-all group-hover:translate-x-1 group-hover:text-white"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
