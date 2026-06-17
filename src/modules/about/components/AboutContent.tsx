import AnimatedSection from "@/components/AnimatedSection";
import Logo from "@/components/Logo";
import {
  AUDIENCE_SEGMENTS,
  COMPANY_VALUES,
  MISSION,
  MILESTONES,
  VISION,
} from "../data/about";

export default function AboutContent() {
  return (
    <>
      <section className="relative py-16 lg:py-24">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <AnimatedSection animation="scale">
              <div className="glass animate-gradient rounded-3xl bg-gradient-to-br from-accent/15 via-peach-100/30 to-navy-800/10 p-1">
                <div className="rounded-[22px] bg-cream-50/95 p-8 lg:p-10">
                  <Logo width={240} height={84} />
                  <blockquote className="mt-8 border-l-2 border-accent/50 pl-6">
                    <p className="text-lg leading-relaxed text-navy-700 italic">&ldquo;{MISSION}&rdquo;</p>
                  </blockquote>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {AUDIENCE_SEGMENTS.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-border bg-white/60 p-4 transition-colors hover:border-accent/30"
                      >
                        <div className="text-sm font-semibold text-navy-800">{item.label}</div>
                        <div className="mt-1 text-xs text-muted">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display text-2xl font-bold text-navy-800 sm:text-3xl">
                A Dynamic & Innovative IT Company
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                YAR IT Solution provides cutting-edge technology solutions for businesses
                of all sizes. Whether you&apos;re a startup seeking IT guidance or an
                established business looking to optimize your tech environment, our team
                of experts is here to help.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Join our community to stay updated on industry trends, company news, and
                opportunities for collaboration. We believe in empowering businesses
                through technology — let&apos;s connect and grow together!
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-white/50 p-6">
                <h3 className="font-display text-lg font-semibold text-navy-800">Our Vision</h3>
                <p className="mt-2 text-muted">{VISION}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-alt py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="section-label">Our Values</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-800">What We Stand For</h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY_VALUES.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 80}>
                <div className="glass h-full rounded-2xl p-6">
                  <div className="mb-3 h-1.5 w-8 rounded-full bg-gradient-to-r from-accent to-navy-800" />
                  <h3 className="font-display font-semibold text-navy-800">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="section-label">Our Journey</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-800">Company Milestones</h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 100}>
                <div className="relative rounded-2xl border border-border bg-white/50 p-6">
                  <span className="font-display text-2xl font-bold text-accent">{milestone.year}</span>
                  <h3 className="mt-2 font-semibold text-navy-800">{milestone.title}</h3>
                  <p className="mt-2 text-sm text-muted">{milestone.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
