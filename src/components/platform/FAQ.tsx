/**
 * Also published as FAQPage structured data (see src/app/page.tsx), which is
 * what search engines and AI assistants quote. Lead with the questions people
 * search for about job cards, WhatsApp invoices, inspection reports and
 * paperwork, and answer each one in its first sentence.
 */
export const FAQS = [
  {
    q: "What is a job card?",
    a: "A job card is the record of a single job: who it's for, what the customer asked for or what's wrong, who is working on it, when it's promised and what it cost. In Rabbar, a digital job card also holds the invoices, payments, inspection report, expenses and photos for that job, so you can see its status and its profit at any time.",
  },
  {
    q: "Can I send invoices and receipts on WhatsApp?",
    a: 'Yes. Once your business is set up, message the Rabbar assistant with the job, for example "Invoice for Mrs Adeola, 2 agbada 25,000 each". It shows you the invoice to check, and when you confirm, sends back a branded PDF you can forward to your customer. Tell it when they pay and it sends the receipt.',
  },
  {
    q: "Can I give my customers a vehicle inspection report?",
    a: "Yes. Your technician works through the inspection checklist on a phone, marks each item and photographs each fault. Rabbar drafts the advisory with AI, the technician checks it, and you send the customer a branded vehicle inspection report PDF on WhatsApp or by email.",
  },
  {
    q: "Does Rabbar track vehicle paperwork?",
    a: "Yes. Store insurance, vehicle licence, roadworthiness, proof of ownership and any other document with its scans and expiry date. Rabbar shows what's valid, expiring soon or expired, and keeps the history when a document is renewed.",
  },
  {
    q: "Is Rabbar only for mechanics?",
    a: "No. Rabbar was built in our own Lagos workshop, and mechanics are still our biggest group of users, but laundries, solar installers, electricians and tailors use it too. Job cards work for any job, with or without a vehicle.",
  },
  {
    q: "Can I just sign up and start?",
    a: "Yes. Create your business, add your logo and bank details, and open your first job card or invoice the same day. The Starter plan is free, so there's nothing to pay to find out whether Rabbar suits how you work.",
  },
  {
    q: "Can my staff use it?",
    a: "Yes. Invite them by email, or let them join through WhatsApp, and choose what each person can see and do. Technicians can be assigned to job cards without needing a login, and your front desk can raise invoices without seeing your profit.",
  },
  {
    q: "What happens to the records I already have?",
    a: "You can start entering them yourself straight away. If you'd rather not retype everything, message us on WhatsApp: we'll look at what you keep today, whether that's a job card pad, a receipt book or a spreadsheet, and help you bring it across.",
  },
];

export function FAQ({
  items = FAQS,
  heading = "Questions we get asked",
}: {
  items?: { q: string; a: string }[];
  heading?: string;
} = {}) {
  return (
    <section className="bg-[#F4F4F4] py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
          {heading}
        </h2>

        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {items.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 list-none font-semibold text-[#001F3E] marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:rounded-sm">
                {q}
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-2xl leading-none text-[#013064] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
