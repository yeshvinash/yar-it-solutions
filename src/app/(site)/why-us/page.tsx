import type { Metadata } from "next";
import WhyUsPage from "@/modules/why-us/WhyUsPage";

export const metadata: Metadata = {
  title: "Why Us | YAR IT Solution",
  description:
    "Discover why businesses choose YAR IT Solution — expert team, latest tech, timely delivery, and dedicated support.",
};

export default function WhyUs() {
  return <WhyUsPage />;
}
