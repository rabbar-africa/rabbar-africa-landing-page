import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  VehicleDocHero,
  DocumentServices,
  DocumentBenefits,
  DocumentProcess,
  DocumentTestimonials,
  DocumentCTA,
} from "@/components/vehicle-documentation";

export default function VehicleDocumentation() {
  return (
    <div className="min-h-screen">
      <Header />

      <VehicleDocHero />
      <DocumentServices />
      <DocumentBenefits />
      <DocumentProcess />
      <DocumentTestimonials />
      <DocumentCTA />

      <Footer />
    </div>
  );
}
