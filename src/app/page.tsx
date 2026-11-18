import type { Metadata } from "next";
import Link from "next/link";

import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroSlider } from "@/components/HeroSlider";
import { Reveal } from "@/components/Reveal";
import { getFaqs, getServices } from "@/lib/api";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: `${BRAND.shortName} | Orange County Flooring & Renovation`,
  },
  description: `${BRAND.tagline}. Hardwood, vinyl, tile, carpet, and complete home renovation across Orange County. Call for an in-home free estimate.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${BRAND.shortName} | Orange County Flooring & Renovation`,
    description: `${BRAND.tagline}. Flooring installation, refinishing, and renovation in Orange County.`,
    url: "/",
  },
};

export default async function HomePage() {
  const [services, faqs] = await Promise.all([getServices(), getFaqs()]);
  const featured = services.filter((s) => s.is_featured).slice(0, 6);
  const previewFaqs = faqs.slice(0, 4);
  const serviceList = featured.length ? featured : services.slice(0, 6);

  return (
    <>
      <HeroSlider />

      <section className="wood-grain section-pad">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
                Residential services
              </p>
              <h2 className="mt-3 font-display text-4xl text-brown md:text-5xl">
                Flooring and renovation done right
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                From wood and vinyl to tile, carpet, kitchen and bath remodels,
                painting, and repairs — one trusted team for complete home
                projects.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((service, i) => (
              <Reveal key={service.id} delay={i * 70} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="service-tile flex h-full flex-col bg-white/80 p-6 backdrop-blur-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-gold/50 font-display text-lg text-gold-deep">
                    {(service.icon_key || service.name[0])
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-brown">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.short_description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10">
              <Link href="/services" className="btn-primary">
                Explore all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brown text-cream section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                How it works
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Plan your flooring installation
              </h2>
              <ol className="mt-8 space-y-5">
                {[
                  "Share your ZIP, rooms, materials, budget, and timing — or call for an in-home free estimate.",
                  "We review preparation, removal, stairs, and finishing details with you.",
                  "Confirm scope and scheduling before installation begins.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-display text-2xl text-gold">
                      0{i + 1}
                    </span>
                    <p className="pt-1 text-cream/85 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border border-gold/30 bg-brown-soft/60 p-8">
              <p className="font-display text-3xl text-gold">
                Free in-home estimates
              </p>
              <p className="mt-4 text-cream/80 leading-relaxed">
                Tell us about your rooms, current floors, and material
                preferences. {BRAND.contactName} and the team will follow up to
                confirm availability.
              </p>
              <a
                href={BRAND.phoneHref}
                className="btn-primary btn-pulse-soft mt-6 inline-flex"
              >
                {BRAND.ctaEstimate}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
                Common questions
              </p>
              <h2 className="mt-3 font-display text-4xl text-brown md:text-5xl">
                Answers before you start
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion faqs={previewFaqs} />
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/faq"
              className="mt-8 inline-block text-sm font-semibold tracking-wide text-gold-deep hover:text-brown"
            >
              View all FAQs →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-16 text-center text-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(196,163,90,0.22), transparent 55%)",
          }}
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-4">
            <h2 className="font-display text-4xl md:text-5xl">
              Ready for beautiful floors?
            </h2>
            <p className="mt-4 text-cream/75">
              Call {BRAND.phone} for an in-home free estimate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={BRAND.phoneHref}
                className="btn-primary btn-pulse-soft"
              >
                {BRAND.ctaEstimate}
              </a>
              <a href={BRAND.phoneHref} className="btn-ghost">
                Call today
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
