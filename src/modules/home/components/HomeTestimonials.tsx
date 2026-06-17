"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { TESTIMONIALS } from "../data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-accent" : "text-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const active = TESTIMONIALS[activeIndex];

  return (
    <section className="section-alt relative py-24 lg:py-32">
      <div className="orb orb-copper absolute -left-20 bottom-0 h-72 w-72 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="section-label">Testimonials</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Real feedback from businesses we&apos;ve helped transform through
            technology.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-12" delay={100}>
          <div className="glass mx-auto max-w-4xl rounded-3xl p-8 sm:p-10 lg:p-12">
            <svg
              className="h-10 w-10 text-accent/30"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621-.537-.278-1.24-.375-1.929-.311-1.804.167-3.226 1.648-3.226 3.489a3.5 3.5 0 003.5 3.5c1.073 0 2.099-.49 2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621-.537-.278-1.24-.375-1.929-.311-1.804.167-3.226 1.648-3.226 3.489a3.5 3.5 0 003.5 3.5c1.073 0 2.099-.49 2.748-1.179z" />
            </svg>

            <blockquote className="mt-6 min-h-[120px]">
              <p
                key={active.id}
                className="testimonial-enter text-lg leading-relaxed text-navy-700 sm:text-xl"
              >
                &ldquo;{active.quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-copper-600 text-sm font-bold text-white">
                  {getInitials(active.name)}
                </div>
                <div>
                  <StarRating rating={active.rating} />
                  <p className="mt-2 font-semibold text-navy-800">{active.name}</p>
                  <p className="text-sm text-muted">
                    {active.role}, {active.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View testimonial from ${item.name}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-8 bg-accent"
                        : "w-2.5 bg-border hover:bg-accent/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 80}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-2xl border p-5 text-left transition-all ${
                  index === activeIndex
                    ? "border-accent/40 bg-white/80 shadow-lg shadow-accent/5"
                    : "border-border bg-white/40 hover:border-accent/25 hover:bg-white/70"
                }`}
              >
                <StarRating rating={item.rating} />
                <p className="mt-3 line-clamp-3 text-sm text-muted">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-navy-800">{item.name}</p>
                <p className="text-xs text-muted">{item.company}</p>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
