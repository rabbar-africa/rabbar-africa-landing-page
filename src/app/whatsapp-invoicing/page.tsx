import type { Metadata } from "next";
import { FeaturePage, ogImage } from "@/components/feature-page/FeaturePage";
import { Documents, WhatsAppInvoice } from "@/components/platform";

const PATH = "/whatsapp-invoicing";
const HERO = {
  src: "/product/app-dashboard.png",
  alt: "The Rabbar app dashboard showing amounts invoiced, payments received, overdue invoices and top debtors",
  width: 2400,
  height: 1500,
};
const title = "Send Invoices and Receipts on WhatsApp";
const description =
  "Create a branded invoice from one WhatsApp message, record the payment the same way and send the receipt. Your logo and bank details on every PDF, and a list of who still owes you. Free to start.";

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

export default function WhatsAppInvoicingPage() {
  return (
    <FeaturePage
      path={PATH}
      eyebrow="WhatsApp invoicing"
      heading="Send invoices and receipts on WhatsApp, in one message"
      intro="Type the job the way you'd say it, and Rabbar sends back a proper invoice PDF with your logo and bank details, ready to forward to your customer. When they pay, tell Rabbar and the receipt follows. No app to open on the job."
      heroImage={HERO}
      sectionsHeading="Invoicing that looks like a business"
      sections={[
        {
          id: "invoice-pdf",
          eyebrow: "Invoices",
          title: "A branded invoice PDF from every message",
          body: "Every invoice carries your logo, address, bank details and your own invoice number. Rabbar matches the items you type against your saved price list, shows you the invoice to check, and creates the PDF when you tap Confirm.",
          points: [
            "Your logo, address and bank details",
            "Items matched to your saved price list",
            "Discounts and VAT on an item or the whole invoice",
            "Old balances carried onto the new invoice",
          ],
          image: {
            src: "/product/doc-invoice.png",
            alt: "A branded invoice PDF created with Rabbar, with line items, balance due and bank details",
            width: 1000,
            height: 1165,
          },
        },
        {
          id: "receipts",
          eyebrow: "Receipts",
          title: "A receipt the moment they pay",
          body: "Record a cash, transfer, POS, card or cheque payment against the invoice, on WhatsApp or in the app. Rabbar works out the balance and produces a receipt you can forward straight away.",
          points: [
            "Part payments, with the balance worked out for you",
            "A receipt PDF for every payment",
          ],
          image: {
            src: "/product/doc-receipt.png",
            alt: "A branded payment receipt PDF created with Rabbar, showing the amount received and the invoice it paid",
            width: 1000,
            height: 959,
          },
        },
        {
          id: "debtors",
          eyebrow: "Who owes you",
          title: "Know exactly who still owes you",
          body: "Ask the assistant for unpaid invoices, or open the dashboard: top debtors are ranked by how much they owe and how long it's been, so you know who to call first.",
          points: [
            "Overdue invoices and top debtors at a glance",
            "Customer statements of everything they owe",
          ],
          image: {
            src: "/product/dashboard-debtors.png",
            alt: "The Rabbar dashboard listing top debtors by amount owed and days overdue",
            width: 1400,
            height: 933,
          },
        },
        {
          id: "team",
          eyebrow: "Your team",
          title: "Your staff can invoice on WhatsApp too",
          body: "Invite team members and they can raise invoices and record payments from their own WhatsApp, under your business, while you decide what each person can see in the app.",
          points: [
            "Team members join with an invite link",
            "Every invoice lands in the same business account",
          ],
        },
      ]}
      faqHeading="WhatsApp invoicing questions"
      faqs={[
        {
          q: "How do I send an invoice on WhatsApp?",
          a: 'Set up your business on Rabbar, then message the Rabbar assistant with the job, for example "Invoice for Mrs Adeola, 2 agbada 25,000 each, delivery 3,000". It shows you the invoice to check. Tap Confirm and it sends back a branded PDF to forward to your customer.',
        },
        {
          q: "Does my customer need an app?",
          a: "No. Your customer simply receives the invoice or receipt PDF that you forward to them on WhatsApp, or by email.",
        },
        {
          q: "Is WhatsApp invoicing free?",
          a: "Yes. Invoices and receipts on WhatsApp are included on the free Starter plan. Paid plans raise the number of invoices, and Chat Lite is a lower-cost plan for businesses that work only on WhatsApp. See the pricing page for every plan.",
        },
        {
          q: "Can I send receipts on WhatsApp?",
          a: "Yes. Tell the assistant when a customer pays, choose how they paid, and it records the payment and sends you the receipt PDF.",
        },
        {
          q: "What else can the WhatsApp assistant do?",
          a: "It can find and edit invoices, list unpaid invoices, record and find payments, add and find customers and vehicles, and update your business details and logo.",
        },
      ]}
    >
      <WhatsAppInvoice />
      <Documents />
    </FeaturePage>
  );
}
