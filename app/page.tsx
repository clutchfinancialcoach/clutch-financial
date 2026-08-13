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
  {
    title: "Cash flow",
    body: "See what comes in, goes out, and gets missed.",
    tag: "Now",
  },
  {
    title: "Benefits",
    body: "Sort through 401(k), HSA, Roth IRA, and open questions.",
    tag: "Sort",
  },
  {
    title: "Savings rhythm",
    body: "Make the habit simple enough to repeat.",
    tag: "Build",
  },
  {
    title: "Next decision",
    body: "Choose what matters most and what can wait.",
    tag: "Choose",
  },
  {
    title: "Follow-through",
    body: "Leave with a short action list and review rhythm.",
    tag: "Move",
  },
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
          <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-slate">
            Ramsey Financial Coach Certification · Finance background · MBA
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
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_15%_20%,rgba(11,99,206,0.12),transparent_28%),radial-gradient(circle_at_92%_18%,rgba(121,191,67,0.12),transparent_24%),linear-gradient(135deg,#ffffff_0%,#f4f9ff_100%)] p-5 shadow-soft sm:p-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Financial roadmap
          </p>
          <h3 className="mt-2 max-w-md font-display text-3xl font-semibold leading-tight text-navy">
            From loose pieces to a clear next step.
          </h3>
        </div>
        <p className="w-fit rounded-full border border-line bg-white/85 px-3 py-2 text-xs font-semibold text-slate">
          Coaching preview
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.5rem] border border-line bg-white/85 p-5 backdrop-blur">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-line shadow-[0_0_0_3px_#eef5fb]" />
              <span className="h-1.5 w-1.5 rounded-full bg-line shadow-[0_0_0_3px_#eef5fb]" />
              <span className="h-1.5 w-1.5 rounded-full bg-line shadow-[0_0_0_3px_#eef5fb]" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              Plan checklist
            </p>
          </div>

          <div className="grid gap-3">
            {systemMap.map((item, index) => (
              <div
                key={item.title}
                className="grid animate-roadmap-item grid-cols-[1.75rem_1fr_auto] items-center gap-3 rounded-2xl border border-line/90 bg-white px-3 py-3 opacity-0"
                style={{ animationDelay: `${180 + index * 420}ms` }}
              >
                <span
                  className="flex h-7 w-7 animate-roadmap-check items-center justify-center rounded-lg border border-green/40 bg-green/10 text-sm font-black text-white"
                  style={{ animationDelay: `${620 + index * 420}ms` }}
                >
                  ✓
                </span>
                <span>
                  <span className="block text-sm font-semibold leading-tight text-navy">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate">
                    {item.body}
                  </span>
                </span>
                <span className="hidden rounded-full bg-ice px-2.5 py-1 text-[0.68rem] font-bold text-blue sm:inline">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[1.5rem] border border-line bg-white/85 p-5 backdrop-blur">
          <div className="relative h-36 overflow-hidden rounded-[1.1rem] border border-line bg-[linear-gradient(90deg,rgba(220,232,243,0.8)_1px,transparent_1px),linear-gradient(0deg,rgba(220,232,243,0.8)_1px,transparent_1px),#ffffff] bg-[length:42px_34px]">
            <svg
              viewBox="0 0 240 76"
              fill="none"
              aria-hidden="true"
              className="absolute inset-x-5 bottom-7 h-20 w-[calc(100%-2.5rem)] overflow-visible"
            >
              <path
                d="M2 63 C45 58 58 42 88 45 C122 49 131 20 162 24 C190 27 203 13 238 9"
                stroke="#0b63ce"
                strokeWidth="5"
                strokeLinecap="round"
                className="animate-roadmap-line"
              />
              <path
                d="M2 63 C45 58 58 42 88 45 C122 49 131 20 162 24 C190 27 203 13 238 9"
                stroke="#79bf43"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-roadmap-line"
              />
            </svg>
          </div>

          <div className="rounded-[1.1rem] bg-navy p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
              Outcome
            </p>
            <p className="mt-2 font-display text-2xl font-semibold leading-tight">
              A plan you understand, not a pile of tabs.
            </p>
          </div>
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
            title="Get the picture. Build the system. Follow through."
            body="Most people do not need more random tips. They need a simple way to see what matters and choose the next step."
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

      <CTASection />
    </PageShell>
  );
}
