import {
  STATIC_FAQS,
  STATIC_PROJECTS,
  STATIC_SERVICES,
} from "./fallback-data";
import type { FAQ, Project, Service, SiteSettings } from "./types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:8000/api";

async function fetchApi<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers || {}),
    },
    next: init?.method && init.method !== "GET" ? undefined : { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export function getApiBase() {
  return API_URL;
}

function getStaticService(slug: string): Service | null {
  return STATIC_SERVICES.find((s) => s.slug === slug) ?? null;
}

export async function getServices(): Promise<Service[]> {
  try {
    return await fetchApi<Service[]>("/services/");
  } catch {
    return STATIC_SERVICES;
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    return await fetchApi<Service>(`/services/${slug}/`);
  } catch {
    return getStaticService(slug);
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await fetchApi<Project[]>("/projects/");
  } catch {
    return STATIC_PROJECTS;
  }
}

export async function getFaqs(): Promise<FAQ[]> {
  try {
    return await fetchApi<FAQ[]>("/faqs/");
  } catch {
    return STATIC_FAQS;
  }
}

export async function getSettings(): Promise<SiteSettings> {
  try {
    return await fetchApi<SiteSettings>("/settings/");
  } catch {
    return {
      company_name: "Flooring & Refinishing Guru, Inc.",
      tagline: "Complete Home Renovation Experts",
      phone: "714-213-0051",
      email: "oves@flooringguru.com",
      website: "flooringguru.com",
      contact_name: "Oves Siddiqui",
      service_area:
        "Orange County and surrounding Southern California communities",
      address_blurb: "",
      years_experience: 25,
    };
  }
}

export { API_URL };
