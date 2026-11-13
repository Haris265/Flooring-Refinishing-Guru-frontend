import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getService, getServices } from "@/lib/api";
import { BRAND } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.short_description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-brown px-4 py-16 text-cream md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/services"
            className="text-sm text-gold/90 hover:text-gold"
          >
            ← All services
          </Link>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            {service.short_description}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl text-brown">Overview</h2>
            <p className="mt-4 whitespace-pre-line text-muted leading-relaxed">
              {service.description}
            </p>
          </div>
          <aside className="border border-gold/30 bg-sand/50 p-6">
            <p className="font-display text-2xl text-brown">
              Free in-home estimate
            </p>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Share your ZIP, rooms, and material preferences. Call{" "}
              <a href={BRAND.phoneHref} className="font-semibold text-brown">
                {BRAND.phone}
              </a>{" "}
              or request online.
            </p>
            <Link href="/estimate" className="btn-primary mt-6 inline-flex">
              Request Free Estimate
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
