import type { Metadata } from "next";
import Image from "next/image";

import { getProjects } from "@/lib/api";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse residential flooring, stairs, tile, and renovation project examples from Flooring & Refinishing Guru in Orange County.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects",
    description:
      "Residential flooring and renovation project gallery from Flooring & Refinishing Guru.",
    url: "/projects",
  },
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
];

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="bg-brown px-4 py-16 text-cream md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80 leading-relaxed">
            From full-room flooring to stairs, tile, and remodel finishes —
            explore examples of residential work across Orange County.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
          {projects.map((project, index) => {
            const image =
              project.cover_image_url ||
              FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
            return (
              <article
                key={project.id}
                className="group overflow-hidden border border-brown/10 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">
                    {project.category}
                    {project.location ? ` · ${project.location}` : ""}
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-brown">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-6xl text-center">
          <a href={BRAND.phoneHref} className="btn-primary">
            {BRAND.ctaEstimate}
          </a>
        </div>
      </section>
    </>
  );
}
