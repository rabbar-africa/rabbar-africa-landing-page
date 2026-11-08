import type { Metadata } from "next";
import { FeaturePage, ogImage } from "@/components/feature-page/FeaturePage";

const PATH = "/paperwork-management";
const HERO = {
  src: "/product/paperwork-expiry.png",
  alt: "Vehicle paperwork in Rabbar: insurance, vehicle licence, roadworthiness, hackney permit and proof of ownership, each marked expired, expiring soon, valid or no expiry",
  width: 1400,
  height: 972,
};
const title = "Vehicle Paperwork Management & Document Expiry Tracking";
const description =
  "Track your customers' vehicle papers in one place: insurance, vehicle licence, roadworthiness, hackney permit and more, with scans, expiry dates and an expiring-soon list. Built for Nigerian workshops.";

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

export default function PaperworkManagementPage() {
  return (
    <FeaturePage
      path={PATH}
      eyebrow="Paperwork management"
      heading="Vehicle paperwork management, with expiry tracking"
      intro="Keep every customer's vehicle papers in one place, with the scans and expiry dates, and work through what's expiring before your customer gets stopped on the road. Renewals keep the old document as history."
      heroImage={HERO}
      sectionsHeading="Never miss an expiry again"
      sections={[
        {
          id: "documents",
          eyebrow: "Every document",
          title: "Insurance, vehicle licence, roadworthiness and more",
          body: "Record each document against the customer and vehicle, with the issuer, reference number, issue and expiry dates, and scans. Use the standard Nigerian document types or add your own.",
          points: [
            "Insurance, vehicle licence, roadworthiness and vehicle registration",
            "Proof of ownership, hackney permit and full paperwork",
            "Several scans per document",
          ],
        },
        {
          id: "expiry",
          eyebrow: "Expiry tracking",
          title: "See what's expired and what's expiring soon",
          body: "Rabbar works out each document's status for you: valid, expiring soon, expired or no expiry, with the days left or overdue. The dashboard lists the next documents to renew.",
          points: [
            "Valid, expiring soon, expired and no-expiry statuses",
            "Days left or days overdue on every document",
            "Paperwork due on the dashboard",
          ],
          image: {
            src: "/product/paperwork-due.png",
            alt: "The Paperwork due list on the Rabbar dashboard: a roadworthiness certificate and hackney permit overdue, a vehicle licence and insurance due soon",
            width: 1102,
            height: 754,
          },
        },
        {
          id: "renewals",
          eyebrow: "Renewals",
          title: "Renew without losing the history",
          body: "When a document is renewed, record the new dates and scans. The old document is kept as history rather than overwritten, so you can always show what was valid when.",
          points: [
            "Renewal history kept on every renewal",
            "Service reminders by date or mileage to bring customers back",
          ],
        },
      ]}
      faqHeading="Paperwork questions"
      faqs={[
        {
          q: "Which vehicle documents can I track?",
          a: "Insurance, vehicle licence, roadworthiness, vehicle registration, proof of ownership, hackney permit and full paperwork, plus any other document type you add.",
        },
        {
          q: "How does expiry tracking work?",
          a: "Enter the expiry date and Rabbar shows each document as valid, expiring soon, expired or no expiry, with the days left or overdue. The dashboard lists the next documents due.",
        },
        {
          q: "Can I store scans of the documents?",
          a: "Yes. Attach several scans to each document, and they stay with the customer's vehicle.",
        },
        {
          q: "What happens when a document is renewed?",
          a: "You record the renewal, and the previous document is kept as history instead of being overwritten.",
        },
        {
          q: "Which plan includes paperwork tracking?",
          a: "Every plan, including the free Starter plan. Each plan has its own allowance of paperwork records, from a small number on Starter to unlimited on Premium. See the pricing page to compare.",
        },
      ]}
    />
  );
}
