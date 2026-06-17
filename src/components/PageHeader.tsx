import AnimatedSection from "./AnimatedSection";

interface PageHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function PageHeader({
  label,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="bg-network absolute inset-0 opacity-50" />
      <div className="bg-grid absolute inset-0" />
      <div className="orb orb-copper absolute -right-20 top-0 h-72 w-72 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="section-label">{label}</span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy-800 sm:text-5xl lg:text-6xl">
            {title}{" "}
            {highlight && (
              <span className="gradient-text">{highlight}</span>
            )}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{description}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
