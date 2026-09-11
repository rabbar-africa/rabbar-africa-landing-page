import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export interface LegalSection {
  /** Anchor id, used by the table of contents and for deep links. */
  id: string;
  heading: string;
  body: ReactNode;
}

interface LegalDocumentProps {
  eyebrow: string;
  title: string;
  /** Human-readable date the document last changed, e.g. "11 September 2026". */
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}

/**
 * Shared shell for the legal pages: a title block, a sticky table of contents
 * on wide screens, and the numbered sections. Body copy is styled through
 * descendant selectors so each section can be written as plain JSX.
 */
export function LegalDocument({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-[#001F3E]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#DAE648]">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {title}
            </h1>
            <p className="mt-4 text-sm text-gray-400">
              Last updated {lastUpdated}
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[15rem_1fr] gap-10 lg:gap-16">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                On this page
              </p>
              <ol className="mt-4 space-y-2 text-sm">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2 text-gray-600 hover:text-[#001F3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:rounded-sm"
                    >
                      {/* Fixed-width number column so entries 10+ align with 1–9. */}
                      <span className="w-6 shrink-0 tabular-nums text-gray-400">
                        {i + 1}.
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="legal-body max-w-3xl text-gray-700 leading-relaxed [&_a]:font-medium [&_a]:text-[#013064] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#001F3E] [&_li]:mt-2 [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-[#001F3E] [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
              <div className="text-lg text-gray-600 [&>p:first-child]:mt-0">
                {intro}
              </div>

              {sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mt-12 scroll-mt-28"
                >
                  <h2 className="font-display text-2xl font-bold text-[#001F3E] tracking-tight">
                    <span className="mr-2 tabular-nums text-gray-400">
                      {i + 1}.
                    </span>
                    {section.heading}
                  </h2>
                  {section.body}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
