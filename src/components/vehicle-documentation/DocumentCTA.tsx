"use client";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { trackConfiguredEvent } from "@/lib/gtag";
import { ANALYTICS_EVENTS } from "@/lib/analytics-events";

function Phone({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function DocumentCTA() {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "2349160002836";
  const whatsappMessage = encodeURIComponent(
    "Hello Rabbar Africa! I'm interested in your vehicle documentation services.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackConfiguredEvent(ANALYTICS_EVENTS.WHATSAPP.DOCUMENT_CTA);
  };

  const handlePhoneClick = () => {
    trackConfiguredEvent(ANALYTICS_EVENTS.PHONE.DOCUMENT_CTA);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F34F] via-[#d5e040] to-[#c5d030]"></div>
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D2847]/5 to-transparent"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl mb-6 text-[#0D2847] font-bold">
          Ready to Get Your Documents Sorted?
        </h2>
        <p className="text-xl text-[#0D2847]/80 mb-8">
          Join thousands of satisfied customers who trust Rabbar Africa for
          their vehicle documentation needs. Get started today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              handleWhatsAppClick();
              window.open(whatsappLink, "_blank", "noopener,noreferrer");
            }}
            className="bg-[#0D2847] text-white px-8 py-4 rounded-lg hover:bg-[#013064] transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold shadow-xl"
          >
            <MessageCircle size={24} />
            Chat with Us on WhatsApp
            <ArrowRight size={24} />
          </button>
          <button
            onClick={() => {
              handlePhoneClick();
              window.location.href = "tel:+2349160002836";
            }}
            className="bg-white text-[#0D2847] border-2 border-[#0D2847]/20 px-8 py-4 rounded-lg hover:bg-white/90 hover:border-[#0D2847] transition-colors flex items-center justify-center gap-2 font-semibold"
          >
            <Phone size={24} />
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  );
}
