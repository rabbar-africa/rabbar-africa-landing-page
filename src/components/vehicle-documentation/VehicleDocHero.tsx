import { Star, MessageCircle, ArrowRight } from "lucide-react";

const stats = [
  { number: "47+", label: "Documents Processed" },
  { number: "98%", label: "Success Rate" },
  { number: "24hrs", label: "Average Processing Time" },
  { number: "2 Years", label: "In Business" },
];

export function VehicleDocHero() {
  const whatsappNumber = "2349160002836";
  const whatsappMessage = encodeURIComponent(
    "Hello Rabbar Africa! I'm interested in your vehicle documentation services.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[70vh] flex items-center pt-16 bg-gradient-to-br from-[#0D2847] via-[#013064] to-[#0D2847]">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#E8F34F]/20 px-4 py-2 rounded-full mb-6">
            <Star className="text-[#E8F34F]" size={20} />
            <span className="text-[#E8F34F] font-medium">
              Lagos #1 Vehicle Documentation Service
            </span>
          </div>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 font-bold">
            Vehicle Paperwork Made{" "}
            <span className="text-[#E8F34F]">Simple</span>
          </h1>
          <p className="text-gray-200 text-xl sm:text-2xl mb-8">
            Get all your Lagos vehicle documentation done without stepping out
            of your home. Fast, reliable, and 100% legitimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8F34F] text-[#0D2847] px-8 py-4 rounded-lg hover:bg-[#d5e040] transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold shadow-lg"
            >
              <MessageCircle size={20} />
              Get Started on WhatsApp
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              View Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#E8F34F] mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
