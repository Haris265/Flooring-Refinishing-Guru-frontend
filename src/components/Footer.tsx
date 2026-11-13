import Link from "next/link";

import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {BRAND.tagline}. Trusted craftsmanship and beautiful results across
            Orange County for {BRAND.years}+ years.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/estimate" className="hover:text-gold">
                Free Estimate
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>{BRAND.contactName}</li>
            <li>
              <a href={BRAND.phoneHref} className="hover:text-gold">
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={BRAND.emailHref} className="hover:text-gold">
                {BRAND.email}
              </a>
            </li>
            <li className="pt-2 text-cream/60">{BRAND.website}</li>
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold/80">
            Free in-home estimates — call today
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-cream/50 md:px-6">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
