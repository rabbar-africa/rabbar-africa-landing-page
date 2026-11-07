import type { Metadata } from "next";
import { FeaturePage, ogImage } from "@/components/feature-page/FeaturePage";

const PATH = "/vehicle-inspection-reports";
const HERO = {
  src: "/product/inspection-ai-advisory.png",
  alt: "A vehicle inspection advisory in Rabbar with fix-now and due-soon items, each explaining what happens if the fault is left",
  width: 1400,
  height: 1080,
};
const title = "Vehicle Inspection Report Software with PDF Reports";
const description =
  "Run a vehicle inspection checklist on a phone, photograph each fault and send the customer a branded vehicle inspection report PDF with an AI-drafted advisory your technician approves.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: {
    title,
    description,
    url: PATH,
    type: "website",
    images: [ogImage(HERO)],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [HERO.src],
  },
};

export default function VehicleInspectionReportsPage() {
  return (
    <FeaturePage
      path={PATH}
      eyebrow="Vehicle inspection reports"
      heading="Vehicle inspection reports your customers trust"
      intro="Work through a full vehicle inspection checklist on a phone, attach photos to every fault, and send the customer a branded inspection report PDF before work starts. Rabbar drafts the advisory in plain English, and your technician checks it."
      heroImage={HERO}
      heroPhone={{
        src: "/product/phone-inspection-advisory.png",
        alt: "A vehicle inspection advisory on a phone in Rabbar",
      }}
      sectionsHeading="From checklist to report in minutes"
      sections={[
        {
          id: "checklist",
          eyebrow: "Inspection checklist",
          title: "A ready-made vehicle inspection checklist",
          body: "Start with 48 checks across brakes, electrical and battery, engine, exterior and underbody, interior and safety, lights, suspension and steering, tyres and wheels, and transmission. Mark each item OK, needs fixing or not applicable, and add your own checks.",
          points: [
            "48 checks in 9 areas, ready to use",
            "Add your own checklist items",
            "Required items must be answered before the inspection is done",
          ],
          image: {
            src: "/product/inspection-checklist.png",
            alt: "A vehicle inspection checklist in Rabbar with brake, electrical and engine items marked OK or needs fix",
            width: 1400,
            height: 968,
          },
        },
        {
          id: "findings",
          eyebrow: "Findings",
          title: "Photos and notes on every finding",
          body: "Record each finding with its status, from good to needs replacement, a short note, and photos, so the customer sees the fault for themselves.",
          points: [
            "Good, needs attention, worn, needs repair, needs replacement and more",
            "Photos attached to each finding",
          ],
          image: {
            src: "/product/inspection-findings.png",
            alt: "Inspection findings in Rabbar: front brake pads, brake discs, oxygen sensor, battery and tyres, each with a status and note",
            width: 1400,
            height: 1197,
          },
        },
        {
          id: "report",
          eyebrow: "Inspection report PDF",
          title: "A branded vehicle inspection report PDF",
          body: "Rabbar groups the findings by urgency, drafts the advisory with AI, and the technician reviews and edits it. The customer gets a report with your logo, the vehicle and owner details, and what needs fixing now, soon, or passed, shared on WhatsApp or by email.",
          points: [
            "Two report styles to choose from",
            "AI-drafted advisory, always reviewed by the technician",
            "Linked to the job card for that vehicle",
          ],
          image: {
            src: "/product/doc-inspection-report.png",
            alt: "A branded vehicle inspection report PDF with vehicle details, owner information, an inspection summary and system checks",
            width: 1000,
            height: 1321,
          },
        },
      ]}
      faqHeading="Vehicle inspection questions"
      faqs={[
        {
          q: "What is a vehicle inspection report?",
          a: "A vehicle inspection report records the condition of a car's parts and systems after a technician checks them, with what needs fixing now, what can wait and what passed. Rabbar produces it as a branded PDF you can send to the customer.",
        },
        {
          q: "What does the inspection checklist cover?",
          a: "48 checks across brakes, electrical and battery, engine, exterior and underbody, interior and safety, lights and visibility, suspension and steering, tyres and wheels, and transmission. You can add your own items.",
        },
        {
          q: "Does the AI decide what's wrong with the car?",
          a: "No. Your technician records the findings. AI only drafts the customer advisory from them, in plain English, and the technician checks and edits it before anything is saved or sent.",
        },
        {
          q: "How does the customer get the report?",
          a: "Save the inspection report as a PDF and share it on WhatsApp or by email, straight from the phone.",
        },
        {
          q: "Which plan includes inspections?",
          a: "Every plan is listed, feature by feature, on the pricing page, so you can see which one includes the inspections you need.",
        },
      ]}
    />
  );
}
