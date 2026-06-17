import PageHeader from "@/components/PageHeader";
import ServicesGrid from "./components/ServicesGrid";
import ServicesProcess from "./components/ServicesProcess";
import CTA from "@/modules/shared/components/CTA";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What We Do"
        title="Services That"
        highlight="Drive Results"
        description="We specialize in comprehensive IT solutions designed to accelerate your business growth and digital transformation. Explore our full range of services below."
      />
      <ServicesGrid />
      <ServicesProcess />
      <CTA primaryLabel="Request a Quote" />
    </>
  );
}
