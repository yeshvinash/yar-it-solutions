import AnimatedSection from "@/components/AnimatedSection";
import { SERVICES } from "../data/services";
import { ServiceIcon } from "./ServiceIcon";

export default function ServicesGrid() {
  return (
    <section className="section-alt relative py-24 lg:py-32">
      <div className="orb orb-navy absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 80}>
              <div
                id={service.id}
                className="service-card glass scroll-mt-32 rounded-2xl p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <div className={`service-icon mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-peach-100/80 ${service.color}`}>
                      <ServiceIcon id={service.id} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-navy-800">{service.title}</h2>
                    <p className="mt-3 text-muted">{service.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="leading-relaxed text-navy-700">{service.longDescription}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
