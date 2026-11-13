import type { Metadata } from "next";
import Link from "next/link";

import { getServices } from "@/lib/api";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Flooring, remodeling, painting, drywall, plumbing, and house repairs from Flooring & Refinishing Guru.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <section className="bg-brown px-4 py-16 text-cream md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            What we do
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80 leading-relaxed">
            Explore flooring installation and refinishing plus complete home
            renovation services. Every project starts with a free in-home
            estimate.
          </p>
        </div>
      </section>

      <section className="section-pad wood-grain">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="service-tile bg-white p-6"
            >
              <h2 className="font-display text-2xl text-brown">
                {service.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.short_description}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-gold-deep">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
