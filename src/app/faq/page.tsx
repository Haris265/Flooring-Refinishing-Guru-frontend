import type { Metadata } from "next";

import { FaqAccordion } from "@/components/FaqAccordion";
import { getFaqs } from "@/lib/api";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about flooring estimates, services, cost, and timing from Flooring & Refinishing Guru.",
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <>
      <section className="bg-brown px-4 py-16 text-cream md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Helpful answers
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
            Flooring questions
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80 leading-relaxed">
            Estimates, service areas, materials, and timing — or call{" "}
            <a href={BRAND.phoneHref} className="text-gold">
              {BRAND.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion faqs={faqs} />
          <div className="mt-10 border border-gold/30 bg-sand/40 p-6 text-center">
            <p className="font-display text-2xl text-brown">
              Still have questions?
            </p>
            <a
              href={BRAND.phoneHref}
              className="btn-primary mt-5 inline-flex"
            >
              {BRAND.ctaEstimate}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
