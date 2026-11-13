export type Service = {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description?: string;
  icon_key: string;
  featured_image_url: string | null;
  order: number;
  is_featured: boolean;
};

export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  location: string;
  cover_image_url: string | null;
  images: { id: number; image_url: string | null; caption: string; order: number }[];
  is_featured: boolean;
  order: number;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
};

export type SiteSettings = {
  company_name: string;
  tagline: string;
  phone: string;
  email: string;
  website: string;
  contact_name: string;
  service_area: string;
  address_blurb: string;
  years_experience: number;
};
