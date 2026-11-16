export const BRAND = {
  name: "Flooring & Refinishing Guru, Inc.",
  shortName: "Flooring & Refinishing Guru",
  tagline: "Complete Home Renovation Experts",
  phone: "714-213-0051",
  phoneHref: "tel:7142130051",
  email: "oves@flooringguru.com",
  emailHref: "mailto:oves@flooringguru.com",
  website: "flooringguru.com",
  contactName: "Oves Siddiqui",
  years: 25,
  ctaEstimate: "Call for an in home free estimate",
};

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQ" },
] as const;

export const SERVICE_ICONS: Record<string, string> = {
  wood: "W",
  vinyl: "V",
  laminate: "L",
  tile: "T",
  carpet: "C",
  kitchen: "K",
  bathroom: "B",
  paint: "P",
  drywall: "D",
  plumbing: "Pl",
  repairs: "R",
};
