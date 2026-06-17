import Link from "next/link";
import Logo from "@/components/Logo";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
} from "@/modules/shared/constants/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark relative border-t border-white/8">
      <div className="bg-network absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block rounded-xl bg-cream-50/95 p-3 transition-opacity hover:opacity-90"
            >
              <Logo width={160} height={52} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dark-muted">
              Empowering businesses through innovative technology solutions.
              Delivering excellence, driving growth.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-dark-fg">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-muted transition-colors hover:text-coral-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-dark-fg">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-muted transition-colors hover:text-coral-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-dark-fg">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-dark-muted">
              Stay updated on industry trends and opportunities.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-dark-fg placeholder:text-dark-muted/60 outline-none focus:border-accent/50"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-copper-500 to-copper-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-dark-muted">
            &copy; {year} YAR IT Solution. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-dark-muted transition-colors hover:text-coral-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-dark-muted transition-colors hover:text-coral-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
