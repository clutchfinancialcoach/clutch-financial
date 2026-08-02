import {
  ButtonLink,
  contactMailto,
  CTASection,
  PageHero,
  PageShell,
  SectionIntro,
} from "../components";

const services = [
  {
    title: "Get organized",
    description: "Turn scattered accounts, spending, and goals into one clear picture.",
    includes: ["Cash flow", "Accounts", "Benefits", "Priorities"],
  },
  {
    title: "Make better decisions",
    description: "Talk through the choices that feel bigger than a quick Google search.",
    includes: ["401(k)", "Roth IRA", "HSA", "529", "Equity", "Major purchases"],
  },
  {
    title: "Follow through",
    description: "Leave with simple next steps and a rhythm that keeps the plan alive.",
    includes: ["Action list", "Review rhythm", "Accountability", "Adjustments"],
  },
];

const fit = [
  "You want a clear system for day-to-day money.",
  "You want help thinking, not someone talking over you.",
  "You are ready to look honestly and follow through.",
  "You value calm guidance and practical follow-up.",
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Financial coaching for the decisions real life keeps putting in front of you."
        body="Get organized, make thoughtful decisions, and build habits that are easier to keep. Package pricing is not published yet."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={contactMailto}>
            Schedule an Introductory Consultation
          </ButtonLink>
          <ButtonLink href="/faq" variant="secondary">
            Read FAQs
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-y border-line bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Core services"
            title="Three ways coaching helps."
            body="The details are personal, but the work usually falls into a simple pattern."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-3xl border border-line bg-ice p-6 shadow-sm"
              >
                <p className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                  {index + 1}
                </p>
                <h2 className="mt-6 font-display text-3xl font-semibold text-navy">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.includes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-blue"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Good fit"
            title="This works best when you want to be involved."
            body="You bring the goals, numbers, and context. Clutch Financial brings structure, education, and accountability."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {fit.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-line bg-white p-6 text-lg leading-8 text-slate shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What you leave with"
            title="A clearer picture, a simpler system, and next steps you can use."
            body="The goal is not a fancy document. It is a working rhythm for your habits, decisions, and follow-through."
            inverted
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["A cash flow view", "A priority map", "A follow-through plan"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-xl font-semibold"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
