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
  title: "Privacy Policy",
  description: `How ${UMBRELLA_NAME} collects, uses, shares and protects personal data across our website, ${PRODUCTS.jobcard.name}, ${PRODUCTS.garage.name} and ${PRODUCTS.fleet.name}.`,
  alternates: { canonical: "/privacy" },
};

const { jobcard, garage, fleet } = PRODUCTS;

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    body: (
      <>
        <p>
          {COMPANY.legalName} (“{UMBRELLA_NAME}”, “we”, “us”) is a company
          registered in Nigeria under RC {COMPANY.rcNumber}, with its office at{" "}
          {COMPANY.address}.
        </p>
        <p>
          This policy covers our website, our workshop management software{" "}
          <strong>{jobcard.name}</strong>, our workshop{" "}
          <strong>{garage.name}</strong>, and our fleet service{" "}
          <strong>{fleet.name}</strong>. For the personal data described here,
          we are the data controller, except where section 6 explains that we
          act on behalf of a workshop.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    heading: "Information we collect",
    body: (
      <>
        <p>
          <strong>When you contact us.</strong> If you use the contact form on
          our website we collect your name, email address, phone number (if you
          give it), the subject and your message. If you message us on WhatsApp
          or email us, we receive whatever you choose to send.
        </p>
        <p>
          <strong>When you create a {jobcard.name} account.</strong> We collect
          your first and last name, email address, phone number and password,
          and details of your workshop: its name, email, phone number, address,
          website, tax identification number, timezone and currency. You may
          also add your bank account details and logo so they appear on your
          invoices, and invite team members, whose names and email addresses we
          then hold.
        </p>
        <p>
          <strong>When you use {garage.name}.</strong> We collect your name and
          contact details, details of your vehicle such as its make, model,
          registration number and condition, and the work you ask us to do.
          Where you use our vehicle documentation services, we also collect the
          documents needed to process them, which can include vehicle papers and
          proof of identity.
        </p>
        <p>
          <strong>When your organisation uses {fleet.name}.</strong> We collect
          contact details for the people we deal with at your organisation, and
          information about the vehicles you ask us to maintain.
        </p>
        <p>
          <strong>Payments.</strong> {jobcard.name} subscriptions are paid
          through Paystack. We receive a payment token and limited card details,
          such as the card type and last four digits, so we can renew your
          subscription. We never see or store your full card number.
        </p>
        <p>
          <strong>Automatically, when you use our website.</strong> We use
          Google Analytics and Google Ads to understand how our website is used
          and whether our advertising works. These collect information such as
          the pages you visit, your browser and device, your approximate
          location and the site that referred you. See section 8.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    heading: "How we use your information",
    body: (
      <>
        <p>
          The Nigeria Data Protection Act 2023 requires us to have a lawful
          basis for each use of your personal data. We use it:
        </p>
        <ul>
          <li>
            <strong>To provide our services</strong>, which is necessary to
            perform our contract with you: running your {jobcard.name} account,
            carrying out work on your vehicle, and delivering fleet services.
          </li>
          <li>
            <strong>To take payment and manage subscriptions</strong>, including
            renewals, receipts and reminders before a renewal.
          </li>
          <li>
            <strong>To respond to you</strong> when you contact us, and to send
            service messages such as account verification and password resets.
          </li>
          <li>
            <strong>To keep our services secure and working</strong>, and to
            prevent fraud and misuse, which is in our legitimate interests.
          </li>
          <li>
            <strong>To improve our website and marketing</strong> through
            analytics and advertising measurement, based on our legitimate
            interests or, where the law requires it, your consent.
          </li>
          <li>
            <strong>To meet our legal obligations</strong>, including tax,
            accounting and responding to lawful requests from authorities.
          </li>
        </ul>
        <p>We do not sell your personal data.</p>
      </>
    ),
  },
  {
    id: "ai-advisories",
    heading: "AI-drafted inspection advisories",
    body: (
      <>
        <p>
          {jobcard.name} can draft a customer advisory from an inspection. When
          a workshop uses this feature, we send the text of the inspection
          findings, a description of the vehicle and, if one is entered, the
          customer’s name to our AI provider, Anthropic, which generates the
          draft and returns it to us.
        </p>
        <p>
          Inspection photos are not sent. The draft is shown to the technician,
          who reviews and edits it before it is saved or sent to anyone.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "Who we share it with",
    body: (
      <>
        <p>
          We share personal data only with providers that help us run our
          services, and only what each needs to do its job:
        </p>
        <ul>
          <li>
            <strong>Paystack</strong>, to process subscription payments.
          </li>
          <li>
            <strong>Anthropic</strong>, to draft inspection advisories, as
            described in section 4.
          </li>
          <li>
            <strong>Cloudinary</strong>, to store files you upload, such as
            inspection photos, document scans, receipts and logos.
          </li>
          <li>
            <strong>Resend</strong> and our email providers, to deliver emails,
            including messages sent through our contact form.
          </li>
          <li>
            <strong>Google</strong>, for website analytics, advertising
            measurement and email.
          </li>
          <li>
            <strong>Our database and hosting providers</strong>, which store the
            data that makes {jobcard.name} work.
          </li>
        </ul>
        <p>
          We may also disclose personal data where the law requires it, to
          protect our rights or the safety of others, or to a buyer if our
          business is sold or reorganised, in which case this policy continues
          to apply.
        </p>
        <p>
          When you message us on WhatsApp, your conversation is also subject to
          WhatsApp’s own terms and privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "workshop-customer-data",
    heading: "Your customers’ data in Jobcard",
    body: (
      <>
        <p>
          Workshops use {jobcard.name} to record information about their own
          customers: names, contact details, vehicles, job cards, inspections,
          invoices and payments. For that information the workshop is the data
          controller, and we process it on the workshop’s behalf and on its
          instructions.
        </p>
        <p>
          If you are a workshop, you are responsible for having a lawful basis
          to collect your customers’ data and for telling them how you use it.
          If you are a customer of a workshop that uses {jobcard.name}, please
          contact that workshop about your data. If you contact us instead, we
          will pass your request to them.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    heading: "International transfers",
    body: (
      <p>
        Some of the providers listed in section 5 store or process data outside
        Nigeria, including in the United States. Where we transfer personal data
        outside Nigeria, we do so in accordance with the Nigeria Data Protection
        Act 2023.
      </p>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: (
      <>
        <p>
          Our website uses cookies and similar technologies set by Google
          Analytics and Google Ads. They help us count visits, see which pages
          are useful, and measure whether people who click our adverts go on to
          contact us.
        </p>
        <p>You can control these:</p>
        <ul>
          <li>
            Block or delete cookies in your browser settings. Our website will
            still work without them.
          </li>
          <li>
            Install the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics opt-out browser add-on
            </a>
            .
          </li>
          <li>
            Manage personalised advertising in your{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google ad settings
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: (
      <>
        <p>
          We keep personal data for as long as we need it for the purposes in
          this policy: while your account is active, while we are providing a
          service to you, and afterwards for as long as we must to meet legal,
          tax and accounting obligations or to resolve disputes.
        </p>
        <p>
          When you delete a record in {jobcard.name}, it is removed from your
          workspace, but a copy can remain in our systems so that it can be
          recovered and so that financial records stay consistent. To have your
          data permanently erased, contact us as described in section 11.
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "How we protect it",
    body: (
      <>
        <p>
          We use technical and organisational measures to protect personal data,
          including encryption in transit, access controls, and keeping each
          workshop’s {jobcard.name} data separate from every other workshop’s.
          Within a workshop, the owner decides what each team member can see
          using role-based permissions.
        </p>
        <p>
          No system is completely secure. If a breach affects your personal data
          and puts your rights at risk, we will tell you and the Nigeria Data
          Protection Commission as the law requires.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your rights",
    body: (
      <>
        <p>Under the Nigeria Data Protection Act 2023 you have the right to:</p>
        <ul>
          <li>ask for a copy of the personal data we hold about you;</li>
          <li>have inaccurate data corrected;</li>
          <li>have your data erased;</li>
          <li>restrict or object to how we use it;</li>
          <li>
            receive your data in a portable format, or have it sent to another
            provider;
          </li>
          <li>
            withdraw your consent at any time, where we rely on consent; and
          </li>
          <li>
            complain to the{" "}
            <a
              href="https://ndpc.gov.ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nigeria Data Protection Commission
            </a>
            .
          </li>
        </ul>
        <p>
          To use any of these rights, email{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We may need to
          confirm your identity before acting on a request. You can update much
          of your {jobcard.name} account information yourself in the app’s
          settings.
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children",
    body: (
      <p>
        Our services are for adults and businesses. We do not knowingly collect
        personal data from anyone under 18. If you believe we have, contact us
        and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy as our services change. The date at the top
        shows when it was last revised. If we make a change that materially
        affects how we use your personal data, we will tell {jobcard.name}{" "}
        account holders by email or in the app before it takes effect.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <>
        <p>
          For any question about this policy or your personal data, contact us:
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </li>
          <li>Phone: {COMPANY.phone}</li>
          <li>
            Post: {COMPANY.legalName}, {COMPANY.address}
          </li>
        </ul>
        <p>
          Our <Link href="/terms">Terms of Service</Link> explain the rules for
          using our services.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={LEGAL_LAST_UPDATED.privacy}
      intro={
        <p>
          This policy explains what personal data {UMBRELLA_NAME} collects, why,
          who we share it with, and the choices and rights you have. We have
          tried to write it in plain language.
        </p>
      }
      sections={sections}
    />
  );
}
