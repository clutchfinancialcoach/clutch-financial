import {
  ButtonLink,
  contactMailto,
  CTASection,
  PageHero,
  PageShell,
} from "../components";

const principles = [
  "Simple habits matter more when they are built early and repeated well.",
  "A good plan should fit the life someone is actually living.",
  "People do better when they feel understood, not judged.",
  "The next step should be clear enough to take.",
];

const focusAreas = [
  "Household cash flow",
  "529 college savings",
  "Roth IRA and HSA decisions",
  "401(k) habits",
  "Equity compensation questions",
  "Long-term planning actions",
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Humair"
        title="Built from real conversations, practical systems, and a genuine desire to help."
        body="Humair believes lasting financial success comes from simple habits, thoughtful decisions, and consistent follow-through. Clutch Financial exists to help people build those habits earlier and move forward with confidence."
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-[2rem] border border-line bg-ice p-4 shadow-soft">
            <div className="flex min-h-96 flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(135deg,#001028_0%,#071832_55%,#0b63ce_135%)] p-7 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-cloud">
                Clutch Financial
              </p>
              <div>
                <p className="font-display text-4xl font-semibold leading-tight">
                  Good money habits should feel usable, not mysterious.
                </p>
                <p className="mt-5 max-w-md text-sm leading-7 text-cloud">
                  The work is learning what matters, building a system, and
                  staying with it.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate">
            <p>
              Through years of personal learning, Humair built his own financial
              systems: budgets, spreadsheets, checklists, and planning rhythms
              he could actually use.
            </p>
            <p>
              Along the way, he started helping family and friends think through
              important decisions. Sometimes that meant sorting through cash
              flow. Sometimes it meant talking through 529s, Roth IRAs, HSAs,
              benefits, budgeting, or a major purchase.
            </p>
            <p>
              Those conversations turned into a passion for helping people get
              ahead earlier, build real confidence, and avoid learning every
              lesson the hard way.
            </p>
            <p>
              As Humair puts it, &quot;I can&apos;t change the financial
              decisions I made at 25, but I can help someone else make better
              ones.&quot; That belief is not about dwelling on the past. It is
              about using perspective and experience to help someone else move
              forward with more clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Coaching philosophy
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-5xl">
              Financial success is usually less dramatic than people think.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              It is rarely about finding secret strategies. It is usually about
              building good habits, making thoughtful decisions, and following
              through over time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-3xl border border-line bg-white p-6 text-base leading-7 text-slate shadow-sm"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green">
              What clients work through
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Practical support for real financial decisions.
            </h2>
            <p className="mt-5 text-lg leading-8 text-cloud">
              Humair&apos;s coaching is collaborative, empathetic, and grounded in
              real life. The goal is to help people build systems they can keep
              using after the conversation ends.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-cloud"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
