"use client";

import { useState } from "react";

type Service = {
  title: string;
  short: string;
};

const services: Service[] = Array(6).fill({
  title: "VEHICLE DOCUMENTATION",
  short:
    "Comprehensive automotive solutions designed to meet all your vehicle needs",
});

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentIndex = hoveredIndex ?? activeIndex;

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-start gap-4">
        <h2 className="text-2xl font-light uppercase tracking-wide leading-tight max-w-[200px]">
          Our Services
        </h2>

        <p className="grid justify-items-end text-gray-500 text-left md:text-right text-xs md:text-sm max-w-[300px]">
          Comprehensive automotive solutions designed to meet all your vehicle needs
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-16 px-4 md:px-10">
        <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const isActive = index === currentIndex;
            const isClicked = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative cursor-pointer transition-all duration-300
                  min-h-[160px] md:min-h-[256px] p-6 overflow-hidden
                  ${isClicked ? "bg-gray-200" : "bg-gray-100"}
                `}
              >
                {/* Blur overlay */}
                {!isActive && (
                  <div className="absolute inset-0 backdrop-blur-sm bg-white/30 z-10 transition-opacity duration-300" />
                )}

                <div className="relative z-20 flex flex-col h-full justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    {service.title}
                  </h3>

                  {isClicked && (
                    <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {service.short}
                      </p>

                      <div className="mt-4 flex justify-end text-right gap-1 group">
                        <span className="underline text-sm font-semibold">
                          Learn more
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}