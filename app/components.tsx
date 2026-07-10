import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const contactEmail = "clutchfinancialcoaching@gmail.com";
export const contactMailto = `mailto:${contactEmail}?subject=Introductory%20Consultation`;

export const serviceHighlights = [
  {
    title: "Financial Foundations",
    body: "Build a simple base around budgeting, saving, benefits, and the early habits that quietly compound.",
  },
  {
    title: "Family Money Decisions",
    body: "Talk through marriage, kids, cash flow, home choices, college savings, and the priorities behind them.",
  },
  {
    title: "Equity And Major Purchases",
    body: "Slow down around equity, big purchases, and choices that are easier to make with a clearer picture.",
  },
  {
    title: "Follow-Through",
    body: "Turn good intentions into a few clear actions, then keep coming back to them.",
  },
];

export const faqs = [
  {
    question: "What is financial coaching?",
    answer:
      "Financial coaching is practical education, structure, and accountability for the money decisions you are trying to make well. It can include budgeting, cash flow, 401(k), Roth IRA, HSA, 529, equity compensation questions, major purchase planning, and follow-through.",
  },
  {
    question: "Is this the same as financial planning?",
    answer:
      "No. Clutch Financial provides coaching and education only. It does not provide investment, tax, legal, insurance, or accounting advice. When a question requires a licensed professional, the coaching process can help you identify that need.",
  },
  {
    question: "Who is coaching best for?",
    answer:
      "Coaching is designed for early-career professionals, professionals, couples, and growing families who want more structure around their money and the decisions ahead.",
  },
  {
    question: "Do you publish package pricing?",
    answer:
      "Not yet. Clutch Financial starts with an introductory consultation so the first conversation can focus on fit, priorities, and what kind of support would actually be useful.",
  },
  {
    question: "Will I be judged for past money decisions?",
    answer:
      "No. The work is calm and practical. The point is not to pick apart the past. The point is to understand where you are and build from there.",
  },
  {
    question: "Can couples work with Clutch Financial together?",
    answer:
      "Yes. Coaching can help couples talk through household cash flow, family decisions, savings, major purchases, and the money habits they want to build together.",
  },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/clutch-financial-logo-display.png"
      alt="Clutch Financial"
      width={853}
      height={309}
      priority
      className={
        compact
          ? "h-8 w-auto rounded-md sm:h-10"
          : "h-12 w-auto rounded-md"
      }
    />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const classes = {
    primary:
      "bg-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-navy",
    secondary:
      "border border-line bg-white text-navy hover:-translate-y-0.5 hover:border-sky hover:text-blue",
    light:
      "bg-white text-navy shadow-soft hover:-translate-y-0.5 hover:bg-cloud",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${classes}`}
    >
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Clutch Financial home">
          <Logo compact />
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-blue"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href={contactMailto}
          className="hidden rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-blue sm:inline-flex"
        >
          Schedule an Introductory Consultation
        </Link>
      </nav>
      <div className="border-t border-line/70 px-5 py-2 sm:px-8 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto whitespace-nowrap text-xs font-semibold text-slate">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-1 transition hover:bg-cloud hover:text-blue"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-7 text-cloud">
            Financial coaching and education for professionals and growing
            families who want steadier habits, clearer decisions, and support
            following through.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-cloud sm:grid-cols-4 lg:w-[38rem]">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6">
        <p className="max-w-4xl text-xs leading-6 text-cloud">
          Disclaimer: Clutch Financial provides financial coaching and education
          only. It does not provide investment, tax, legal, insurance, or
          accounting advice.
        </p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-hidden bg-ice text-navy">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
          inverted ? "text-green" : "text-blue"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-semibold leading-tight sm:text-5xl ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-8 sm:text-lg ${
          inverted ? "text-cloud" : "text-slate"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-24">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="animate-fade-up max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue shadow-sm">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] text-navy sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate">{body}</p>
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-navy p-6 text-white shadow-glow sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green">
            Introductory consultation
          </p>
          <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            You do not have to sort through every money decision by yourself.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud">
            A complimentary 30-minute conversation gives us room to talk through
            what is on your mind and decide whether coaching is the right kind
            of help.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white p-6 text-navy">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">
            Complimentary conversation
          </p>
          <p className="mt-4 font-display text-3xl font-semibold leading-tight">
            Schedule an Introductory Consultation
          </p>
          <p className="mt-4 text-sm leading-7 text-slate">
            Bring the questions, decisions, or loose pieces you want help
            organizing. We will start there.
          </p>
          <div className="mt-6">
            <ButtonLink href={contactMailto}>
              Schedule an Introductory Consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQList({ limit }: { limit?: number }) {
  const visibleFaqs = typeof limit === "number" ? faqs.slice(0, limit) : faqs;

  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
      {visibleFaqs.map((faq) => (
        <details key={faq.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-xl font-semibold text-navy sm:text-2xl">
            {faq.question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cloud text-lg text-blue transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
