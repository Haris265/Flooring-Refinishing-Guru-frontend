import type { FAQ, Project, Service } from "./types";

/** Mirrors backend `seed_data.py` when the API is unreachable. */
export const STATIC_SERVICES: Service[] = [
  {
    id: 1,
    name: "Wood Flooring",
    slug: "wood-flooring",
    short_description:
      "Hardwood and engineered wood installation and refinishing.",
    description:
      "Plan hardwood or engineered wood flooring for your home with expert installation and refinishing. We review substrate conditions, moisture, product selection, and finishing details so your floors look beautiful and perform for years. Request a free in-home estimate to discuss scope, stairs, transitions, and timing.",
    icon_key: "wood",
    featured_image_url: null,
    order: 1,
    is_featured: true,
  },
  {
    id: 2,
    name: "Vinyl Flooring",
    slug: "vinyl-flooring",
    short_description:
      "Luxury vinyl plank and SPC for durable, stylish floors.",
    description:
      "Luxury vinyl plank and SPC flooring deliver water resistance, comfort underfoot, and wood-look style. We help you compare products, prepare the subfloor, and complete clean transitions and finishing for kitchens, baths, and living spaces.",
    icon_key: "vinyl",
    featured_image_url: null,
    order: 2,
    is_featured: true,
  },
  {
    id: 3,
    name: "Laminate Flooring",
    slug: "laminate-flooring",
    short_description: "Affordable wood-look laminate with precise installation.",
    description:
      "Laminate flooring offers durable wood-look finishes at a strong value. We review product requirements, underlayment, floating-floor installation, and doorway details so the finished result is tight, level, and long-lasting.",
    icon_key: "laminate",
    featured_image_url: null,
    order: 3,
    is_featured: true,
  },
  {
    id: 4,
    name: "Tile Flooring",
    slug: "tile-flooring",
    short_description: "Ceramic, porcelain, and decorative tile installation.",
    description:
      "From entryways and kitchens to bathrooms and showers, we install ceramic and porcelain tile with careful layout, cuts, and finishing. Share photos and product preferences in your free estimate request.",
    icon_key: "tile",
    featured_image_url: null,
    order: 4,
    is_featured: true,
  },
  {
    id: 5,
    name: "Carpet Installation",
    slug: "carpet-installation",
    short_description: "Carpet for bedrooms, stairs, and living spaces.",
    description:
      "Carpet installation for rooms and stairs, including cushion selection, seams, and clean doorway edges. Tell us about the rooms, stairs, and current flooring so we can scope removal and installation correctly.",
    icon_key: "carpet",
    featured_image_url: null,
    order: 5,
    is_featured: false,
  },
  {
    id: 6,
    name: "Kitchen Remodeling",
    slug: "kitchen-remodeling",
    short_description:
      "Kitchen renovations coordinated with flooring and finishes.",
    description:
      "Complete kitchen remodeling support—flooring, painting, drywall, and related finish work—so your renovation stays coordinated from prep through final walkthrough.",
    icon_key: "kitchen",
    featured_image_url: null,
    order: 6,
    is_featured: true,
  },
  {
    id: 7,
    name: "Bathroom Remodeling",
    slug: "bathroom-remodeling",
    short_description: "Bathroom updates including tile, floors, and finishes.",
    description:
      "Bathroom remodeling with tile, flooring, painting, and related repairs. We plan moisture-appropriate materials and finishing details for durable, beautiful results.",
    icon_key: "bathroom",
    featured_image_url: null,
    order: 7,
    is_featured: false,
  },
  {
    id: 8,
    name: "Painting",
    slug: "painting",
    short_description: "Interior painting for refreshed, finished rooms.",
    description:
      "Professional interior painting to complete your flooring or remodel project. Ask about prep, color consultation, and scheduling alongside your flooring work.",
    icon_key: "paint",
    featured_image_url: null,
    order: 8,
    is_featured: false,
  },
  {
    id: 9,
    name: "Drywall",
    slug: "drywall",
    short_description: "Drywall repair and finishing for smooth walls.",
    description:
      "Drywall repair and finishing so walls and ceilings are ready for paint after remodeling or flooring-related work. Include any visible damage in your estimate photos.",
    icon_key: "drywall",
    featured_image_url: null,
    order: 9,
    is_featured: false,
  },
  {
    id: 10,
    name: "Plumbing",
    slug: "plumbing",
    short_description: "Plumbing support for remodel and repair projects.",
    description:
      "Plumbing services to support remodeling and home repairs. Discuss fixture needs, bathroom work, and related scope during your free in-home estimate.",
    icon_key: "plumbing",
    featured_image_url: null,
    order: 10,
    is_featured: false,
  },
  {
    id: 11,
    name: "House Repairs",
    slug: "house-repairs",
    short_description: "Trusted craftsmanship for residential repairs.",
    description:
      "General house repairs handled with the same care as our flooring projects. Describe the issue, share photos, and request a free estimate to review options.",
    icon_key: "repairs",
    featured_image_url: null,
    order: 11,
    is_featured: false,
  },
];

