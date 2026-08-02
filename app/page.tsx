import Image from "next/image";
import {
  ButtonLink,
  CTASection,
  contactMailto,
  PageShell,
  SectionIntro,
} from "./components";

const painPoints = [
  "Your money is moving, but the system around it feels patched together.",
  "The decisions are getting bigger: home, kids, benefits, equity, savings.",
  "You want someone practical to help you choose the next right step.",
];

const steps = [
  {
    title: "Get the picture",
    body: "Income, spending, accounts, goals, and the decision that has been sitting in the background.",
  },
  {
    title: "Build the system",
    body: "A practical rhythm for cash flow, savings, benefits, and the actions that matter now.",
  },
  {
    title: "Follow through",
    body: "Clear next steps, accountability, and a way to keep coming back to the plan.",
  },
];

const whoWeHelp = [
  {
    title: "Early Career Professionals",
    theme: "First paycheck, 401(k), Roth IRA, HSA, saving habits.",
    items: ["First paycheck", "401(k)", "Roth IRA", "HSA"],
  },
  {
    title: "Professionals",
    theme: "Cash flow, benefits, equity questions, major purchases.",
    items: ["Cash flow", "Benefits", "Equity", "Big decisions"],
  },
  {
    title: "Growing Families",
    theme: "Marriage, kids, home choices, 529s, family priorities.",
    items: ["Family cash flow", "529s", "Home choices", "Priorities"],
  },
];

const systemMap = [
  "Cash flow",
  "Savings",
  "Benefits",
  "Debt",
  "Investing basics",
  "Next decision",
];

function HeroWorkspaceImage() {
  return (
    <div className="relative animate-fade-up lg:translate-x-7 lg:scale-[1.04] [animation-delay:120ms]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-2 shadow-soft backdrop-blur">
        <Image
          src="/images/clutch-financial-hero-workspace.png"
          alt="Financial planning workspace with a flat white, financial roadmap, next steps checklist, and laptop spreadsheet."
          width={1536}
          height={1024}
          priority
          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 90vw, 100vw"
          className="h-auto w-full rounded-[1.6rem] object-contain"
        />
      </div>
    </div>
  );
}

function FounderSnapshot() {
  return (
    <section className="border-y border-line bg-white px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-ice shadow-soft">
          <Image
            src="/images/humair-khan-headshot.jpg"
            alt="Humair Khan, founder of Clutch Financial"
            width={1707}
            height={1842}
            className="aspect-[4/4.2] w-full object-cover object-[50%_38%]"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Meet Humair
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-navy sm:text-5xl">
            A real person helping you turn money questions into clear next
            steps.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
            Clutch Financial started the way a lot of useful things start:
            helping family and friends sort through real decisions. The work is
            calm, practical, and built around habits you can actually keep.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/about" variant="secondary">
              About Humair
            </ButtonLink>
            <ButtonLink href={contactMailto}>
              Start the conversation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemVisual() {
  return (
    <div className="rounded-[2rem] border border-line bg-white p-5 shadow-soft sm:p-6">
      <div className="rounded-[1.5rem] bg-ice p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {systemMap.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span className="text-sm font-semibold text-navy">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-navy px-5 py-4 text-white">
          <p className="text-sm font-semibold text-green">Output</p>
          <p className="mt-1 text-xl font-semibold">
            A plan you understand, with fewer loose ends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <section className="relative mx-auto grid min-h-[calc(100vh-65px)] max-w-[90rem] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[0.98fr_1.02fr] lg:py-20">
        <div className="animate-fade-up">
          <h1 className="font-display max-w-[42rem] text-5xl font-semibold leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
            Helping professionals and growing families make confident financial
            decisions.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate">
            Build the habits and systems that help you make confident financial
            decisions for years to come.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={contactMailto}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
            >
              Schedule an Introductory Consultation
            </a>
            <ButtonLink href="/services" variant="secondary">
              Explore services
            </ButtonLink>
          </div>
          <div className="mt-5 grid max-w-2xl gap-x-5 gap-y-2 text-xs font-semibold text-slate sm:grid-cols-2">
            {[
              "Complimentary consultation",
              "No product sales",
              "No pressure",
              "Personalized guidance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-green">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroWorkspaceImage />
      </section>

      <FounderSnapshot />

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionIntro
            eyebrow="The coaching system"
            title="Bring the moving pieces into one clear view."
            body="Most people do not need more random tips. They need a simple way to see what matters, choose a priority, and act."
          />
          <SystemVisual />
        </div>
      </section>

      <section className="border-y border-line bg-white px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point}
              className="rounded-3xl border border-line bg-ice p-6 text-base leading-7 text-slate shadow-sm"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Who we help"
            title="For people building real life while trying to make smart decisions."
            body="Early momentum matters. So does having a system that still works when life gets busier."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {whoWeHelp.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-line bg-white p-6 shadow-sm"
              >
                <h2 className="font-display text-3xl font-semibold">
                  {group.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate">
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
