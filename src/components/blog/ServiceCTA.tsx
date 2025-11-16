import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServiceCTA() {
  return (
    <>
      {/* Blog CTA Section */}
      <div className="bg-[#0D2847] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl mb-4 text-white">Enjoyed this article?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Check out more insights and tips from our automotive experts
          </p>
          <Link href="/blogs">
            <button className="bg-[#E8F34F] text-[#0D2847] px-8 py-4 rounded-lg hover:bg-[#d5e040] cursor-pointer transition-colors">
              Read More Articles
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 px-8 bg-gray-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t let car problems slow you down. Get expert automobile
            services from Rabbar Africa&apos;s certified technicians.
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <Button size="lg" variant="secondary">
              Schedule Service
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
