import { contactEmail, PageHero, PageShell } from "../components";

const sections = [
  {
    title: "Acceptance Of Terms",
    body: [
      "By using this website or communicating with Clutch Financial, you agree to these Terms of Use. If you do not agree, please do not use the website.",
    ],
  },
  {
    title: "Not Financial Advice",
    body: [
      "Clutch Financial provides financial coaching and education. The purpose of the work is to help clients build habits, understand financial concepts, organize decisions, and follow through on practical next steps.",
      "Clutch Financial does not provide personalized financial, investment, legal, tax, accounting, insurance, or other regulated professional advice. Nothing on this website, in templates, in emails, or in coaching conversations should be treated as a recommendation to buy, sell, hold, or change any specific investment, insurance product, legal structure, tax strategy, or financial product.",
    ],
  },
  {
    title: "Educational And Informational Purposes Only",
    body: [
      "All strategies, examples, budgeting templates, worksheets, discussion prompts, and planning conversations are provided for educational and informational purposes only.",
      "You are responsible for your own decisions. Before acting on tax, legal, investment, insurance, accounting, or other specialized matters, you should consult a qualified licensed professional who understands your specific situation.",
    ],
  },
  {
    title: "No Client-Adviser Relationship",
    body: [
      "Use of this website or participation in an introductory consultation does not create an investment adviser, attorney-client, CPA-client, insurance adviser, or other regulated professional relationship.",
      "A coaching relationship, if formed, is limited to financial coaching and education unless otherwise clearly documented in writing.",
    ],
  },
  {
    title: "No Guarantees",
    body: [
      "Clutch Financial cannot guarantee any particular financial result, savings amount, investment outcome, tax result, legal outcome, or behavioral outcome.",
      "Financial decisions involve personal circumstances, market conditions, laws, taxes, household priorities, and other factors that may change over time.",
    ],
  },
  {
    title: "Website Content",
    body: [
      "Website content is provided in good faith and may be updated, changed, or removed at any time. Clutch Financial does not guarantee that all information will always be complete, current, or free from errors.",
      "You may not copy, reproduce, sell, or distribute website content, templates, or materials without written permission, except for personal use related to your own financial education.",
    ],
  },
  {
    title: "Third-Party Services And Links",
    body: [
      "The website may link to third-party services such as scheduling tools, email tools, payment tools, or outside resources. Clutch Financial is not responsible for the content, policies, security, or practices of third-party websites or services.",
    ],
  },
  {
    title: "Limitation Of Liability",
    body: [
      "To the fullest extent permitted by law, Clutch Financial is not liable for damages arising from use of this website, reliance on educational content, third-party services, or decisions made by users or clients.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Terms"
        title="Terms for using Clutch Financial."
        body="These terms explain the educational nature of Clutch Financial's work and the limits of financial coaching."
      />

      <section className="border-y border-line bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">
            Last updated: July 9, 2026
          </p>
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-display text-3xl font-semibold text-navy">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}

          <article>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Contact
            </h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Questions about these Terms can be sent to{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold text-blue transition hover:text-navy"
              >
                {contactEmail}
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
