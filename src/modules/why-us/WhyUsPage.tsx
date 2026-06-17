import PageHeader from "@/components/PageHeader";
import WhyUsContent from "./components/WhyUsContent";
import CTA from "@/modules/shared/components/CTA";

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        label="Why Choose Us"
        title="The"
        highlight="YAR IT Advantage"
        description="We are committed to delivering excellence through innovative approaches, leveraging the latest technologies to meet the unique needs of our clients."
      />
      <WhyUsContent />
      <CTA primaryLabel="Work With Us" />
    </>
  );
}
