import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalDocument,
  type LegalSection,
} from "@/components/legal/LegalDocument";
import { COMPANY, LEGAL_VERSION } from "@/data/legal";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";
import { contactEmail } from "@/data/constant";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${UMBRELLA_NAME} website, ${PRODUCTS.jobcard.name} and its WhatsApp assistant, ${PRODUCTS.garage.name} and ${PRODUCTS.fleet.name}.`,
  alternates: { canonical: "/terms" },
};

const { jobcard, garage, fleet } = PRODUCTS;

const sections: LegalSection[] = [
  {
    id: "about",
    heading: "About these terms",
    body: (
      <>
        <p>
          These terms are an agreement between you and {COMPANY.legalName} (“
          {UMBRELLA_NAME}”, “we”, “us”), a company registered in Nigeria under
          RC {COMPANY.rcNumber}, with its office at {COMPANY.address}.
        </p>
        <p>
          They apply when you use our website; our workshop management software{" "}
          <strong>{jobcard.name}</strong>, through its web app or its WhatsApp
          assistant; our workshop <strong>{garage.name}</strong>; or our fleet
          service <strong>{fleet.name}</strong>.
        </p>
        <p>
          You accept these terms when you press <strong>Create account</strong>{" "}
          in the {jobcard.name} app, tap <strong>Start free</strong> in the
          WhatsApp assistant, accept an invitation to join a workspace, or
          otherwise use our services. If you accept them for a business, you
          confirm you have authority to bind it.
        </p>
        <p>These documents form part of these terms:</p>
        <ul>
          <li>
            our <Link href="/privacy">Privacy Policy</Link>, which explains how
            we handle personal data; and
          </li>
          <li>
            our <Link href="/data-processing">Data Processing Terms</Link>,
            which govern how we process the customer data a workshop keeps in{" "}
            {jobcard.name}.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "accounts",
    heading: "Jobcard accounts",
    body: (
      <>
        <p>
          To use {jobcard.name} you must be at least 18 and create an account
          for your workshop. The person who creates it is the account owner. The
          owner can invite team members and decide what each of them can access,
          and only the owner can delete the business.
        </p>
        <ul>
          <li>Give accurate information and keep it up to date.</li>
          <li>
            Keep your login details secure, and tell us promptly if you think
            someone has accessed your account without permission.
          </li>
          <li>
            You are responsible for everything done in your workspace by the
            people you invite.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "whatsapp",
    heading: "The WhatsApp assistant",
    body: (
      <>
        <p>
          The WhatsApp assistant lets you and your team use {jobcard.name} by
          chatting: raising invoices, recording payments, and finding or adding
          customers and vehicles.
        </p>
        <ul>
          <li>
            <strong>Your phone is your login.</strong> The assistant recognises
            you by your WhatsApp number. Anyone who can use your WhatsApp can
            act in your workspace as you, so keep your phone and WhatsApp
            secure. If you lose your phone or change your number, tell us
            straight away.
          </li>
          <li>
            <strong>Check before you send.</strong> The assistant uses AI to
            understand your messages (see section 5). Check each invoice,
            payment or record it creates before you rely on it or send it to a
            customer.
          </li>
          <li>
            <strong>WhatsApp’s rules apply too.</strong> Your use of WhatsApp is
            also governed by WhatsApp’s own terms. You must not use the
            assistant to send spam or anything WhatsApp’s policies forbid.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "billing",
    heading: "Plans, billing and renewal",
    body: (
      <>
        <p>
          {jobcard.name} has a free Starter plan and paid plans. What each plan
          includes, and its limits, are shown in the app and on our{" "}
          <Link href={`${jobcard.slug}#pricing`}>pricing page</Link>. Prices are
          in Nigerian naira.
        </p>
        <ul>
          <li>
            <strong>Payment.</strong> Paid plans are paid in advance through
            Paystack, by card, bank transfer or USSD. Promo codes may give you
            free or discounted time, on the terms shown when you use them.
          </li>
          <li>
            <strong>Saved cards and automatic renewal.</strong> If you save a
            card, your plan renews automatically at the end of each billing
            period and we charge that card. When you save a card we charge ₦50
            to check it, and refund it straight away. If you don’t save a card,
            we email you a payment link before each renewal instead. You can
            remove your card, or turn off automatic renewal, at any time in the
            app.
          </li>
          <li>
            <strong>Reminders.</strong> We remind you before a renewal is due.
          </li>
          <li>
            <strong>Upgrades and downgrades.</strong> An upgrade takes effect
            straight away, and you pay the full price of the new plan from that
            day. A downgrade takes effect at the end of the period you have
            already paid for.
          </li>
          <li>
            <strong>Cancellation.</strong> If you stop renewing, you keep your
            plan until the end of the period you have paid for, and then move to
            the free Starter plan.
          </li>
          <li>
            <strong>Failed payments.</strong> If a renewal payment fails, we
            retry it, and your plan keeps working for a grace period of 7 days.
            If payment has not succeeded by then, your workspace moves to the
            Starter plan. Your data is kept, but Starter limits apply until you
            pay.
          </li>
          <li>
            <strong>Refunds.</strong> Fees already paid are not refundable,
            including for a partly used billing period, except where the law
            requires otherwise.
          </li>
          <li>
            <strong>Price changes.</strong> We may change our prices. A new
            price applies from your next renewal, and we will tell you before it
            does.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ai",
    heading: "AI features",
    body: (
      <>
        <p>
          {jobcard.name} uses artificial intelligence to draft customer
          advisories and notes from inspections, and to understand messages sent
          to the WhatsApp assistant. AI can make mistakes. A draft may be
          incomplete, misread a finding or recommend the wrong urgency. The
          assistant may also misread an amount, an item or a customer’s name.
        </p>
        <p>
          <strong>AI output is a starting point, not a diagnosis.</strong> You
          and your team are responsible for checking every advisory, invoice and
          record before you save it, send it to a customer, or rely on it to
          decide what work to do. The diagnosis of a vehicle, and any advice or
          invoice given to a customer, remain yours.
        </p>
      </>
    ),
  },
  {
    id: "your-data",
    heading: "Your data in Jobcard",
    body: (
      <>
        <p>
          You own the data you put into {jobcard.name}. You give us permission
          to store and process it only as needed to provide, support and secure
          the service, as described in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <p>
          Much of that data will be about your own customers. For that data you
          are the controller and we are your processor, under our{" "}
          <Link href="/data-processing">Data Processing Terms</Link>. You are
          responsible for having a lawful basis to collect it, and for telling
          your customers how you use it, in line with the Nigeria Data
          Protection Act 2023.
        </p>
        <p>
          You can export your records from the app at any time. If a customer
          asks to be forgotten, you can erase them from their customer page.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    body: (
      <>
        <p>When you use our services, you must not:</p>
        <ul>
          <li>break any law, or use them for anything fraudulent;</li>
          <li>
            upload anything you do not have the right to share, or anything that
            contains viruses or harmful code;
          </li>
          <li>
            try to access another workshop’s data, or any part of our systems
            you are not authorised to use;
          </li>
          <li>
            copy, resell or reverse engineer our software, except as the law
            allows;
          </li>
          <li>
            overload or disrupt our services, including through automated access
            we have not agreed to; or
          </li>
          <li>
            use the WhatsApp assistant to message people who have not asked to
            hear from you.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "garage",
    heading: "Rabbar Garage services",
    body: (
      <>
        <p>
          When you bring a vehicle to {garage.name}, we will assess it and give
          you a quotation. We do not start chargeable work until you have
          approved it. If we find further work is needed, we will ask you before
          doing it.
        </p>
        <ul>
          <li>
            Please remove valuables from your vehicle before leaving it with us.
          </li>
          <li>
            Payment is due as set out on your invoice. We may keep your vehicle
            until an invoice for work you approved has been paid.
          </li>
          <li>
            Any warranty on parts or labour will be stated on your invoice or
            quotation.
          </li>
          <li>
            For vehicle documentation services, timelines depend on the relevant
            authorities, so any timeline we give is an estimate.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "fleet",
    heading: "Rabbar Fleet services",
    body: (
      <p>
        {fleet.name} is provided under a separate written service agreement with
        each organisation. Where that agreement and these terms differ, the
        service agreement takes precedence.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Our intellectual property",
    body: (
      <p>
        We own our website, our software, and our brand, including the{" "}
        {UMBRELLA_NAME}, {jobcard.name}, {garage.name} and {fleet.name} names
        and logos. While your account is in good standing, we give you a
        personal, non-transferable right to use {jobcard.name} for your own
        workshop. These terms do not give you any other rights in our property.
        On the free Starter plan, documents you create carry a small “Powered by
        Rabbar” credit.
      </p>
    ),
  },
  {
    id: "third-parties",
    heading: "Third-party services",
    body: (
      <p>
        Our services rely on and link to services run by others, such as
        Paystack for payments and WhatsApp for messaging. Their own terms apply
        to your use of them, and we are not responsible for how they operate.
      </p>
    ),
  },
  {
    id: "availability",
    heading: "Availability and changes",
    body: (
      <p>
        We work to keep {jobcard.name} available and reliable, but we cannot
        promise it will be uninterrupted or free of errors, and we may need to
        take it offline for maintenance. We may change, add or remove features
        over time. If we make a change that significantly reduces what a paid
        plan includes, we will tell you in advance.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "Liability",
    body: (
      <>
        <p>
          Nothing in these terms limits our liability where the law does not
          allow it to be limited, including for death or personal injury caused
          by our negligence, or for fraud.
        </p>
        <p>Subject to that:</p>
        <ul>
          <li>
            we are not liable for indirect or consequential losses, or for loss
            of profit, revenue, business or data, arising from your use of{" "}
            {jobcard.name}; and
          </li>
          <li>
            our total liability to you in connection with {jobcard.name} is
            limited to the fees you paid us for it in the 12 months before the
            event giving rise to the claim.
          </li>
        </ul>
        <p>
          Our liability for work carried out by {garage.name} or {fleet.name} is
          governed by your invoice or service agreement and by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    heading: "Deleting your account, suspension and termination",
    body: (
      <>
        <p>
          <strong>Deleting your business.</strong> The account owner can delete
          the business at any time in the app’s settings, after confirming with
          a code we email them. The deletion happens 14 days later, and the
          owner can cancel it until then. Automatic renewal is paused during
          those 14 days. Once the business is deleted, its data is gone for
          good, apart from what our{" "}
          <Link href="/privacy#retention">Privacy Policy</Link> says we must
          keep. Export anything you need first.
        </p>
        <p>
          <strong>Suspension.</strong> We may suspend or close an account if you
          seriously or repeatedly break these terms, if you do not pay, or if
          the law requires us to. Where we can, we will warn you first. If we
          close your account, you can ask us for an export of your data within
          30 days.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    body: (
      <p>
        We may update these terms. The date at the top shows when they were last
        revised. If we make a material change, we will tell {jobcard.name}{" "}
        account owners by email or in the app before it takes effect. If you
        keep using our services after that, you accept the updated terms.
      </p>
    ),
  },
  {
    id: "law",
    heading: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria.
        If a dispute arises, we will first try to resolve it with you
        informally. If we cannot, the courts of Lagos State will have
        jurisdiction.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <ul>
        <li>
          Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </li>
        <li>Phone: {COMPANY.phone}</li>
        <li>
          Post: {COMPANY.legalName}, {COMPANY.address}
        </li>
      </ul>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms of Service"
      version={LEGAL_VERSION}
      intro={
        <p>
          These terms set out the rules for using {UMBRELLA_NAME}’s website and
          services, and what you and we can each expect. Please read them
          carefully.
        </p>
      }
      sections={sections}
    />
  );
}
