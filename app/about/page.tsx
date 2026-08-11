import Image from "next/image";
import {
  ButtonLink,
  contactMailto,
  CTASection,
  PageHero,
  PageShell,
} from "../components";

const principles = [
  "Make the next step clear.",
  "Build systems people can actually use.",
  "Keep the conversation calm and judgment-free.",
  "Focus on follow-through, not theory.",
];

const focusAreas = [
  "Household cash flow",
  "529 college savings",
  "Roth IRA and HSA decisions",
  "401(k) habits",
  "Equity compensation questions",
  "Long-term planning actions",
];

const credentials = [
  "Ramsey Financial Coach Certification",
  "Finance undergraduate background",
  "MBA",
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Humair"
        title="Practical financial coaching from someone who enjoys helping people get organized."
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-ice shadow-soft lg:max-w-[29rem]">
            <Image
              src="/images/humair-khan-about-portrait.jpg"
              alt="Humair Khan, founder of Clutch Financial"
              width={1570}
              height={1903}
              priority
              className="aspect-[4/4.35] w-full object-cover object-[50%_44%]"
            />
            <div className="border-t border-line bg-white p-5">
              <p className="text-sm font-semibold text-navy">Humair Khan</p>
              <div className="mt-3 space-y-2">
                {credentials.map((credential) => (
                  <p
                    key={credential}
                    className="flex items-center gap-2 text-sm leading-6 text-slate"
                  >
                    <span className="text-green">✓</span>
                    <span>{credential}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate">
            <p>
              Humair started Clutch Financial after years of building his own
              financial systems, studying finance, earning an MBA, completing
              the Ramsey Financial Coach Certification, and helping family and
              friends talk through the choices in front of them.
            </p>
            <p>
              Sometimes that meant cash flow. Sometimes it meant benefits, Roth
              IRAs, HSAs, 529s, equity questions, or a major purchase. The
              pattern was usually the same: people did not need a lecture. They
              needed structure, a little education, and a clear next action.
            </p>
            <p>
              Those conversations became the reason Clutch Financial exists.
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
              There are no secret strategies here. The work is learning what
              matters, making a decision, and building a rhythm you can keep.
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
