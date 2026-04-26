"use client";

import { useState } from "react";
import PageContainer from "../elements/PageContainer";
import learnMoreIcon from "@/assets/icons/learn-more.svg";
import Image from "next/image";
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

  return (
    <section className="w-full bg-white py-30">
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="max-w-56.5">
            <h2 className="text-5xl font-light uppercase tracking-[-1.92px] leading-tight ">
              Our Services
            </h2>
          </div>

          <div className="max-w-83.5">
            <p>
              Comprehensive automotive solutions designed to meet all your
              vehicle needs
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3">
          {services.map((service, index) => {
            const isClicked = index === activeIndex;
            const isHovered = index === hoveredIndex;
            const isBlurred = !isClicked && !isHovered;

            const isLastCol = index % 3 === 2;
            const isLastItem = index === services.length - 1;
            const isInLastRowDesktop = index >= services.length - 3;

            const bottomBorder = isLastItem
              ? ""
              : isInLastRowDesktop
                ? "border-b md:border-b-0 border-[#DCDCDC]"
                : "border-b border-[#DCDCDC]";
            const rightBorder = isLastCol ? "" : "md:border-r border-[#DCDCDC]";

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative cursor-pointer transition-colors duration-300
                  h-100 px-10 overflow-hidden border-[#DCDCDC]
                  ${bottomBorder} ${rightBorder}
                  ${isClicked ? "bg-gray-200" : "bg-white"}
                `}
              >
                <div className="flex flex-col h-full justify-center">
                  <h3
                    className={`text-2xl font-medium uppercase tracking-[-.96px] w-53.75 transition-all duration-300 ${
                      isBlurred ? "blur-[3px] opacity-70" : "blur-0 opacity-100"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {isClicked && (
                    <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <p className="text-xl tracking-normal">{service.short}</p>

                      <div className="mt-10 flex justify-end items-center text-right gap-4 group">
                        <span className="underline text-sm font-semibold">
                          Learn more
                        </span>
                        <Image src={learnMoreIcon} alt="Learn more" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
