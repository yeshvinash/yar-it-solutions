import PageHeader from "@/components/PageHeader";
import ContactContent from "./components/ContactContent";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact Us"
        title="Let's Start a"
        highlight="Conversation"
        description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />
      <ContactContent />
    </>
  );
}
