import type { Metadata } from "next";
import ContactPage from "@/modules/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | YAR IT Solution",
  description:
    "Get in touch with YAR IT Solution. Request a consultation for custom software, cloud, consulting, and more.",
};

export default function Contact() {
  return <ContactPage />;
}
