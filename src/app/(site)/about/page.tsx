import type { Metadata } from "next";
import AboutPage from "@/modules/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | YAR IT Solution",
  description:
    "Learn about YAR IT Solution — our mission, values, and commitment to empowering businesses through technology.",
};

export default function About() {
  return <AboutPage />;
}
