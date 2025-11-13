import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About, BlogSection, Contact, Hero, Services } from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />
      <Services />
      <About />
      <BlogSection />
      <Contact />

      <Footer />
    </div>
  );
}
