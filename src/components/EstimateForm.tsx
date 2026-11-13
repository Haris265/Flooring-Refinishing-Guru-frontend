"use client";

import { FormEvent, useState } from "react";

import { API_URL } from "@/lib/api";

type FormState = {
  name: string;
  phone: string;
  email: string;
  zip_code: string;
  rooms_area: string;
  current_flooring: string;
  material_preference: string;
  budget: string;
  timing: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  zip_code: "",
  rooms_area: "",
  current_flooring: "",
  material_preference: "",
  budget: "",
  timing: "",
  message: "",
};

export function EstimateForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [photo, setPhoto] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const body = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) body.append(key, value);
      });
      if (photo) body.append("photo", photo);

      const res = await fetch(`${API_URL}/estimates/`, {
        method: "POST",
        body,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message =
          typeof data === "object" && data
            ? Object.values(data).flat().join(" ")
            : "Something went wrong.";
        throw new Error(message || "Unable to submit estimate request.");
      }

      setStatus("success");
      setForm(initial);
      setPhoto(null);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to submit.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-sand/60 p-8 text-center">
        <p className="font-display text-3xl text-brown">Request received</p>
        <p className="mt-3 text-muted">
          Thank you. We will review your project details and contact you shortly
          to schedule your free in-home estimate.
        </p>
        <button
          type="button"
          className="btn-primary mt-6"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-brown/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Full name *</span>
          <input
            required
            className={fieldClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Phone *</span>
          <input
            required
            type="tel"
            className={fieldClass}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Email</span>
          <input
            type="email"
            className={fieldClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">ZIP code *</span>
          <input
            required
            className={fieldClass}
            value={form.zip_code}
            onChange={(e) => update("zip_code", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Rooms / approx. area</span>
          <input
            className={fieldClass}
            placeholder="e.g. Living room + kitchen, 800 sq ft"
            value={form.rooms_area}
            onChange={(e) => update("rooms_area", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Current flooring</span>
          <input
            className={fieldClass}
            value={form.current_flooring}
            onChange={(e) => update("current_flooring", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Material preference</span>
          <input
            className={fieldClass}
            placeholder="Wood, vinyl, tile..."
            value={form.material_preference}
            onChange={(e) => update("material_preference", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Budget</span>
          <input
            className={fieldClass}
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
          />
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="mb-1.5 block text-muted">Desired timing</span>
          <input
            className={fieldClass}
            placeholder="ASAP, this month, flexible..."
            value={form.timing}
            onChange={(e) => update("timing", e.target.value)}
          />
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="mb-1.5 block text-muted">Project details</span>
          <textarea
            rows={4}
            className={fieldClass}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="mb-1.5 block text-muted">Photo (optional)</span>
          <input
            type="file"
            accept="image/*"
            className={fieldClass}
            onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
          />
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full md:w-auto disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Request Free Estimate"}
      </button>
    </form>
  );
}
