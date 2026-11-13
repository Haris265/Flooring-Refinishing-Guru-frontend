import type { Metadata } from "next";

import { EstimateForm } from "@/components/EstimateForm";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free In-Home Estimate",
  description:
    "Request a free flooring and renovation estimate from Flooring & Refinishing Guru in Orange County.",
};

export default function EstimatePage() {
  return (
    <div className="wood-grain">
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
          Free in-home estimates
        </p>
        <h1 className="mt-3 font-display text-5xl text-brown md:text-6xl">
          Tell us about your project
        </h1>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Share your ZIP code, rooms, materials, and timing. {BRAND.contactName}{" "}
          will review your request and contact you to schedule a free estimate.
          Prefer to talk now? Call{" "}
          <a href={BRAND.phoneHref} className="font-semibold text-brown">
            {BRAND.phone}
          </a>
          .
        </p>

        <div className="mt-10 border border-brown/10 bg-white/90 p-6 md:p-8">
          <EstimateForm />
        </div>
      </section>
    </div>
  );
}
