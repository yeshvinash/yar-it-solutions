import AnimatedSection from "@/components/AnimatedSection";
import { COMMITMENTS, REASONS, STATS } from "../data/why-us";

const reasonIcons = [
  "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  "M16.712 4.33a9.027 9.027 0 011.823 1.476c5.891 5.891 5.891 15.437 0 21.328a9.027 9.027 0 01-1.823 1.476M4.33 16.712a9.027 9.027 0 01-1.476-1.823c-5.891-5.891-5.891-15.437 0-21.328a9.027 9.027 0 011.476-1.823M12 2.25v19.5",
  "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
];

export default function WhyUsContent() {
  return (
    <>
      <section className="section-alt py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 80}>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="font-display text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24">
        <div className="orb orb-copper absolute -left-20 top-1/3 h-72 w-72 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 80}>
                <div className="group flex h-full gap-4 rounded-2xl border border-border bg-white/50 p-6 transition-all hover:border-accent/25 hover:bg-white/80">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-navy-800/8 text-accent transition-all group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={reasonIcons[index]} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy-800">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{reason.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="section-label">Our Commitment</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-800">Built on Trust</h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COMMITMENTS.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="glass h-full rounded-2xl p-8">
                  <h3 className="font-display text-lg font-semibold text-navy-800">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
