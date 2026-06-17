import PageHeader from "@/components/PageHeader";
import AboutContent from "./components/AboutContent";
import CTA from "@/modules/shared/components/CTA";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Transforming Businesses Through"
        highlight="Technology"
        description="YAR IT Solution is committed to delivering excellence through innovative approaches, leveraging the latest technologies to meet the unique needs of our clients."
      />
      <AboutContent />
      <CTA />
    </>
  );
}
