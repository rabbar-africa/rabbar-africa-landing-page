import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Uber Driver",
    image: "/testimonial-1.jpg",
    rating: 5,
    text: "Rabbar Africa helped me renew my driver's license and get my hackney permit in just 3 days! No stress, no wahala. Highly recommended!",
  },
  {
    name: "Chioma Okafor",
    role: "Business Owner",
    image: "/testimonial-2.jpg",
    rating: 5,
    text: "I needed to change the ownership of my vehicle quickly. These guys were professional, fast, and affordable. Best decision ever!",
  },
  {
    name: "Tunde Bakare",
    role: "Private Driver",
    image: "/testimonial-3.jpg",
    rating: 5,
    text: "From vehicle insurance to license renewal, Rabbar Africa has been my go-to for all paperwork. They make it so easy!",
  },
];

export function DocumentTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#0D2847] font-bold">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {`Don't`} just take our word for it - hear from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#E8F34F] fill-[#E8F34F]"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 bg-[#E8F34F]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#0D2847] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-[#0D2847]">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
