"use client";

import { useState } from "react";

import type { FAQ } from "@/lib/types";

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);

  if (!faqs.length) {
    return (
      <p className="text-muted">
        FAQs will appear here once the API is available.
      </p>
    );
  }

  return (
    <div className="divide-y divide-brown/10 border-y border-brown/10">
      {faqs.map((faq) => {
        const open = openId === faq.id;
        return (
          <div key={faq.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : faq.id)}
            >
              <span className="font-display text-xl text-brown md:text-2xl">
                {faq.question}
              </span>
              <span
                className={`text-gold transition ${open ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-8 text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
