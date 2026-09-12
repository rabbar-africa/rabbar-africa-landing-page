import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalDocument,
  type LegalSection,
} from "@/components/legal/LegalDocument";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/data/legal";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";
import { contactEmail } from "@/data/constant";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${UMBRELLA_NAME} website, ${PRODUCTS.jobcard.name}, ${PRODUCTS.garage.name} and ${PRODUCTS.fleet.name}.`,
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
          They apply when you use our website, our workshop management software{" "}
          <strong>{jobcard.name}</strong>, our workshop{" "}
          <strong>{garage.name}</strong>, or our fleet service{" "}
          <strong>{fleet.name}</strong>. By using any of them you agree to these
          terms. If you are accepting them on behalf of a business, you confirm
          you have authority to bind it.
        </p>
        <p>
          Our <Link href="/privacy">Privacy Policy</Link> explains how we handle
          personal data and forms part of these terms.
        </p>
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
          for your workshop. The person who creates it is the account owner and
          can invite team members and decide what each of them can access.
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
    id: "billing",
    heading: "Plans, billing and renewal",
    body: (
      <>
        <p>
          {jobcard.name} has a free Starter plan and paid plans, billed monthly
          or annually. What each plan includes, and its limits, are set out on
          our <Link href={`${jobcard.slug}#pricing`}>pricing page</Link>. Prices
          are in Nigerian naira.
        </p>
        <ul>
          <li>
            <strong>Payment.</strong> Paid plans are charged in advance through
            Paystack. When you add a card we may make a small verification
            charge, which is refunded automatically.
          </li>
          <li>
            <strong>Automatic renewal.</strong> Paid plans renew automatically
            at the end of each billing period, and we charge your saved card. We
            will remind you before a renewal. You can turn off automatic renewal
            at any time in the app.
          </li>
          <li>
            <strong>Cancellation.</strong> You can cancel your subscription in
            the app at any time. Cancellation takes effect at the end of the
            period you have already paid for, and you keep access until then.
          </li>
          <li>
            <strong>Failed payments.</strong> If a renewal payment fails we will
            retry it, and your subscription will remain active for a grace
            period of 7 days. If payment has not succeeded by then, the
            subscription expires and access to paid features stops until you
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
    id: "your-data",
    heading: "Your data in Jobcard",
    body: (
      <>
        <p>
          You own the data you put into {jobcard.name}. You give us permission
          to store and process it only as needed to provide the service to you,
          as described in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <p>
          Much of that data will be about your own customers. You are
          responsible for having a lawful basis to collect it, and for telling
          your customers how you use it, in line with the Nigeria Data
          Protection Act 2023.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    heading: "AI-drafted advisories",
    body: (
      <>
        <p>
          {jobcard.name} can use artificial intelligence to draft a customer
          advisory from an inspection. AI can make mistakes: a draft may be
          incomplete, misread a finding or recommend the wrong urgency.
        </p>
        <p>
          <strong>A draft is a starting point, not a diagnosis.</strong> You and
          your technicians are responsible for checking every advisory before
          you save it, send it to a customer, or rely on it to decide what work
          to do. The diagnosis of a vehicle, and any advice given to a customer,
          remain yours.
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
            allows; or
          </li>
          <li>
            overload or disrupt our services, including through automated access
            we have not agreed to.
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
    heading: "Suspension and termination",
    body: (
      <>
        <p>
          You can stop using our services and close your {jobcard.name} account
          at any time. We may suspend or close an account if you seriously or
          repeatedly break these terms, if you do not pay, or if we are required
          to by law. Where we can, we will warn you first.
        </p>
        <p>
          If your account is closed, you can ask us for a copy of your data
          within a reasonable period afterwards.
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
        account holders by email or in the app before it takes effect. If you
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
      lastUpdated={LEGAL_LAST_UPDATED.terms}
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
