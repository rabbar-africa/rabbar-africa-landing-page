import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalDocument,
  LegalTable,
  type LegalSection,
} from "@/components/legal/LegalDocument";
import { SubprocessorTable } from "@/components/legal/SubprocessorTable";
import { COMPANY, LEGAL_VERSION } from "@/data/legal";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";
import { contactEmail } from "@/data/constant";

export const metadata: Metadata = {
  title: "Data Processing Terms",
  description: `How ${UMBRELLA_NAME} processes the customer data workshops keep in ${PRODUCTS.jobcard.name}, as their data processor under the Nigeria Data Protection Act 2023.`,
  alternates: { canonical: "/data-processing" },
};

const { jobcard } = PRODUCTS;

const Email = () => <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;

const sections: LegalSection[] = [
  {
    id: "scope",
    heading: "Who these terms are between, and when they apply",
    body: (
      <>
        <p>
          These Data Processing Terms are between the business that holds a{" "}
          {jobcard.name} account (“you”) and {COMPANY.legalName} (“
          {UMBRELLA_NAME}”, “we”, “us”). They form part of our{" "}
          <Link href="/terms">Terms of Service</Link>, and you accept them when
          you accept those terms.
        </p>
        <p>
          They apply to the personal data you put into {jobcard.name} about
          other people, mainly your customers (“customer data”). For customer
          data, you are the <strong>controller</strong> and we are your{" "}
          <strong>processor</strong>, as those terms are used in the Nigeria
          Data Protection Act 2023 (NDPA) and the Nigeria Data Protection
          Commission’s General Application and Implementation Directive 2025.
        </p>
        <p>
          They do not cover data about you and your team as our users, which we
          handle as controller under our{" "}
          <Link href="/privacy">Privacy Policy</Link>. Where these terms and the
          Terms of Service conflict on data protection, these terms prevail.
        </p>
      </>
    ),
  },
  {
    id: "processing",
    heading: "What we process, and why",
    body: (
      <LegalTable
        head={["Topic", "Details"]}
        rows={[
          [
            <strong key="p">Purpose</strong>,
            `To provide ${jobcard.name} to you: storing your records, producing invoices, receipts, statements and inspection reports, reminders, exports, the WhatsApp assistant and AI drafting. Also to support and secure the service.`,
          ],
          [
            <strong key="s">People concerned</strong>,
            "Your customers and their contacts, and any vendors and technicians you record.",
          ],
          [
            <strong key="d">Types of data</strong>,
            "Names, phone numbers, email and postal addresses, company names and job titles, dates of birth if you enter them, vehicle details (make, model, plate number, VIN), vehicle documents and their scans, job cards, inspection findings and photos, invoices, payments, notes, and anything else you type or upload.",
          ],
          [
            <strong key="sp">Sensitive data</strong>,
            `${jobcard.name} is not designed for sensitive personal data, such as health, religious or biometric data. Do not enter it unless you have a lawful basis to and it is needed for the work.`,
          ],
          [
            <strong key="o">What we do with it</strong>,
            "Store, organise, display, search, back up, transmit, and delete it, as the service requires, and as you instruct.",
          ],
          [
            <strong key="t">How long</strong>,
            "For as long as your account is open, and then as section 10 describes.",
          ],
        ]}
      />
    ),
  },
  {
    id: "your-responsibilities",
    heading: "Your responsibilities",
    body: (
      <>
        <p>As controller, you are responsible for:</p>
        <ul>
          <li>having a lawful basis to collect and use customer data;</li>
          <li>
            telling your customers how you use their data, including that you
            use {jobcard.name};
          </li>
          <li>keeping the data accurate and relevant to the work you do;</li>
          <li>
            answering your customers’ requests to use their rights, with the
            tools we provide (section 8); and
          </li>
          <li>
            deciding who in your team can see what, using {jobcard.name}’s roles
            and permissions.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "instructions",
    heading: "We act only on your instructions",
    body: (
      <>
        <p>
          We process customer data only to provide {jobcard.name} to you. Your
          instructions are these terms, the Terms of Service, and what you and
          your team do in the app and the WhatsApp assistant. We do not use
          customer data for our own purposes, sell it, or use it for
          advertising.
        </p>
        <p>
          If the law requires us to process customer data in some other way, we
          will tell you first, unless the law forbids it. If we believe an
          instruction of yours breaks data protection law, we will tell you.
        </p>
      </>
    ),
  },
  {
    id: "staff",
    heading: "Who at Rabbar can see customer data",
    body: (
      <>
        <p>
          Authorised {UMBRELLA_NAME} staff can see the records in your workspace
          and the WhatsApp assistant’s conversation logs. They may use that
          access only to:
        </p>
        <ul>
          <li>run, maintain and secure the service;</li>
          <li>investigate errors, misuse or a security incident;</li>
          <li>support you, when you or your team ask for help; and</li>
          <li>meet a legal obligation.</li>
        </ul>
        <p>
          Everyone at {UMBRELLA_NAME} with this access is bound to keep customer
          data confidential.
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "Security",
    body: (
      <>
        <p>
          We keep technical and organisational measures in place to protect
          customer data, appropriate to the risk. They include:
        </p>
        <ul>
          <li>encryption in transit between you and our servers;</li>
          <li>
            separation of each business’s data, with role-based permissions
            within a business;
          </li>
          <li>passwords stored only as one-way hashes;</li>
          <li>
            daily backups, encrypted before they are stored, and deleted after
            about 13 months;
          </li>
          <li>
            restricted access to our administrative tools, as section 5
            describes; and
          </li>
          <li>a record of every business deletion and customer erasure.</li>
        </ul>
        <p>
          We review these measures as the service changes and as risks change.
        </p>
      </>
    ),
  },
  {
    id: "subprocessors",
    heading: "Sub-processors",
    body: (
      <>
        <p>
          You authorise us to use the providers below to help us provide the
          service. Each is bound by a written agreement to protect the data, on
          terms no less protective than these, and we remain responsible to you
          for their work.
        </p>
        <SubprocessorTable />
        <p>
          Before we add a provider that will process customer data, we will
          update this list. We will also email account owners at least 14 days
          before the new provider starts. If you object on reasonable data
          protection grounds, tell us. If we cannot address your concern, you
          may close your account.
        </p>
        <p>
          <strong>International transfers.</strong> Our database and backups are
          in Ireland (EU), and several providers are in the United States. We
          transfer customer data abroad only as sections 41 to 43 of the NDPA
          allow. We rely mainly on each provider’s data processing agreement.
        </p>
      </>
    ),
  },
  {
    id: "rights-requests",
    heading: "Helping you answer your customers",
    body: (
      <>
        <p>
          Your customers have rights under the NDPA, such as to see, correct or
          erase their data. {jobcard.name} lets you meet most requests yourself:
        </p>
        <ul>
          <li>
            <strong>Access and portability.</strong> Export customers, vehicles,
            invoices, payments, job cards and more from the app.
          </li>
          <li>
            <strong>Correction.</strong> Edit the customer’s record.
          </li>
          <li>
            <strong>Erasure.</strong> Use <strong>Erase customer</strong>. It
            deletes the customer’s contact details, vehicles, documents,
            reminders and files. It removes their name and contact details from
            job cards and inspections, and keeps invoices and payments as tax
            law requires. It does not search free-text notes, so check those
            yourself.
          </li>
        </ul>
        <p>
          If a customer of yours contacts us directly, we will not answer for
          you. We will pass the request to you without undue delay. Where you
          need more help, ask us at <Email /> and we will help you respond.
        </p>
      </>
    ),
  },
  {
    id: "breaches",
    heading: "Personal data breaches",
    body: (
      <>
        <p>
          If we become aware of a breach affecting customer data, we will tell
          you without undue delay, so you can meet your own duty to notify the
          Nigeria Data Protection Commission within 72 hours. We will tell you
          what happened, what data and people are affected, the likely
          consequences, and what we are doing about it. Where we don’t have all
          of this at first, we will send it as we learn it.
        </p>
        <p>
          We will take reasonable steps to contain the breach, and help you with
          any notice you need to give to the Commission or to the people
          affected.
        </p>
      </>
    ),
  },
  {
    id: "end",
    heading: "When your account ends",
    body: (
      <>
        <p>
          You can export your data at any time before you delete your business.
          When the owner deletes the business, we delete customer data 14 days
          later, including its files. The owner can cancel until then. If we
          close your account, you can ask us for an export within 30 days.
        </p>
        <p>After deletion:</p>
        <ul>
          <li>
            copies in our encrypted backups are deleted when those backups
            expire, after about 13 months; and
          </li>
          <li>
            we keep a record of what you paid {UMBRELLA_NAME} for 7 years, as
            tax law requires. It holds no customer data.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "assistance",
    heading: "Information, assessments and audits",
    body: (
      <>
        <p>
          We will give you the information you reasonably need to show you
          comply with the NDPA as it relates to {jobcard.name}. We will also
          help, where reasonable, with any data protection impact assessment or
          inquiry from the Nigeria Data Protection Commission.
        </p>
        <p>
          If that information is not enough, you may audit our compliance with
          these terms once a year. You must give us reasonable notice, keep what
          you learn confidential, and bear your own costs. We may ask that an
          independent auditor carry it out.
        </p>
      </>
    ),
  },
  {
    id: "general",
    heading: "Liability, changes and disputes",
    body: (
      <>
        <p>
          The limits of liability in our{" "}
          <Link href="/terms#liability">Terms of Service</Link> apply to these
          terms, except where the law does not allow them to.
        </p>
        <p>
          We may update these terms, for example to reflect new guidance from
          the Commission. We will tell account owners before a material change
          takes effect. These terms are governed by the laws of the Federal
          Republic of Nigeria, and disputes are settled as the Terms of Service
          describe.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <ul>
        <li>
          Data protection questions: <Email />
        </li>
        <li>Phone: {COMPANY.phone}</li>
        <li>
          Post: {COMPANY.legalName}, {COMPANY.address}
        </li>
      </ul>
    ),
  },
];

export default function DataProcessingPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Data Processing Terms"
      version={LEGAL_VERSION}
      intro={
        <p>
          Workshops use {jobcard.name} to keep records about their customers.
          These terms explain how we look after that data on each workshop’s
          behalf, and what each of us is responsible for.
        </p>
      }
      sections={sections}
    />
  );
}
