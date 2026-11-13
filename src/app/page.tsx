import Image from "next/image";
import Link from "next/link";

import { FaqAccordion } from "@/components/FaqAccordion";
import { getFaqs, getServices } from "@/lib/api";
import { BRAND } from "@/lib/constants";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

export default async function HomePage() {
  const [services, faqs] = await Promise.all([getServices(), getFaqs()]);
  const featured = services.filter((s) => s.is_featured).slice(0, 6);
  const previewFaqs = faqs.slice(0, 4);

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Modern home with hardwood flooring"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:px-6 md:pb-24">
          <p className="fade-up text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {BRAND.years}+ years of experience
          </p>
          <h1 className="fade-up font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-white md:text-7xl">
            Flooring &amp; Refinishing Guru
          </h1>
          <p className="fade-up-delay mt-5 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
            {BRAND.tagline}. Professional flooring installation, refinishing,
            and home renovation across Orange County — request your free
            in-home estimate today.
          </p>
          <div className="fade-up-delay mt-8 flex flex-wrap gap-3">
            <Link href="/estimate" className="btn-primary">
              Request Free Estimate
            </Link>
            <a href={BRAND.phoneHref} className="btn-ghost">
              Call {BRAND.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="wood-grain section-pad">
        <div className="mx-auto max-w-6xl">
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(featured.length ? featured : services.slice(0, 6)).map(
              (service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="service-tile bg-white/80 p-6 backdrop-blur-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-gold/50 font-display text-lg text-gold-deep">
                    {(service.icon_key || service.name[0]).slice(0, 2).toUpperCase()}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-brown">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.short_description}
                  </p>
                </Link>
              ),
            )}
          </div>

          <div className="mt-10">
            <Link href="/services" className="btn-primary">
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brown text-cream section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              How it works
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Plan your flooring installation
            </h2>
            <ol className="mt-8 space-y-5">
              {[
                "Share your ZIP, rooms, materials, budget, and timing in the free estimate request.",
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
          <div className="border border-gold/30 bg-brown-soft/60 p-8">
            <p className="font-display text-3xl text-gold">
              Free in-home estimates
            </p>
            <p className="mt-4 text-cream/80 leading-relaxed">
              Tell us about your rooms, current floors, and material
              preferences. {BRAND.contactName} and the team will follow up to
              confirm availability.
            </p>
            <Link href="/estimate" className="btn-primary mt-6 inline-flex">
              Start your estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
              Common questions
            </p>
            <h2 className="mt-3 font-display text-4xl text-brown md:text-5xl">
              Answers before you start
            </h2>
          </div>
          <FaqAccordion faqs={previewFaqs} />
          <Link
            href="/faq"
            className="mt-8 inline-block text-sm font-semibold tracking-wide text-gold-deep hover:text-brown"
          >
            View all FAQs →
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-16 text-center text-cream">
        <div className="relative mx-auto max-w-3xl px-4">
          <h2 className="font-display text-4xl md:text-5xl">
            Ready for beautiful floors?
          </h2>
          <p className="mt-4 text-cream/75">
            Call {BRAND.phone} or request your free in-home estimate online.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/estimate" className="btn-primary">
              Request Free Estimate
            </Link>
            <a href={BRAND.phoneHref} className="btn-ghost">
              Call today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
