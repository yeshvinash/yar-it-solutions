import Link from "next/link";
import { NAV_LINKS } from "@/modules/shared/constants/navigation";

export default function NotFoundPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24 pt-32">
      <div className="bg-network absolute inset-0 opacity-50" />
      <div className="bg-grid absolute inset-0" />
      <div className="orb orb-copper animate-pulse-glow -left-32 top-1/4 h-80 w-80 opacity-40" />
      <div className="orb orb-navy animate-pulse-glow -right-32 bottom-1/4 h-72 w-72 opacity-30" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="section-label">Error 404</p>

        <h1 className="mt-4 font-display text-8xl font-bold tracking-tight sm:text-9xl">
          <span className="gradient-text">404</span>
        </h1>

        <h2 className="mt-6 font-display text-2xl font-bold text-navy-800 sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            <span>Back to Home</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="btn-outline inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-14">
          <p className="text-sm font-medium text-navy-700">Popular pages</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {NAV_LINKS.filter((link) => link.href !== "/").map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="glass inline-flex rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-accent/30 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
