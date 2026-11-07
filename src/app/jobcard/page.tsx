import type { Metadata } from "next";
import { FeaturePage, ogImage } from "@/components/feature-page/FeaturePage";

/**
 * /jobcard is the URL ChatGPT and Google already rank first for "job card".
 * Keep the path, and keep "job card" in the title, H1 and FAQs.
 */
const PATH = "/jobcard";
const HERO = {
  src: "/product/job-cards-list.png",
  alt: "Rabbar job card software: a list of job cards with customer, vehicle, status from open to delivered, and amount invoiced",
  width: 1400,
  height: 801,
};
const title = "Job Card Software for Mechanics & Workshops in Nigeria";
const description =
  "Digital job cards for mechanics, workshops and service businesses: record the complaint, assign technicians, track every job from open to delivered and see the profit on each one. Built in a Lagos workshop. Free to start.";

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

export default function JobcardPage() {
  return (
    <FeaturePage
      path={PATH}
      eyebrow="Job card software"
      heading="Job card software for mechanics, workshops and service businesses"
      intro="Replace the carbon-copy job card pad with a digital job card for every job. Record the complaint, assign technicians, move the job from open to delivered, and see the profit on every car. Built in our own Lagos workshop, and free to start."
      heroImage={HERO}
      heroPhone={{
        src: "/product/phone-job-card.png",
        alt: "A Rabbar job card on a phone, showing its status, priority and the amounts invoiced, collected and spent",
      }}
      sectionsHeading="Everything a job card should do, and more"
      sections={[
        {
          id: "job-card",
          eyebrow: "One card per job",
          title: "Everything about the job on one digital job card",
          body: "Open a job card the moment work comes in. Record the customer, the complaint in their own words, diagnosis notes, the odometer reading in and out, and the date you promised. The invoice, payments, inspection, expenses and photos for that job all hang off the same card.",
          points: [
            "Customer, phone and vehicle details",
            "Complaint, diagnosis and internal notes",
            "Odometer in and out, opened, promised and closed dates",
            "Low, normal, high and urgent priority",
          ],
          image: {
            src: "/product/job-card-detail.png",
            alt: "A delivered Rabbar job card showing status, priority, invoiced, collected, expenses and profit, with the customer, vehicle, complaint and diagnosis",
            width: 1400,
            height: 929,
          },
        },
        {
          id: "job-status",
          eyebrow: "The workshop floor",
          title: "Track every job from open to delivered",
          body: "Move each job through the stages your workshop actually uses, and filter the board by status or technician to see what's waiting on parts, what needs the customer's approval and what's ready to go. Assign as many technicians as the job needs, with one marked as lead.",
          points: [
            "Open, in progress, awaiting approval, awaiting parts, completed and delivered",
            "Several technicians per job, with a lead",
            "Technicians don't need a login to be assigned",
            "Job card numbers from your own numbering series",
          ],
          image: {
            src: "/product/dashboard-debtors.png",
            alt: "The Rabbar dashboard with a chart of job cards by status next to the list of top debtors",
            width: 1400,
            height: 933,
          },
        },
        {
          id: "job-profit",
          eyebrow: "Profit per job",
          title: "See the profit on every job card",
          body: "Attach what the job cost as you spend it: parts, labour, sublet work, towing, consumables and fees. Rabbar sets the costs against what you invoiced and what you collected, so the profit on that job is on the job card, not in a spreadsheet at month end.",
          points: [
            "Invoiced, collected, outstanding, expenses and profit per job",
            "Expense categories built for a workshop",
            "Rolls up into net profit on the dashboard",
          ],
          image: {
            src: "/product/job-card-expenses.png",
            alt: "The expenses tab of a Rabbar job card listing brake pads, an oxygen sensor and disc skimming with their category, amount and date",
            width: 1400,
            height: 537,
          },
        },
        {
          id: "linked",
          eyebrow: "Linked to the job",
          title: "Invoices, receipts and inspections from the job card",
          body: "Raise the invoice straight from the job card, record payments against it and send the receipt. Run a vehicle inspection and attach it to the same job, so the customer's report, approval and bill sit together.",
          points: [
            "Branded invoice and receipt PDFs",
            "Vehicle inspection reports with AI-drafted advisories",
            "Customer and vehicle history across every job",
          ],
          image: {
            src: "/product/doc-invoice.png",
            alt: "A branded Rabbar invoice PDF for a workshop, with line items, balance due and bank details",
            width: 1000,
            height: 1165,
          },
        },
        {
          id: "any-job",
          eyebrow: "Not just cars",
          title: "Job cards for any service business",
          body: "The vehicle is optional. Solar installers, electricians, tailors and laundries use the same job cards to track each order or installation, who's working on it, when it's promised and what it made.",
          points: [
            "Use a job card with or without a vehicle",
            "Works on the phone your team already has",
          ],
        },
      ]}
      faqHeading="Job card questions"
      faqs={[
        {
          q: "What is a job card?",
          a: "A job card is the record of a single job: who it's for, what the customer asked for or what's wrong, who is working on it, when it's promised and what it cost. A digital job card in Rabbar also holds the invoice, payments, inspection report, expenses and photos for that job, so you can see its status and profit at any time.",
        },
        {
          q: "What should a workshop job card include?",
          a: "The customer and their phone number, the vehicle and plate number, the odometer reading, the complaint in the customer's words, the technician's diagnosis, who is working on it, its status and priority, the promised date, and the parts and labour that go on the invoice. Rabbar has a field for each.",
        },
        {
          q: "Can I use job cards without a vehicle?",
          a: "Yes. The vehicle is optional, so any service business can track orders, installations and repairs on job cards.",
        },
        {
          q: "Do my technicians need a login?",
          a: "No. A technician can be assigned to job cards, and marked as lead, without having an account. Give logins only to the people who need to use the app.",
        },
        {
          q: "Does it work on a phone?",
          a: "Yes. Rabbar runs in the browser on any phone, tablet or laptop, with nothing to install. Invoices, payments and receipts also work from WhatsApp.",
        },
        {
          q: "How much does the job card software cost?",
          a: "The Starter plan is free, with limits on job cards and customers. Paid plans give you unlimited job cards. See the pricing page for every plan.",
        },
      ]}
    />
  );
}
