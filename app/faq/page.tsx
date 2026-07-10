import {
  ButtonLink,
  contactMailto,
  CTASection,
  FAQList,
  PageHero,
  PageShell,
} from "../components";

export default function FAQPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before the first conversation."
        body="A few practical answers about what Clutch Financial does, what it does not do, and how to think about whether coaching is a fit."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={contactMailto}>
            Schedule an Introductory Consultation
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore services
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-y border-line bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Common questions
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-5xl">
              Start with the questions you already have.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              If you are still unsure, the introductory consultation is a simple
              place to talk through what is on your mind and see whether working
              together makes sense.
            </p>
          </div>
          <FAQList />
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
