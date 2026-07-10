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
    title: "Financial Foundations",
    description:
      "Get your footing when real income starts coming in and the number of choices begins to grow.",
    includes: ["First paycheck", "401(k)", "Roth IRA", "HSA", "Investing fundamentals"],
  },
  {
    title: "Budgeting & Cash Flow Systems",
    description:
      "Build a system that reflects your actual life, not a perfect spreadsheet you stop opening after two weeks.",
    includes: ["Spending rhythm", "Monthly review", "Savings targets", "Decision rules"],
  },
  {
    title: "Roth IRA / 401(k) / HSA Setup Guidance",
    description:
      "Understand what these accounts are for, what questions to ask, and what action makes sense next.",
    includes: ["Account education", "Contribution habits", "Benefits review", "Action checklist"],
  },
  {
    title: "College Savings & 529 Planning",
    description:
      "Think through college savings as one part of your family picture, without letting it take over every other priority.",
    includes: ["529 education", "Family priorities", "Savings rhythm", "Tradeoffs"],
  },
  {
    title: "Couples & Family Money Alignment",
    description:
      "Create a shared language for spending, saving, kids, major purchases, and the habits you want at home.",
    includes: ["Money conversations", "Shared goals", "Family cash flow", "Decision agreements"],
  },
  {
    title: "Equity Compensation Decision Support",
    description:
      "Organize your questions around RSUs, stock options, concentration, tax topics for a tax professional, and how equity fits into the rest of your life.",
    includes: ["RSU questions", "Option considerations", "Concentration awareness", "Next questions"],
  },
  {
    title: "Major Purchase Decision Support",
    description:
      "Slow down before a home, car, family transition, or career move so the numbers and tradeoffs are easier to see.",
    includes: ["Scenario planning", "Cash impact", "Tradeoffs", "Decision timing"],
  },
  {
    title: "Accountability & Follow-Through",
    description:
      "Keep going after the first plan is built with check-ins, adjustments, and specific next actions.",
    includes: ["Progress reviews", "Plan adjustments", "Action steps", "Follow-through"],
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
        body="The work is organized around first real income, marriage, kids, equity compensation, major purchases, and the habits that make money easier to manage. Package pricing is not published yet."
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
            title="Structure for the actions that move your financial life forward."
            body="Each engagement is shaped around your situation. These are the areas clients often want help understanding, prioritizing, and finishing."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-line bg-ice p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
              >
                <h2 className="font-display text-3xl font-semibold text-navy">
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
            title="This works best when you want to be involved in the plan."
            body="You bring the goals, numbers, context, and decisions. Clutch Financial brings structure, education, and accountability so the next steps do not just sit there."
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
