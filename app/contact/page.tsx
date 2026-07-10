import {
  ButtonLink,
  contactEmail,
  contactMailto,
  PageHero,
  PageShell,
} from "../components";

const callTopics = [
  "What feels unclear right now",
  "The habits or decisions you want help with",
  "Whether coaching is the right kind of support",
  "One practical next step",
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Schedule an Introductory Consultation"
        body="A complimentary 30-minute conversation to talk through what is on your mind and see whether Clutch Financial is the right fit."
      />

      <section className="border-y border-line bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-line bg-ice p-6 shadow-soft sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">
              Complimentary consultation
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              No pressure. No pitch. Just a thoughtful first conversation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Email {contactEmail} and share a few sentences about what you want
              help sorting through. I will reply personally so we can find a
              good time to talk.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contactMailto}>
                Schedule an Introductory Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Review services
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] bg-navy p-6 text-white shadow-glow sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green">
              What we can discuss
            </p>
            <div className="mt-8 space-y-4">
              {callTopics.map((topic, index) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <p className="text-sm font-semibold text-green">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-line bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">
            Before you reach out
          </p>
          <p className="mt-4 max-w-4xl text-2xl font-semibold leading-snug text-navy sm:text-3xl">
            You do not need everything organized. Getting organized is often
            part of the work.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate">
            If you can describe what feels unclear, what decision is ahead, or
            what keeps getting pushed off, that is enough to begin.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
