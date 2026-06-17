import Link from "next/link";
import Logo from "@/components/Logo";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="bg-network absolute inset-0 opacity-60" />
      <div className="bg-grid absolute inset-0" />

      <div className="orb orb-copper animate-pulse-glow -left-32 top-1/4 h-96 w-96" />
      <div className="orb orb-navy animate-pulse-glow -right-32 bottom-1/4 h-80 w-80" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="hero-enter hero-enter-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-copper-600">
                Innovative IT Solutions
              </span>
            </div>

            <h1 className="hero-enter hero-enter-delay-2 font-display text-4xl font-bold leading-tight tracking-tight text-navy-800 sm:text-5xl lg:text-6xl">
              Empowering Businesses Through{" "}
              <span className="gradient-text">Technology</span>
            </h1>

            <p className="hero-enter hero-enter-delay-3 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              YAR IT Solution delivers cutting-edge technology services that drive
              efficiency, growth, and digital transformation for businesses of all
              sizes.
            </p>

            <div className="hero-enter hero-enter-delay-4 mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                <span>Start Your Journey</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-outline inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Explore Services
              </Link>
            </div>

            <div className="hero-enter hero-enter-delay-4 mt-12 flex flex-wrap gap-8">
              {[
                { value: "100+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-enter hero-enter-delay-3 relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-lg">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/25" />
              <div className="absolute inset-8 animate-spin-slow rounded-full border border-dashed border-navy-800/15 [animation-direction:reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass animate-float animate-border-glow relative rounded-3xl p-6 shadow-2xl shadow-navy-800/10">
                  <Logo width={320} height={120} priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
