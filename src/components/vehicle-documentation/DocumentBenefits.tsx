import { Clock, Shield, CreditCard, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Skip the long queues. We process everything for you.",
  },
  {
    icon: Shield,
    title: "100% Legitimate",
    description: "All documents are processed through official channels.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Pay in installments for select services.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team to guide you through every step.",
  },
];

export function DocumentBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#0D2847] font-bold">
            Why Choose Rabbar Africa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make vehicle documentation stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-[#E8F34F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-[#0D2847]" size={32} />
                </div>
                <h3 className="text-xl mb-3 text-[#0D2847] font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
