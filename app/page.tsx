import Image from "next/image";
import {
  ButtonLink,
  CTASection,
  contactMailto,
  PageShell,
  SectionIntro,
} from "./components";

const scenarios = [
  {
    title: "You are early in your career",
    body: "The first real paychecks are coming in. You want to start well instead of winging it.",
    items: ["401(k)", "Roth IRA", "HSA", "Savings rhythm"],
  },
  {
    title: "Life is getting more complex",
    body: "Marriage, kids, a home, equity, or benefits are creating decisions you do not want to handle casually.",
    items: ["Cash flow", "529s", "Benefits", "Major purchases"],
  },
  {
    title: "You mostly need follow-through",
    body: "You know the basics. What you need is a coach to help you decide, set it up, and come back to it.",
    items: ["Accountability", "Next action", "Decision rules", "Review rhythm"],
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
      <div className="relative overflow-hidden rounded-[2rem] border border-cognac/35 bg-white/85 p-2 shadow-soft backdrop-blur">
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
    <section className="border-y border-cognac/20 bg-white px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.46fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-[1.6rem] border border-line bg-ice shadow-soft lg:max-w-sm">
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
            A note from Humair
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight text-navy sm:text-5xl">
            Knowing what to do is not the same as doing it.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">
            There is plenty of content about money. Books, podcasts, calculators,
            social media threads, and endless articles can teach you the basics.
            But a little like fitness, knowing the exercise does not mean you
            will actually do the reps.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate">
            Clutch Financial exists for the gap between knowing and acting.
            Some people need education. Some need a simple plan. Some just need
            a push to act.
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

function ActionGapSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#001028_0%,#071832_58%,#1d130d_130%)] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <h2 className="max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            The Cost of Waiting
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cloud">
            Here is a simple 529 example. Invest $10,000 when a child is born,
            add $100 each month, and assume a hypothetical 8% annual return. By
            age 18, that could grow to about $90,000.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cloud">
            Wait until age 2 to start, with the same deposit and monthly
            contributions, and the account could be closer to $74,500. That
            two-year delay costs roughly $15,500.
          </p>
          <p className="mt-5 max-w-2xl text-xs leading-6 text-cloud/75">
            Hypothetical example for education only. Actual returns vary and are
            not guaranteed.
          </p>
        </div>

        <div className="rounded-[2rem] border border-cognac/30 bg-white/[0.06] p-5 shadow-glow backdrop-blur sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cognac">
              Same plan. Later start.
            </p>
            <p className="rounded-full border border-cognac/30 px-3 py-1.5 text-xs font-semibold text-cloud">
              $10k + $100/mo · 8% · age 18
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-5">
            <div className="grid gap-6">
              <div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-green">
                      Start at birth
                    </p>
                    <p className="mt-1 text-xs text-cloud/75">
                      18 years of growth
                    </p>
                  </div>
                  <p className="font-display text-4xl font-semibold text-white">
                    $90.0k
                  </p>
                </div>
                <div className="mt-3 h-4 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-green" />
                </div>
              </div>

              <div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-blue">
                      Start at age 2
                    </p>
                    <p className="mt-1 text-xs text-cloud/75">
                      16 years of growth
                    </p>
                  </div>
                  <p className="font-display text-4xl font-semibold text-white">
                    $74.5k
                  </p>
                </div>
                <div className="mt-3 flex h-4 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[83%] bg-blue" />
                  <div className="h-full flex-1 bg-[repeating-linear-gradient(135deg,#d0a06f_0,#d0a06f_6px,#8f5d35_6px,#8f5d35_12px)]" />
                </div>
                <div className="mt-2 flex justify-end">
                  <span className="rounded-full bg-cognac/15 px-3 py-1 text-xs font-semibold text-cognac">
                    missed growth: ~$15.5k
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[1.4rem] border border-[#f36b4f]/40 bg-[#1b0d0a]/75 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f36b4f]">
              Potential lost growth
            </p>
            <p className="mt-2 font-display text-5xl font-semibold text-white">
              -$15,500
            </p>
            <p className="mt-3 text-base leading-7 text-cloud">
              Money that may not be there for college simply because the plan
              started two years later.
            </p>
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
            Helping you make confident financial decisions.
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

      <ActionGapSection />

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

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Who we help"
            title="A few moments where coaching helps."
            body="Not every money question needs a coach. These are the moments where a clear conversation can move things forward."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {scenarios.map((group) => (
              <article
                key={group.title}
                className="border-t border-line bg-white py-6"
              >
                <h2 className="font-display text-3xl font-semibold">
                  {group.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate">
                  {group.body}
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
