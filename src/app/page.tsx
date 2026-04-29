// import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Hero } from "@/components/home/Hero";
import ImageSection from "@/components/home/ImageSection";
import ServiceSection from "@/components/home/Services";
import { About } from "@/components/home/About";
import  BlogSection  from "@/components/home/BlogSection";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}

      <main>
        <Hero />
        <ImageSection />
        <ServiceSection />
        <About />
        <BlogSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
