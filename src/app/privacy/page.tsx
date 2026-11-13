import type { Metadata } from "next";

import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-brown sm:text-5xl md:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-4 text-muted leading-relaxed">
          <p>
            {BRAND.name} (&quot;we&quot;) collects information you submit through
            our website estimate form — such as name, phone, email, ZIP code, and
            project details — solely to respond to your inquiry and provide
            services.
          </p>
          <p>
            We do not sell your personal information. Contact details may be
            used to schedule estimates, discuss project scope, and follow up on
            your request.
          </p>
          <p>
            Questions about this policy? Email{" "}
            <a href={BRAND.emailHref} className="text-brown underline">
              {BRAND.email}
            </a>{" "}
            or call{" "}
            <a href={BRAND.phoneHref} className="text-brown underline">
              {BRAND.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
