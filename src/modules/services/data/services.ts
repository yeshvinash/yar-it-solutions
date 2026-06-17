export type ServiceId =
  | "software"
  | "web-mobile"
  | "consulting"
  | "cloud"
  | "marketing";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  color: string;
}

export const SERVICES: Service[] = [
  {
    id: "software",
    title: "Custom Software Development",
    description:
      "Tailored software solutions built from the ground up to meet your unique business requirements and workflows.",
    longDescription:
      "We design and build bespoke applications that fit your exact processes — from internal tools and ERP integrations to customer-facing platforms. Our agile delivery model ensures you see progress early and often.",
    features: [
      "Requirements analysis & architecture",
      "API design & third-party integrations",
      "Legacy system modernization",
      "Ongoing maintenance & support",
    ],
    color: "text-accent",
  },
  {
    id: "web-mobile",
    title: "Web & Mobile App Development",
    description:
      "Beautiful, responsive web applications and native mobile apps that deliver exceptional user experiences.",
    longDescription:
      "From progressive web apps to iOS and Android, we craft interfaces that users love. Performance, accessibility, and brand consistency are built into every screen we ship.",
    features: [
      "Responsive & mobile-first design",
      "Cross-platform mobile apps",
      "Performance optimization",
      "App store deployment",
    ],
    color: "text-navy-700",
  },
  {
    id: "consulting",
    title: "IT Consulting & Strategy",
    description:
      "Expert guidance to align your technology investments with business goals and drive digital transformation.",
    longDescription:
      "Our consultants work alongside your leadership team to assess current systems, identify gaps, and roadmap a technology strategy that supports long-term growth and competitive advantage.",
    features: [
      "Technology audits & assessments",
      "Digital transformation roadmaps",
      "Vendor selection & RFP support",
      "IT governance & best practices",
    ],
    color: "text-copper-400",
  },
  {
    id: "cloud",
    title: "Cloud Solutions & Integration",
    description:
      "Seamless cloud migration, infrastructure setup, and system integration for scalable, future-ready operations.",
    longDescription:
      "Move to the cloud with confidence. We handle migration planning, infrastructure as code, DevOps pipelines, and multi-cloud integrations so your systems scale reliably.",
    features: [
      "AWS, Azure & GCP migrations",
      "CI/CD pipeline setup",
      "Microservices architecture",
      "24/7 monitoring & alerting",
    ],
    color: "text-accent",
  },
  {
    id: "marketing",
    title: "Digital Marketing & SEO",
    description:
      "Data-driven marketing strategies and SEO optimization to boost your online presence and reach your audience.",
    longDescription:
      "Grow your digital footprint with campaigns backed by analytics. We combine technical SEO, content strategy, and paid media to drive qualified traffic and measurable conversions.",
    features: [
      "Technical SEO audits",
      "Content & social media strategy",
      "PPC & paid campaign management",
      "Analytics & conversion tracking",
    ],
    color: "text-navy-600",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "We learn about your business goals, challenges, and existing technology landscape.",
  },
  {
    step: "02",
    title: "Plan",
    description: "We define scope, architecture, timelines, and success metrics together.",
  },
  {
    step: "03",
    title: "Build",
    description: "Agile sprints deliver working software with regular demos and feedback loops.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy, monitor, and provide ongoing support to keep you running smoothly.",
  },
];