export const STATIC_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Open-Concept Hardwood Refresh",
    slug: "open-concept-hardwood-refresh",
    description:
      "Hardwood installation across living, dining, and kitchen areas with clean transitions and finished baseboards.",
    category: "flooring",
    location: "Orange County, CA",
    cover_image_url: null,
    images: [],
    is_featured: true,
    order: 1,
  },
  {
    id: 2,
    title: "Luxury Vinyl Plank Kitchen & Hall",
    slug: "luxury-vinyl-plank-kitchen-hall",
    description:
      "Water-resistant LVP installed through kitchen and hallway with underlayment and doorway transitions.",
    category: "flooring",
    location: "Orange County, CA",
    cover_image_url: null,
    images: [],
    is_featured: true,
    order: 2,
  },
  {
    id: 3,
    title: "Stair & Landing Refinish",
    slug: "stair-landing-refinish",
    description:
      "Staircase and landing refinishing with stair noses and careful finishing around railings.",
    category: "stairs",
    location: "Orange County, CA",
    cover_image_url: null,
    images: [],
    is_featured: true,
    order: 3,
  },
  {
    id: 4,
    title: "Bathroom Tile Update",
    slug: "bathroom-tile-update",
    description:
      "Bathroom tile flooring and wall accents with moisture-appropriate prep and finishing.",
    category: "bathroom",
    location: "Orange County, CA",
    cover_image_url: null,
    images: [],
    is_featured: false,
    order: 4,
  },
];

export const STATIC_FAQS: FAQ[] = [
  {
    id: 1,
    question: "Do you offer free in-home estimates?",
    answer:
      "Yes. Request a free in-home estimate online or call 714-213-0051. Include your ZIP code, rooms, approximate area, current flooring, material preference, budget, timing, and photos when possible.",
    category: "Estimates",
    order: 1,
  },
  {
    id: 2,
    question: "Which areas do you serve?",
    answer:
      "We serve Orange County and surrounding Southern California communities. Share your ZIP code in the estimate form so we can confirm availability.",
    category: "Service Area",
    order: 2,
  },
  {
    id: 3,
    question: "Which services can I request?",
    answer:
      "Flooring services include wood, vinyl, laminate, tile, and carpet. We also provide kitchen and bathroom remodeling, painting, drywall, plumbing, and general house repairs. Confirm the full scope during your estimate.",
    category: "Services",
    order: 3,
  },
  {
    id: 4,
    question: "What affects flooring installation cost?",
    answer:
      "Product selection, square footage, removal of existing flooring, subfloor preparation, stairs, transitions, trim, and material availability all affect the estimate. We review these details before confirming scope and pricing.",
    category: "Pricing",
    order: 4,
  },
  {
    id: 5,
    question: "How long does installation take?",
    answer:
      "Timing depends on project size, preparation needs, material availability, and finishing work. Ask for a schedule that includes each stage and when rooms can be used again.",
    category: "Scheduling",
    order: 5,
  },
  {
    id: 6,
    question: "Can I get an estimate before choosing a product?",
    answer:
      "Yes. Describe your preferred look, rooms, budget, and materials you are considering. Final scope may depend on product selection and site conditions.",
    category: "Estimates",
    order: 6,
  },
];
