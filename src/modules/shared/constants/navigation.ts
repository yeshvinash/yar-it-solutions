export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "Software Development", href: "/services" },
  { label: "Web & Mobile Apps", href: "/services" },
  { label: "IT Consulting", href: "/services" },
  { label: "Cloud Solutions", href: "/services" },
] as const;
