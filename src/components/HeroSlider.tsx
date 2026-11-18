"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { BRAND } from "@/lib/constants";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    alt: "Open living space with warm hardwood flooring",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
    alt: "Modern interior with polished wood floors",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
    alt: "Bright home with refined flooring finish",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
    alt: "Luxury living room showcasing hardwood floors",
  },
] as const;

const INTERVAL_MS = 5500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = useCallback(
    (next: number) => {
      setIndex((next + SLIDES.length) % SLIDES.length);
    },
    [],
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => go(index + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [index, paused, reduceMotion, go]);

  return (
    <section
      className="hero-slider relative min-h-[75vh] overflow-hidden sm:min-h-[88vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured flooring photography"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-slide absolute inset-0 ${
            i === index ? "hero-slide-active" : ""
          } ${reduceMotion ? "" : "hero-kenburns"}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="hero-gradient absolute inset-0 z-[1]" />

      <div className="relative z-[2] mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-20 sm:min-h-[88vh] sm:pb-20 sm:pt-28 md:justify-center md:px-6 md:pb-24">
        <p className="fade-up text-xs font-semibold uppercase tracking-[0.18em] text-gold sm:tracking-[0.28em]">
          {BRAND.years}+ years of experience
        </p>
        <h1 className="fade-up font-display mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl">
          Flooring &amp; Refinishing Guru
        </h1>
        <p className="fade-up-delay mt-5 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
          {BRAND.tagline}. Beautiful floors and complete home renovation across
          Orange County.
        </p>
        <div className="fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={BRAND.phoneHref} className="btn-primary w-full sm:w-auto">
            {BRAND.ctaEstimate}
          </a>
          <a href={BRAND.phoneHref} className="btn-ghost w-full sm:w-auto">
            Call {BRAND.phone}
          </a>
        </div>
      </div>

      {!reduceMotion ? (
        <div className="absolute bottom-5 left-0 right-0 z-[3] flex items-center justify-center gap-4 px-4 md:bottom-8">
          <button
            type="button"
            className="hero-nav-btn"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
          >
            ‹
          </button>
          <div className="flex items-center gap-2" role="tablist">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}`}
                className={`hero-dot ${i === index ? "hero-dot-active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero-nav-btn"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
          >
            ›
          </button>
        </div>
      ) : null}
    </section>
  );
}
