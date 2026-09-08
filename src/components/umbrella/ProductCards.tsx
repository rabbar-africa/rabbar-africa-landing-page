"use client";

import Link from "next/link";
import { ArrowRight, Building2, Car, Wrench } from "lucide-react";
import { PRODUCTS, PRODUCT_LIST } from "@/data/products";
import {
  HoverLift,
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/ui/motion";

const ICONS = {
  "/jobcard": Wrench,
  "/garage": Car,
  "/fleet": Building2,
} as const;

export function ProductCards() {
  return (
    <section id="products" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#013064]">
            What we build
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F3E] tracking-[-0.02em]">
            Three products, one operation
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Each one solves a different problem, and each one is built on the
            same workshop floor.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {PRODUCT_LIST.map((product) => {
            const Icon = ICONS[product.slug as keyof typeof ICONS];
            return (
              <RevealItem key={product.slug} className="h-full">
                <HoverLift>
                  <Link
                    href={product.slug}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2"
                  >
                    {/* Accent wash on hover */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{ backgroundColor: product.accent.hex }}
                    />
                    {/* Accent rule that grows on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-1 w-12 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: product.accent.hex }}
                    />

                    <span
                      className="relative flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${product.accent.hex}1f` }}
                    >
                      <Icon
                        size={22}
                        aria-hidden="true"
                        style={{ color: product.accent.onLight }}
                      />
                    </span>

                    <p
                      className="relative mt-6 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: product.accent.onLight }}
                    >
                      {product.audience}
                    </p>
                    <h3 className="relative mt-2 font-display text-2xl font-bold text-[#001F3E] tracking-tight">
                      {product.name}
                    </h3>
                    <p className="relative mt-2 font-medium text-[#013064]">
                      {product.pitch}
                    </p>
                    <p className="relative mt-3 text-gray-600 leading-relaxed grow">
                      {product.blurb}
                    </p>

                    <span className="relative mt-6 flex flex-wrap gap-1.5">
                      {product.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-[#F4F4F4] px-2.5 py-1 text-xs font-medium text-gray-600"
                        >
                          {h}
                        </span>
                      ))}
                    </span>

                    <span className="relative mt-7 inline-flex items-center gap-1.5 font-semibold text-[#001F3E]">
                      Learn more
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </HoverLift>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Garage is the proof the other two rest on. */}
        <Reveal delay={0.1} className="mt-10">
          <div className="relative overflow-hidden rounded-2xl bg-[#001F3E] p-8 sm:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DAE648]/10 blur-3xl"
            />
            <p className="relative max-w-3xl text-lg sm:text-xl text-gray-200 leading-relaxed">
              We run our own workshop in Lagos.{" "}
              <span className="font-semibold text-white">
                {PRODUCTS.jobcard.name}
              </span>{" "}
              is the software we built to run it, and{" "}
              <span className="font-semibold text-white">
                {PRODUCTS.fleet.name}
              </span>{" "}
              is that same operation offered to companies — so neither one is
              theory.
            </p>
            <Link
              href={PRODUCTS.garage.slug}
              className="group relative mt-5 inline-flex items-center gap-2 font-semibold text-[#DAE648] hover:text-[#E8F34F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DAE648] focus-visible:rounded-sm"
            >
              See the workshop
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
