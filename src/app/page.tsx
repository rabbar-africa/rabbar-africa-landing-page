// import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About, BlogSection, Contact, Hero, Services } from "@/components/home";
import ImageSection from "@/components/home/ImageSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImageSection />
      <Services />
      <About />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}
