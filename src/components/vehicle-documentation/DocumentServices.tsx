import { FileText, TrendingUp, MessageCircle, ArrowRight } from "lucide-react";

const documentServices = [
  {
    title: "Vehicle License Renewal",
    description:
      "Hassle-free renewal of your vehicle license. We handle all the paperwork and processing.",
    price: "From ₦15,000",
  },
  {
    title: "Vehicle Insurance",
    description:
      "Comprehensive and third-party insurance packages from trusted providers.",
    price: "From ₦25,000",
  },
  {
    title: "Proof of Ownership",
    description:
      "Complete processing of vehicle ownership documents, change of ownership, and more.",
    price: "From ₦50,000",
  },
  {
    title: "Driver's License",
    description:
      "New driver's license application and renewals. Fast, reliable service.",
    price: "From ₦20,000",
  },
  {
    title: "Hackney Permit",
    description:
      "Commercial vehicle permits for Uber, Bolt, and taxi services.",
    price: "From ₦35,000",
  },
  {
    title: "Number Plate",
    description: "Custom and standard number plates with proper registration.",
    price: "From ₦30,000",
  },
];

export function DocumentServices() {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "2349160002836";
  const whatsappMessage = encodeURIComponent(
    "Hello Rabbar Africa! I'm interested in your vehicle documentation services.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#0D2847] font-bold">
            Our Documentation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive vehicle paperwork solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 p-8 rounded-xl hover:shadow-2xl transition-all hover:border-[#E8F34F] group"
            >
              <div className="w-12 h-12 bg-[#E8F34F]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E8F34F] transition-colors">
                <FileText
                  className="text-[#0D2847] group-hover:scale-110 transition-transform"
                  size={24}
                />
              </div>
              <h3 className="text-xl mb-3 text-[#0D2847] font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-[#0D2847] font-bold text-lg">
                  {service.price}
                </span>
                <TrendingUp className="text-[#E8F34F]" size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0D2847] text-white px-8 py-4 rounded-lg hover:bg-[#013064] transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={20} />
            Request a Service
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
