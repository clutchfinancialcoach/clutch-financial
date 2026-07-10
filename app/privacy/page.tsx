import { contactEmail, PageHero, PageShell } from "../components";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "Clutch Financial may collect information you choose to share, such as your name, email address, phone number, scheduling details, and the questions or goals you include when reaching out.",
      "If the website later uses analytics, scheduling tools, contact forms, or similar services, those tools may collect basic technical information such as browser type, device information, pages visited, and referral source.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use the information you provide to respond to inquiries, schedule consultations, prepare for coaching conversations, provide financial coaching and education, and improve the website and client experience.",
      "We do not sell personal information.",
    ],
  },
  {
    title: "Educational And Informational Purposes Only",
    body: [
      "Any information shared through this website, email, scheduling tools, worksheets, templates, or coaching conversations is for educational and informational purposes only.",
      "Clutch Financial does not provide personalized investment, legal, tax, accounting, insurance, or other regulated professional advice. You should consult an appropriately licensed professional, such as a CPA, attorney, financial planner, insurance professional, or investment adviser, for advice specific to your situation.",
    ],
  },
  {
    title: "How Information May Be Shared",
    body: [
      "Information may be shared with service providers that help operate the business, such as email, scheduling, website hosting, analytics, or administrative tools.",
      "Information may also be disclosed if required by law, to protect legal rights, or with your permission.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable steps to protect the information provided to us, but no website, email system, or online service can be guaranteed to be completely secure.",
      "Please avoid sending highly sensitive personal, financial, tax, legal, or account-access information through ordinary email unless specifically requested through an appropriate secure process.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact Clutch Financial to request that your contact information be updated or removed from active business records, subject to any legal, administrative, or legitimate business recordkeeping needs.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Clutch Financial handles information."
        body="This policy explains what information may be collected, how it may be used, and the limits of financial coaching and education."
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
              Questions about this Privacy Policy can be sent to{" "}
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
