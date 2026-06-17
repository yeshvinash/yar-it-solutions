import type { Metadata } from "next";
import ServicesPage from "@/modules/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services | YAR IT Solution",
  description:
    "Explore our IT services: custom software, web & mobile apps, IT consulting, cloud solutions, and digital marketing.",
};

export default function Services() {
  return <ServicesPage />;
}
