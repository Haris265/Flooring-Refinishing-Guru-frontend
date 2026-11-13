import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Flooring & Refinishing Guru, Inc. — complete home renovation experts with 25+ years of experience in Orange County.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brown px-4 py-16 text-cream md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl">
            Trusted craftsmanship, beautiful results
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80 leading-relaxed">
            {BRAND.name} brings {BRAND.years}+ years of experience to flooring
            installation, refinishing, and complete home renovation across Orange
            County.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="relative min-h-[240px] overflow-hidden sm:min-h-[320px]">
            <Image
              src="/images/card-front.jpg"
              alt="Flooring & Refinishing Guru business card"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl text-brown">
              Meet {BRAND.contactName}
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              As the face of {BRAND.shortName}, {BRAND.contactName} focuses on
              clear communication, careful preparation, and finishes that hold up
              in real homes. Whether you need new floors, a kitchen refresh, or
              coordinated remodel work, we plan the complete project before
              installation begins.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground">
              <li>
                <strong>Phone:</strong>{" "}
                <a href={BRAND.phoneHref}>{BRAND.phone}</a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={BRAND.emailHref}>{BRAND.email}</a>
              </li>
              <li>
                <strong>Service area:</strong> Orange County & Southern
                California
              </li>
            </ul>
            <Link href="/estimate" className="btn-primary mt-8 inline-flex">
              Request a free estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="wood-grain section-pad">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-brown">
            Complete home renovation experts
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            Beyond flooring, we support kitchen and bathroom remodeling,
            painting, drywall, plumbing, and house repairs — so your project stays
            coordinated from prep through final walkthrough.
          </p>
        </div>
      </section>
    </>
  );
}
