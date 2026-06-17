import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YAR IT Solution | Innovative IT Services & Digital Transformation",
  description:
    "YAR IT Solution provides cutting-edge technology services including custom software development, web & mobile apps, IT consulting, cloud solutions, and digital marketing for businesses of all sizes.",
  keywords: [
    "IT solutions",
    "software development",
    "web development",
    "mobile apps",
    "cloud solutions",
    "digital marketing",
    "IT consulting",
    "YAR IT Solution",
  ],
  openGraph: {
    title: "YAR IT Solution | Empowering Businesses Through Technology",
    description:
      "Tailored IT services that drive efficiency, growth, and digital transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${syne.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
