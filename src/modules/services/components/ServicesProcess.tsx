import AnimatedSection from "@/components/AnimatedSection";
import { PROCESS_STEPS } from "../data/services";

export default function ServicesProcess() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="section-label">Our Process</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            How We{" "}
            <span className="gradient-text">Deliver</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            A proven, collaborative approach that keeps you informed at every stage.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 100}>
              <div className="glass relative h-full rounded-2xl p-6">
                <span className="font-display text-3xl font-bold text-accent/30">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
