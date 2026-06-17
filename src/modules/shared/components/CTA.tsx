import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

interface CTAProps {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CTA({
  primaryHref = "/contact",
  primaryLabel = "Get In Touch",
  secondaryHref = "/services",
  secondaryLabel = "View Our Services",
}: CTAProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="scale">
          <div className="section-dark relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
            <div className="bg-network absolute inset-0 opacity-20" />
            <div className="orb orb-copper absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 opacity-50" />

            <div className="relative px-8 py-16 text-center sm:px-16 lg:py-24">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark-fg sm:text-4xl lg:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-dark-muted">
                Whether you&apos;re a startup seeking IT guidance or an established
                business looking to optimize your tech environment — our team of
                experts is here to provide scalable, future-ready solutions.
              </p>
              <p className="mt-4 font-display text-xl font-semibold gradient-text-light">
                Let&apos;s connect and grow together!
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={primaryHref}
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
                >
                  <span>{primaryLabel}</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href={secondaryHref}
                  className="btn-outline-light inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
