import { PRODUCTS } from "@/data/products";

const FAQS = [
  {
    q: "Do I need internet at the workshop?",
    a: `Yes — ${PRODUCTS.jobcard.name} runs in the browser on your phone, tablet or laptop, so it needs a connection. There's nothing to install and nothing to update, and it works on the phone your technicians already carry.`,
  },
  {
    q: "Can my technicians use it without a login?",
    a: `They can. A technician in ${PRODUCTS.jobcard.name} is a record, not necessarily an account — you can assign someone to job cards, mark them as lead and track their work without ever creating a login for them. Give accounts only to the people who need to be in the system.`,
  },
  {
    q: "What if I only have one bay?",
    a: "Start on the free Starter plan. One user, up to 30 customers and 15 job cards a month, with invoices and payments included. It's enough to get off the carbon-copy pad, and you move up when the shop outgrows it.",
  },
  {
    q: "Can I control what my staff can see?",
    a: "On Enterprise you build your own roles by ticking exactly what each one can create, read, update and delete. The usual reason owners ask: your service advisor can raise invoices without ever seeing your profit margins.",
  },
  {
    q: "What happens to the records I already have?",
    a: `We do onboarding by hand. Message us on WhatsApp and we'll go through what you're keeping today — the pad, the notebook, a spreadsheet — and get it into ${PRODUCTS.jobcard.name} with you.`,
  },
];

export function FAQ() {
  return (
    <section className="bg-[#F4F4F4] py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
          Questions we get asked
        </h2>

        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {FAQS.map(({ q, a }) => (
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
