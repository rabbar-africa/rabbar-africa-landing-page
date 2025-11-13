import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../ImageWithFallBack";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          alt="Luxury car showroom"
          fill
          className="object-cover"
          priority
          src="/hero.jpeg"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6">
            Drive Your Dreams with{" "}
            <span className="text-[#E8F34F]">Rabbar Africa</span>
          </h1>
          <p className="text-gray-200 text-xl sm:text-2xl mb-8">
            Your trusted partner for premium automobiles and exceptional service
            across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#E8F34F] text-[#0D2847] px-8 py-4 rounded-lg hover:bg-[#d5e040] transition-colors flex items-center justify-center gap-2">
              Explore Services
              <ArrowRight size={20} />
            </button>
            <button className="bg-white text-[#0D2847] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
