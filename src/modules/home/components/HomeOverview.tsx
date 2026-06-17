import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { SERVICES } from "@/modules/services/data/services";
import { ServiceIcon } from "@/modules/services/components/ServiceIcon";

const QUICK_LINKS = [
  {
    href: "/about",
    title: "About Us",
    description: "Learn about our mission, values, and the team behind YAR IT Solution.",
    label: "Our Story",
  },
  {
    href: "/why-us",
    title: "Why Choose Us",
    description: "Discover what sets us apart — expertise, innovation, and dedicated support.",
    label: "Our Advantage",
  },
  {
    href: "/contact",
    title: "Get In Touch",
    description: "Ready to start your project? Reach out and let's discuss your goals.",
    label: "Contact Us",
  },
];

export default function HomeOverview() {
  return (
    <>
      <section className="section-alt relative py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="section-label">What We Do</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
              Comprehensive IT{" "}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              From custom software to cloud solutions — we cover every aspect of
              your digital transformation journey.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 3).map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <div className="service-card glass h-full rounded-2xl p-6">
                  <div className={`service-icon mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-peach-100/80 ${service.color}`}>
                    <ServiceIcon id={service.id} className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy-800">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Link href="/services" className="btn-outline inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold">
              View All Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="section-label">Explore</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
              Learn More About{" "}
              <span className="gradient-text">YAR IT</span>
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {QUICK_LINKS.map((link, index) => (
              <AnimatedSection key={link.href} delay={index * 100}>
                <Link
                  href={link.href}
                  className="group glass flex h-full flex-col rounded-2xl p-8 transition-all hover:border-accent/30"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{link.label}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy-800 group-hover:text-accent transition-colors">
                    {link.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted">{link.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read more
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
