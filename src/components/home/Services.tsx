"use client";
import {
  FileText,
  Wrench,
  CreditCard,
  Users,
  Briefcase,
  Paintbrush,
} from "lucide-react";
import Link from "next/link";
import { trackConfiguredEvent } from "@/lib/gtag";
import { ANALYTICS_EVENTS } from "@/lib/analytics-events";

const services = [
  {
    icon: FileText,
    title: "Vehicle Documentation",
    description:
      "Insurance, vehicle license, proof of ownership, driver's license renewal - we handle all your paperwork needs.",
    link: "/vehicle-documentation",
  },
  {
    icon: Wrench,
    title: "Car Maintenance and Repairs",
    description:
      "In-house certified mechanics with spare parts available for comprehensive maintenance and repair services.",
  },
  {
    icon: Paintbrush,
    title: "Car Revamping",
    description:
      "Transform your vehicle with our professional revamping services, from interior upgrades to exterior makeovers.",
  },
  {
    icon: CreditCard,
    title: "Installmental Auto Services",
    description:
      "Pay over time for repairs, paperwork, and other services with our flexible payment plans.",
  },
  {
    icon: Users,
    title: "Car Dealership and Brokerage",
    description:
      "Buy, sell and connect car buyers and sellers with our trusted dealership and brokerage services.",
  },
  {
    icon: Briefcase,
    title: "Automobile Consulting",
    description:
      "Expert guidance on legal, technical, and marketing aspects of vehicle ownership and business.",
  },
];

export function Services() {
  const handleServiceClick = (serviceTitle: string) => {
    trackConfiguredEvent(ANALYTICS_EVENTS.ENGAGEMENT.SERVICE_CARD_CLICK, {
      service_name: serviceTitle,
      event_label: serviceTitle.toLowerCase().replace(/\s+/g, "_"),
    });
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#0D2847]">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive solutions designed to meet all your vehicle
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const CardContent = (
              <>
                <div className="w-14 h-14 bg-[#E8F34F]/40 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-[#0D2847]" size={28} />
                </div>
                <h3 className="text-xl mb-3 text-[#0D2847] font-semibold">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                {service.link && (
                  <div className="mt-4 text-[#0D2847] font-medium flex items-center gap-2">
                    Learn more →
                  </div>
                )}
              </>
            );

            return service.link ? (
              <Link
                key={index}
                href={service.link}
                onClick={() => handleServiceClick(service.title)}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:border-2 hover:border-[#E8F34F] block"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:border-2 hover:border-[#E8F34F]"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
