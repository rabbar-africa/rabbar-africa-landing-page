import { CheckCheck, FileText } from "lucide-react";

const STEPS = [
  {
    title: "Type the job in one message",
    body: "Who it's for, what you did and what it costs, the way you'd say it out loud.",
  },
  {
    title: "Check it, then tap Confirm",
    body: "Rabbar shows you the invoice first. Confirm it and the PDF comes back with your business name, logo and bank details, ready to forward.",
  },
  {
    title: "Record the payment the same way",
    body: "Tell Rabbar when they pay, and a receipt comes straight back.",
  },
];

/**
 * The WhatsApp assistant, shown as a conversation. The example deliberately
 * isn't a car job: the platform is for any business now.
 */
export function WhatsAppInvoice() {
  return (
    <section id="whatsapp" className="bg-[#001F3E] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#DAE648]">
              Invoices and receipts on WhatsApp
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Send invoices and receipts from WhatsApp
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              No app to open on the job. Once your business is set up, send the
              Rabbar assistant one WhatsApp message and get a branded invoice
              PDF back. Record the payment the same way and the receipt follows.
            </p>

            <ol className="mt-10 space-y-6">
              {STEPS.map(({ title, body }, i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DAE648] font-semibold text-[#001F3E]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-gray-400 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* The conversation */}
          <div
            className="rounded-2xl bg-[#0B141A] p-4 sm:p-6 shadow-2xl"
            aria-label="Example WhatsApp conversation with the Rabbar assistant"
            role="img"
          >
            <div className="space-y-3 text-[15px] leading-relaxed">
              <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-[#005C4B] px-4 py-2.5 text-white">
                Invoice for Mrs Adeola, 2 agbada 25,000 each, delivery 3,000
                <span className="mt-1 flex items-center justify-end gap-1 text-xs text-white/60">
                  10:42
                  <CheckCheck size={14} className="text-[#53BDEB]" />
                </span>
              </div>

              <div className="max-w-[85%] overflow-hidden rounded-xl rounded-tl-sm bg-[#202C33] text-white">
                <div className="px-4 py-2.5">
                  <p className="font-semibold">🧾 Invoice for Mrs Adeola</p>
                  <p className="mt-2">
                    1. Agbada
                    <br />
                    <span className="text-white/70">2 × ₦25,000 = ₦50,000</span>
                    <br />
                    2. Delivery
                    <br />
                    <span className="text-white/70">1 × ₦3,000 = ₦3,000</span>
                  </p>
                  <p className="mt-2 font-semibold">Total: ₦53,000</p>
                </div>
                <div className="grid grid-cols-2 border-t border-white/10 text-center text-sm font-medium text-[#53BDEB]">
                  <span className="py-2.5">✅ Confirm</span>
                  <span className="border-l border-white/10 py-2.5">
                    ❌ Cancel
                  </span>
                </div>
              </div>

              <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-[#202C33] px-4 py-2.5 text-white">
                <div className="flex items-center gap-3 rounded-lg bg-black/25 p-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#DAE648]">
                    <FileText size={20} className="text-[#001F3E]" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium">Invoice-INV-0042.pdf</p>
                    <p className="text-xs text-white/60">PDF</p>
                  </div>
                </div>
                <p className="mt-2">
                  Invoice INV-0042 for Mrs Adeola · ₦53,000
                </p>
                <span className="mt-1 block text-right text-xs text-white/60">
                  10:43
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
