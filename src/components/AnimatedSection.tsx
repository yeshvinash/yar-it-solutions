"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "scale";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const baseClass = animation === "scale" ? "reveal-scale" : "reveal";
  const delayClass =
    delay > 0 ? `delay-${Math.min(delay, 500)}` : "";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${delayClass} ${className}`}
      style={delay > 0 && delay <= 500 ? undefined : delay > 500 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
