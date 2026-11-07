import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalDocument,
  LegalTable,
  type LegalSection,
} from "@/components/legal/LegalDocument";
import { SubprocessorTable } from "@/components/legal/SubprocessorTable";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/data/legal";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";
import { contactEmail } from "@/data/constant";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${UMBRELLA_NAME} collects, uses, shares and protects personal data across our website, ${PRODUCTS.jobcard.name}, the WhatsApp assistant, ${PRODUCTS.garage.name} and ${PRODUCTS.fleet.name}.`,
  alternates: { canonical: "/privacy" },
};

const { jobcard, garage, fleet } = PRODUCTS;

const Email = () => <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;

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
          This policy covers our website; <strong>{jobcard.name}</strong>, our
          workshop management software, including its web app and its WhatsApp
          assistant; our workshop <strong>{garage.name}</strong>; and our fleet
          service <strong>{fleet.name}</strong>.
        </p>
        <p>We have two roles under the Nigeria Data Protection Act 2023:</p>
        <ul>
          <li>
            <strong>Controller.</strong> For the people we deal with directly,
            we decide how their data is used. That covers website visitors,
            workshop owners and their team members, anyone who messages our
            WhatsApp assistant, and {garage.name} and {fleet.name} customers.
          </li>
          <li>
            <strong>Processor.</strong> For the customer records a workshop
            keeps in {jobcard.name}, the workshop is the controller. We hold
            that data on its behalf and use it only to provide the service,
            under our <Link href="/data-processing">Data Processing Terms</Link>
            . See section 8.
          </li>
        </ul>
        <p>
          For any privacy question or request, including for our data protection
          officer, email <Email />.
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
          your first and last name, email address, WhatsApp phone number and
          password. We also collect details of your business: its name, email,
          phone number and logo. Later you can add its address, tax
          identification number, CAC registration number and website. If you add
          bank account details so they appear on your invoices, we check the
          account name with Paystack.
        </p>
        <p>
          <strong>Your team.</strong> If you invite team members, we hold their
          names, email addresses, phone numbers and roles. We also record when
          each person last signed in.
        </p>
        <p>
          <strong>Records you keep in {jobcard.name}.</strong> These include
          your customers, vehicles, job cards, inspections and their photos,
          vehicle documents and their scans, invoices, payments, expenses,
          reminders and technicians. Section 8 explains how we handle your
          customers’ data.
        </p>
        <p>
          <strong>When you use the WhatsApp assistant.</strong> We receive your
          phone number and WhatsApp profile name. We also receive the text of
          your messages, the buttons you tap, our replies and any logo you send.
          If you sign up through the assistant, we collect your business name,
          your name and your email address. See section 4.
        </p>
        <p>
          <strong>Payments.</strong> {jobcard.name} subscriptions are paid
          through Paystack. If you save a card, we receive a payment token and
          limited card details (the card type, issuing bank, last four digits
          and expiry date) so we can renew your subscription. We never see or
          store your full card number.
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
          <strong>Automatically.</strong> On our website, Google Analytics and
          Google Ads collect information such as the pages you visit, your
          browser and device, your approximate location and the site that
          referred you (see section 11). The {jobcard.name} app has no analytics
          or advertising trackers. Like any online service, our hosting
          providers keep standard server logs, such as IP addresses and request
          times, for security and troubleshooting.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    heading: "How we use it, and our lawful basis",
    body: (
      <>
        <p>
          The Nigeria Data Protection Act 2023 requires a lawful basis for each
          use of personal data. Ours are:
        </p>
        <LegalTable
          head={["What we do", "Lawful basis"]}
          rows={[
            [
              `Run your ${jobcard.name} account and the WhatsApp assistant, carry out work on your vehicle, and deliver fleet services`,
              "Performing our contract with you",
            ],
            [
              "Take payment, renew subscriptions, and send receipts and renewal reminders",
              "Performing our contract with you",
            ],
            [
              "Send service messages, such as verification codes, password resets, billing notices and alerts about your account",
              "Performing our contract with you",
            ],
            [
              "Reply when you contact us and follow up on your enquiry, including messages to the WhatsApp assistant before you sign up",
              "Our legitimate interest in answering enquiries, or steps you ask us to take before entering a contract",
            ],
            [
              "Provide support, keep our services secure, prevent fraud and misuse, and fix problems",
              "Our legitimate interests",
            ],
            [
              "Understand how our website is used and whether our advertising works",
              "Our legitimate interests or, where the law requires it, your consent",
            ],
            [
              "Keep financial records and respond to lawful requests from authorities",
              "Complying with our legal obligations",
            ],
          ]}
        />
        <p>
          We do not sell personal data. We do not send marketing messages unless
          you have agreed to receive them, and you can stop them at any time.
        </p>
      </>
    ),
  },
  {
    id: "whatsapp",
    heading: "The WhatsApp assistant",
    body: (
      <>
        <p>
          The {jobcard.name} WhatsApp assistant lets a workshop raise invoices,
          record payments, and find or add customers and vehicles by chatting.
          The first message it sends links to this policy and our{" "}
          <Link href="/terms">Terms of Service</Link>, and tapping{" "}
          <strong>Start free</strong> accepts them. Until you sign up, we keep
          only your number, your WhatsApp name and the messages you send, so we
          can reply and follow up on your enquiry.
        </p>
        <ul>
          <li>
            Your WhatsApp number is how the assistant recognises you. Anyone
            with access to your WhatsApp can use the assistant as you.
          </li>
          <li>
            We keep a log of each conversation (what was sent, which buttons
            were tapped and what the assistant replied) for{" "}
            <strong>180 days</strong>. We use it to run the conversation, give
            support and fix mistakes. The raw message data WhatsApp delivers to
            us is deleted after 7 days.
          </li>
          <li>
            Messages are read by our AI provider so the assistant can understand
            them (see section 5).
          </li>
          <li>
            Messages also pass through Meta, which runs WhatsApp, and are
            subject to WhatsApp’s own terms and privacy policy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ai",
    heading: "How we use AI",
    body: (
      <>
        <p>
          Some {jobcard.name} features use AI from our provider, Anthropic. We
          send only what each feature needs:
        </p>
        <ul>
          <li>
            <strong>Inspection advisories and notes.</strong> When a workshop
            asks for a draft, we send the inspection findings, the vehicle’s
            details, and the names of the customer and technician if they are
            entered. Inspection photos are not sent. The technician reviews and
            edits the draft before it is saved or sent to anyone.
          </li>
          <li>
            <strong>The WhatsApp assistant.</strong> We send the text of your
            message, plus what is needed to understand it: an invoice being
            drafted, and matching items from your price list. The assistant does
            not send images or voice notes to AI.
          </li>
        </ul>
        <p>
          Anthropic processes this data to return a result to us. Under its
          commercial terms it does not use the data to train its models. AI
          output is never used to make decisions about you that have legal or
          similarly significant effects.
        </p>
      </>
    ),
  },
  {
    id: "staff-access",
    heading: "Who at Rabbar can see your data",
    body: (
      <>
        <p>
          Authorised {UMBRELLA_NAME} staff can see the records in {jobcard.name}{" "}
          workspaces and the WhatsApp assistant’s conversation logs. They use
          this access only to:
        </p>
        <ul>
          <li>
            support you, including when you ask us to look into something;
          </li>
          <li>keep the service secure and investigate misuse;</li>
          <li>fix errors and improve how the service works; and</li>
          <li>meet our legal obligations.</li>
        </ul>
        <p>
          Staff do not browse workspaces for any other reason, and they are
          bound to keep what they see confidential.
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
          We share personal data with the providers below, which help us run our
          services. Each receives only what it needs to do its job, and may use
          it only for that.
        </p>
        <SubprocessorTable />
        <p>We may also disclose personal data:</p>
        <ul>
          <li>where the law or a court or regulator requires it;</li>
          <li>to protect our rights, our users or the safety of others; or</li>
          <li>
            to a buyer or successor if our business is sold or reorganised, in
            which case this policy will continue to apply.
          </li>
        </ul>
        <p>
          {jobcard.name} does not contact your customers. Invoices, receipts and
          inspection reports reach them only when you send them yourself.
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
          customers: names, contact details, vehicles and their documents, job
          cards, inspections, invoices and payments. For that information the
          workshop is the controller, and we process it on the workshop’s
          behalf, as set out in our{" "}
          <Link href="/data-processing">Data Processing Terms</Link>.
        </p>
        <p>
          If you are a workshop, you are responsible for having a lawful basis
          to collect your customers’ data and for telling them how you use it.
          {jobcard.name} gives you tools to export a customer’s data and to
          erase a customer who asks to be forgotten.
        </p>
        <p>
          If you are a customer of a workshop that uses {jobcard.name}, please
          contact that workshop about your data. If you contact us instead, we
          will pass your request on to them.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    heading: "International transfers",
    body: (
      <p>
        Most of our providers store or process data outside Nigeria. Our
        database and backups are in Ireland, in the European Union. Other
        providers are in the United States or elsewhere, as the table in section
        7 shows. We transfer personal data abroad only as the Nigeria Data
        Protection Act 2023 allows. We rely mainly on each provider’s data
        processing agreement, which binds it to protect the data.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: (
      <>
        <p>
          We keep personal data only as long as we need it for the purposes in
          this policy:
        </p>
        <LegalTable
          head={["Data", "How long"]}
          rows={[
            [
              `Your ${jobcard.name} account and business records`,
              "While your account is open. If the owner deletes the business, everything is deleted 14 days later (the owner can cancel until then).",
            ],
            [
              "A record you delete in the app",
              "Customers, job cards, vehicle documents and reminders are removed at once, though files attached to them can stay in storage until the business is deleted. Vehicles, payments, expenses and invoices are hidden but kept, so your financial records stay consistent, until the business is deleted.",
            ],
            [
              "A customer the workshop erases",
              "Their contact details, vehicles, documents, reminders and files are deleted, and their name and contact details are removed from job cards and inspections. Invoices and payments keep the customer’s name and amounts, as tax law requires.",
            ],
            [
              "A team member who is removed",
              "Their account is deleted at once. Their WhatsApp conversation log expires within 180 days.",
            ],
            ["WhatsApp conversation logs", "180 days"],
            ["Raw WhatsApp message data", "7 days"],
            [
              "Encrypted backups",
              "About 13 months. Deleted data leaves our backups when they expire.",
            ],
            [
              `Records of what a business paid ${UMBRELLA_NAME}`,
              "7 years after the business is deleted, as tax law requires. We keep the business name and payment amounts, without contact details.",
            ],
            [
              "A record that a deletion or erasure happened",
              "Kept as evidence that we acted on the request. It holds the business name and who asked, but no customer details.",
            ],
            [
              "Enquiries to us",
              "As long as needed to deal with your enquiry and any follow-up",
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: (
      <>
        <p>
          <strong>Our website</strong> uses cookies set by Google Analytics and
          Google Ads. They count visits, show which pages are useful, and
          measure whether people who click our adverts go on to contact us.
        </p>
        <p>
          <strong>The {jobcard.name} app</strong> uses only what it needs to
          work: cookies that keep you signed in, and local storage that
          remembers settings such as which menus you have open. It has no
          analytics or advertising cookies.
        </p>
        <p>You can control website cookies:</p>
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
    id: "security",
    heading: "How we protect it",
    body: (
      <>
        <p>We protect personal data with measures that include:</p>
        <ul>
          <li>encryption of data in transit between you and our servers;</li>
          <li>passwords stored only as one-way hashes, never in plain text;</li>
          <li>daily backups, encrypted before they are stored;</li>
          <li>
            keeping each workshop’s {jobcard.name} data separate from every
            other workshop’s, with role-based permissions inside each workshop;
            and
          </li>
          <li>limiting staff access as described in section 6.</li>
        </ul>
        <p>
          No system is completely secure. If a breach puts your personal data at
          risk, we will notify the Nigeria Data Protection Commission within 72
          hours of becoming aware of it. Where the risk to you is high, we will
          also tell you directly. If the breach affects a workshop’s customer
          data, we will tell the workshop without delay.
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
          <li>be told how your personal data is used, as this policy does;</li>
          <li>ask for a copy of the personal data we hold about you;</li>
          <li>have inaccurate or incomplete data corrected;</li>
          <li>have your data erased;</li>
          <li>restrict or object to how we use it;</li>
          <li>
            receive your data in a common, machine-readable format, or have it
            sent to another provider;
          </li>
          <li>withdraw your consent at any time, where we rely on consent;</li>
          <li>
            not be subject to decisions based solely on automated processing
            that significantly affect you; and
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
          <strong>Doing it yourself.</strong> Workshop owners can update most
          account details in Settings. They can also export their records and
          delete their business from the {jobcard.name} app.
        </p>
        <p>
          <strong>Asking us.</strong> Email <Email /> with your request. We may
          need to confirm your identity first. We will respond within 30 days.
          There is no charge, unless a request is clearly unfounded or
          excessive.
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
          For any question about this policy or your personal data, including
          for our data protection officer, contact us:
        </p>
        <ul>
          <li>
            Email: <Email />
          </li>
          <li>Phone: {COMPANY.phone}</li>
          <li>
            Post: {COMPANY.legalName}, {COMPANY.address}
          </li>
        </ul>
        <p>
          Our <Link href="/terms">Terms of Service</Link> explain the rules for
          using our services. Our{" "}
          <Link href="/data-processing">Data Processing Terms</Link> explain how
          we handle the customer data workshops keep in {jobcard.name}.
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
          who can see it, who we share it with, how long we keep it, and your
          rights. We have tried to write it in plain language.
        </p>
      }
      sections={sections}
    />
  );
}
