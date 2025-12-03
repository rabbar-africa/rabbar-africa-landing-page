import { CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Contact Us",
    description:
      "Reach out via WhatsApp or phone with your documentation needs.",
  },
  {
    step: "02",
    title: "Submit Documents",
    description: "Send us the required documents and information digitally.",
  },
  {
    step: "03",
    title: "We Process",
    description: "Our team handles all paperwork, submissions, and follow-ups.",
  },
  {
    step: "04",
    title: "Receive Documents",
    description: "Get your completed documents delivered to your doorstep.",
  },
];

export function DocumentProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#0D2847] font-bold">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your documents in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div key={index} className="relative">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#E8F34F] to-transparent"></div>
              )}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#E8F34F] to-[#d5e040] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[#0D2847] text-3xl font-bold">
                      {item.step}
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0D2847] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-[#E8F34F]" size={20} />
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-[#0D2847] font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
