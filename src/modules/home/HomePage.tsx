import HomeHero from "./components/HomeHero";
import HomeOverview from "./components/HomeOverview";
import HomeTechnologies from "./components/HomeTechnologies";
import HomeTestimonials from "./components/HomeTestimonials";
import CTA from "@/modules/shared/components/CTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeOverview />
      <HomeTechnologies />
      <HomeTestimonials />
      <CTA />
    </>
  );
}
