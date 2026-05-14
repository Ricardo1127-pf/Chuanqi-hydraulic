"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export default function InquiryForm({
  lang,
  defaultProduct,
}: {
  lang: Lang;
  defaultProduct?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "bedb5db5-ec83-47c2-b19e-5c0e4577115b",
          subject: `New Inquiry from ChuanQi Hydraulic Website`,
          from_name: formData.get("name"),
          replyto: formData.get("email"),
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          product: formData.get("product"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
          {t(lang, "contact.success") as string}
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {t(lang, "contact.error") as string}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t(lang, "contact.name") as string} *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder={t(lang, "contact.namePlaceholder") as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t(lang, "contact.email") as string} *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder={t(lang, "contact.emailPlaceholder") as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t(lang, "contact.phone") as string}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={t(lang, "contact.phonePlaceholder") as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t(lang, "contact.company") as string}
          </label>
          <input
            type="text"
            name="company"
            placeholder={t(lang, "contact.companyPlaceholder") as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t(lang, "contact.product") as string}
        </label>
        <input
          type="text"
          name="product"
          defaultValue={defaultProduct || ""}
          placeholder={t(lang, "contact.productPlaceholder") as string}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t(lang, "contact.message") as string} *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t(lang, "contact.messagePlaceholder") as string}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting
          ? (t(lang, "contact.submitting") as string)
          : (t(lang, "contact.submit") as string)}
      </button>
    </form>
  );
}
