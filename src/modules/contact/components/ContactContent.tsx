"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { CONTACT_INFO, FAQ_ITEMS } from "../data/contact";

const contactIcons = [
  "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative pb-16 lg:pb-24">
        <div className="orb orb-copper absolute right-0 top-0 h-80 w-80 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <AnimatedSection className="lg:col-span-2" delay={100}>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-accent/30"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent/20 group-hover:scale-105">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={contactIcons[index]} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-muted">{info.label}</div>
                      <div className="mt-0.5 text-sm font-medium text-navy-800">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3" delay={200}>
              <div className="glass rounded-2xl p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy-800">Message Sent!</h3>
                    <p className="mt-2 text-muted">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy-700">Full Name</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe" className="input-field" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy-700">Email Address</label>
                        <input type="email" id="email" name="email" required placeholder="john@company.com" className="input-field" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium text-navy-700">Service Interested In</label>
                      <select id="service" name="service" className="input-field">
                        <option value="">Select a service</option>
                        <option value="software">Custom Software Development</option>
                        <option value="web-mobile">Web & Mobile App Development</option>
                        <option value="consulting">IT Consulting & Strategy</option>
                        <option value="cloud">Cloud Solutions & Integration</option>
                        <option value="marketing">Digital Marketing & SEO</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy-700">Message</label>
                      <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project..." className="input-field resize-none" />
                    </div>
                    <button type="submit" className="btn-primary w-full rounded-xl py-3.5 text-sm font-semibold sm:w-auto sm:px-10">
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-alt py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-800">Common Questions</h2>
          </AnimatedSection>
          <div className="mt-10 space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AnimatedSection key={item.question} delay={index * 80}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-800">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
