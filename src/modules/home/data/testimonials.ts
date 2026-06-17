export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "YAR IT Solution transformed our outdated systems into a modern, scalable platform. Their team understood our business from day one and delivered ahead of schedule.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "GrowthBridge Inc.",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "From cloud migration to ongoing support, they've been an invaluable partner. Our infrastructure is faster, more secure, and easier to manage than ever before.",
    name: "James Okonkwo",
    role: "CTO",
    company: "NovaRetail Group",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The mobile app they built exceeded our expectations. User engagement is up 40% and the codebase is clean enough for our internal team to maintain easily.",
    name: "Priya Sharma",
    role: "Product Director",
    company: "HealthSync Labs",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Their IT consulting helped us align technology with our five-year growth plan. Clear communication, honest timelines, and results that speak for themselves.",
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Atlas Logistics",
    rating: 5,
  },
];
