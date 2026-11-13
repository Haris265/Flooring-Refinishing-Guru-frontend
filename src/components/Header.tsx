"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_24px_rgba(44,24,16,0.12)]" : ""
      }`}
    >
      <div className="bg-brown text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Logo variant="light" />

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-cream/85 transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BRAND.phoneHref}
              className="text-sm font-semibold tracking-wide text-gold"
            >
              {BRAND.phone}
            </a>
            <Link href="/estimate" className="btn-primary text-sm">
              Request Free Estimate
            </Link>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={BRAND.phoneHref}
              className="text-sm font-semibold text-gold"
              aria-label="Call us"
            >
              Call
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-gold/40"
            >
              <span
                className={`block h-0.5 w-5 bg-gold transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-gold transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-gold transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[68px] z-40 bg-charcoal/95 px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/estimate"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              Request Free Estimate
            </Link>
            <a href={BRAND.phoneHref} className="text-center text-gold">
              {BRAND.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
