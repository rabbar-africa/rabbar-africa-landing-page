import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../ImageWithFallBack";

const features = [
  "Over 15 years of automotive excellence",
  "Certified technicians and mechanics",
  "State-of-the-art service facilities",
  "Customer satisfaction guarantee",
];
//for deployment
export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              alt="African road sunset"
              className="w-full h-full object-cover"
              src="/about.jpeg"
              fill
              sizes="(max-width: 1023px) 100vw, 600px"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#0D2847]">
              About Rabbar Africa
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Founded with a vision to revolutionize the automotive industry in
              Africa. Rabbar Africa has become a trusted name for quality
              vehicles and exceptional service.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              We pride ourselves on understanding the unique needs of African
              drivers and providing solutions that combine international
              standards with local expertise.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-[#E8F34F]"
                    style={{ filter: "drop-shadow(0 0 2px #0D2847)" }}
                    size={24}
                  />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#E8F34F] text-[#0D2847] px-8 py-4 rounded-lg hover:bg-[#d5e040] transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
