import AnimatedSection from "@/components/AnimatedSection";
import {
  TECHNOLOGY_GROUPS,
  TECHNOLOGY_MARQUEE,
} from "../data/technologies";

function TechBadge({ name }: { name: string }) {
  return (
    <span className="tech-badge glass inline-flex shrink-0 items-center rounded-full px-5 py-2.5 text-sm font-semibold text-navy-800">
      {name}
    </span>
  );
}

export default function HomeTechnologies() {
  const marqueeItems = [...TECHNOLOGY_MARQUEE, ...TECHNOLOGY_MARQUEE];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="orb orb-navy absolute -right-20 top-1/4 h-72 w-72 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="section-label">Tech Stack</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            Technologies{" "}
            <span className="gradient-text">We Use</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            We leverage industry-leading tools and frameworks to build secure,
            scalable, and future-ready solutions for our clients.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-12 overflow-hidden" delay={100}>
          <div className="tech-marquee relative py-2">
            <div className="tech-marquee-track flex w-max gap-4">
              {marqueeItems.map((name, index) => (
                <TechBadge key={`${name}-${index}`} name={name} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGY_GROUPS.map((group, index) => (
            <AnimatedSection
              key={group.category}
              delay={index * 80}
              className={index === 3 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="service-card glass h-full rounded-2xl p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-800">
                  {group.category}
                </h3>
                <p className="mt-2 text-sm text-muted">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-peach-100/70 px-3 py-1 text-xs font-medium text-navy-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
