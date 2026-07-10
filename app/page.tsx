import {
  ButtonLink,
  CTASection,
  contactMailto,
  PageShell,
  SectionIntro,
} from "./components";

const painPoints = [
  "You are earning money, but the system around it still feels patched together.",
  "Life is getting fuller, and the money decisions are starting to matter more.",
  "You know the basics. You want help making them part of your actual life.",
];

const steps = [
  {
    title: "Understand where you are",
    body: "We look at what is true right now: your income, spending, accounts, benefits, goals, and the decisions on your mind.",
  },
  {
    title: "Choose the next actions",
    body: "We decide what needs attention now, what can wait, and what a useful next step actually looks like.",
  },
  {
    title: "Follow through",
    body: "You leave with a small set of actions you understand and a rhythm you can come back to.",
  },
];

const whoWeHelp = [
  {
    title: "Early Career Professionals",
    theme: "Start strong with the financial basics.",
    items: [
      "First paycheck",
      "Budgeting",
      "401(k)",
      "Roth IRA",
      "HSA",
      "Investing fundamentals",
      "Compounding",
      "Building early momentum",
    ],
  },
  {
    title: "Professionals",
    theme: "Bring more structure to the financial life you are already building.",
    items: [
      "Cash flow",
      "Benefits",
      "Equity compensation",
      "Major purchases",
      "Savings habits",
      "Investment education",
      "Decision support",
      "Follow-through",
    ],
  },
  {
    title: "Growing Families",
    theme: "Make thoughtful decisions as life becomes more complex.",
    items: [
      "Marriage",
      "Kids",
      "Cash flow",
      "Home decisions",
      "529 college savings",
      "Equity compensation",
      "Major purchases",
      "Retirement savings",
      "Family financial alignment",
    ],
  },
];

function PlanningDeskVisual() {
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div className="absolute -right-12 -top-10 h-56 w-56 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-green/20 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-soft backdrop-blur sm:p-4">
        <div className="relative min-h-[34rem] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,#fffaf2_0%,#edf4fb_48%,#dce8f3_100%)] p-5 sm:p-7">
          <div className="absolute inset-x-0 top-0 h-24 bg-white/55" />
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-[#8b4a24]/10" />

          <div className="absolute left-7 top-8 w-[58%] rotate-[-3deg] rounded-2xl border border-line bg-white p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              Financial Roadmap
            </p>
            <div className="mt-5 space-y-3">
              {["Cash flow", "Benefits", "Savings", "Next action"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded border border-green/50 bg-green/10 text-[10px] font-bold text-green">
                      {index < 2 ? "✓" : ""}
                    </span>
                    <span className="text-sm font-medium text-slate">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="absolute bottom-8 left-8 w-[48%] rotate-[2deg] rounded-2xl border border-line bg-white p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              Notebook
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-navy">
              What matters next?
            </p>
            <div className="mt-5 space-y-2">
              <div className="h-2 w-11/12 rounded-full bg-cloud" />
              <div className="h-2 w-9/12 rounded-full bg-cloud" />
              <div className="h-2 w-10/12 rounded-full bg-cloud" />
            </div>
          </div>

          <div className="absolute bottom-8 right-7 w-[45%] rounded-[1.4rem] border border-line bg-navy p-4 shadow-soft">
            <div className="rounded-xl bg-white p-3">
              <div className="mb-3 grid grid-cols-4 gap-1">
                {[60, 42, 72, 54].map((width) => (
                  <div key={width} className="h-2 rounded-full bg-cloud">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-sky to-green"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-4 rounded bg-[rgba(220,232,243,0.72)]"
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs font-semibold text-cloud">
              A clear view of the numbers.
            </p>
          </div>

          <div className="absolute right-9 top-12 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-soft">
            <div className="h-16 w-16 rounded-full border-[12px] border-[#8b4a24]/20 bg-[#6f3d20]">
              <div className="mx-auto mt-3 h-6 w-7 rounded-full bg-[#f3dcc5]/80" />
            </div>
          </div>

          <div className="absolute left-[46%] top-[47%] h-3 w-40 rotate-[-24deg] rounded-full bg-navy shadow-sm">
            <span className="absolute right-0 top-[-4px] h-5 w-5 rounded-full bg-green" />
          </div>

          <div className="absolute right-10 top-[38%] w-36 rotate-[6deg] rounded-2xl border border-line bg-white p-4 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              Checklist
            </p>
            <div className="mt-4 space-y-2">
              {["401(k)", "HSA", "529"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded border border-green bg-green/15" />
                  <span className="text-xs font-semibold text-slate">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-line bg-white/90 px-4 py-2 text-xs font-semibold text-slate shadow-sm">
            Notebook • roadmap • coffee • one clear next step
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <section className="relative mx-auto grid min-h-[calc(100vh-65px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="animate-fade-up">
          <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.02] text-navy sm:text-6xl lg:text-7xl">
            Helping professionals and growing families build lasting financial
            confidence.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate">
            Build the habits, systems, and confidence to make better financial
            decisions for decades to come.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contactMailto}>
              Schedule an Introductory Consultation
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore services
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate">
            Complimentary • 30 minutes • No obligation
          </p>
          <div className="mt-7 grid max-w-2xl gap-3 text-sm font-semibold text-slate sm:grid-cols-2">
            {[
              "Practical guidance",
              "Personalized planning",
              "Accountability that keeps you moving",
              "No product sales. No commissions.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-green">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <PlanningDeskVisual />
      </section>

      <section className="border-y border-line bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-navy p-8 text-white shadow-glow sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green">
            Brand philosophy
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Bringing structure to financial uncertainty.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-cloud">
            <p>Money is rarely just about numbers.</p>
            <p>
              It is about decisions, priorities, relationships, and the future
              you want to build.
            </p>
            <p>
              Clutch Financial helps bring structure to uncertainty so you can
              move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionIntro
            eyebrow="Why clients reach out"
            title="Most people are not short on financial opinions."
            body="They need a way to sort through the noise, make a decision, and keep moving."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-line bg-ice p-6 text-lg leading-8 text-slate shadow-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Who we help"
            title="For professionals and families building their footing."
            body="Clutch Financial focuses on the years when habits, family choices, and long-term planning start to become part of everyday life."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {whoWeHelp.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <h2 className="font-display text-3xl font-semibold">
                  {group.title}
                </h2>
                <p className="mt-3 text-base font-semibold text-blue">
                  {group.theme}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-ice px-3 py-1.5 text-xs font-semibold text-slate"
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

      <section className="bg-navy px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Process"
            title="You may already know some of what you want to do."
            body="The work is turning that into clear steps you can actually follow."
            inverted
          />
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <p className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-green">
                  0{index + 1}
                </p>
                <h2 className="mt-6 font-display text-2xl font-semibold">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-cloud">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
