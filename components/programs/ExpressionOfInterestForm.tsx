"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import {
  ContactEmailError,
  sendContactEmail,
} from "@/lib/contactEmail";
import { FLAGSHIP_PROGRAM } from "@/app/data/flagshipProgram";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none bg-white";

const hintClass = "mt-1 text-xs text-secondary-DEFAULT";

export default function ExpressionOfInterestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const messageParts = [
      `Expression of Interest: ${FLAGSHIP_PROGRAM.title}`,
      `Proposed dates: ${FLAGSHIP_PROGRAM.dates}`,
      `Location: ${FLAGSHIP_PROGRAM.location}`,
    ];

    if (formData.jobTitle.trim()) {
      messageParts.push(`Job title: ${formData.jobTitle.trim()}`);
    }
    if (formData.country.trim()) {
      messageParts.push(`Country: ${formData.country.trim()}`);
    }
    if (formData.message.trim()) {
      messageParts.push("", "Additional information:", formData.message.trim());
    }

    try {
      await sendContactEmail({
        form_type: "general",
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        reply_to: formData.email.trim(),
        organization: "",
        job_title: formData.jobTitle.trim(),
        country: formData.country.trim(),
        program_interest: FLAGSHIP_PROGRAM.title,
        cohort_size: "",
        training_objectives: "",
        subject: `Expression of Interest: ${FLAGSHIP_PROGRAM.shortTitle}`,
        message: messageParts.join("\n"),
      });
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        jobTitle: "",
        country: "",
        message: "",
      });
      setTimeout(() => setShowSuccess(false), 8000);
    } catch (err) {
      console.error("EOI send failed:", err);
      setSubmitError(
        err instanceof ContactEmailError
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <p className="text-sm leading-relaxed text-secondary-DEFAULT">
        Please share your contact details and professional background. This helps
        us send program updates, registration information, and logistics as they
        become available. Fields marked with * are required.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="eoi-name" className="mb-2 block text-sm font-medium text-primary-900">
            Full Name *
          </label>
          <p className={hintClass}>Your full name as it should appear on correspondence.</p>
          <input
            type="text"
            id="eoi-name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Jane Doe"
            className={`${inputClass} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="eoi-email" className="mb-2 block text-sm font-medium text-primary-900">
            Email *
          </label>
          <p className={hintClass}>A professional or work email we can use to reach you.</p>
          <input
            type="email"
            id="eoi-email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. jane.doe@organization.gov"
            className={`${inputClass} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="eoi-jobTitle" className="mb-2 block text-sm font-medium text-primary-900">
            Job Title
          </label>
          <p className={hintClass}>Your current role, position, or functional area.</p>
          <input
            type="text"
            id="eoi-jobTitle"
            name="jobTitle"
            autoComplete="organization-title"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Director of Workforce Development"
            className={`${inputClass} mt-2`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="eoi-country" className="mb-2 block text-sm font-medium text-primary-900">
          Country
        </label>
        <p className={hintClass}>
          Country of residence or the country your institution represents.
        </p>
        <input
          type="text"
          id="eoi-country"
          name="country"
          autoComplete="country-name"
          value={formData.country}
          onChange={handleChange}
          placeholder="e.g. Kenya"
          className={`${inputClass} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="eoi-message" className="mb-2 block text-sm font-medium text-primary-900">
          Additional Information
        </label>
        <p className={hintClass}>
          Tell us whether you are applying individually or on behalf of an
          institution, your learning priorities, expected number of participants,
          and any questions about fees, travel, or logistics.
        </p>
        <textarea
          id="eoi-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={`Example:\nI am a senior workforce development official interested in attending individually. I would like to learn more about registration fees, visa support, and whether institutional nominations are accepted.`}
          className={`${inputClass} mt-2 resize-none`}
        />
      </div>

      {showSuccess && (
        <div className="rounded-lg border-l-4 border-accent-700 bg-accent-50 p-4">
          <p className="font-medium text-accent-900">
            Thank you for registering your interest. We will share program updates,
            registration details, and logistics as they become available.
          </p>
        </div>
      )}

      {submitError && (
        <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
          <p className="font-medium text-red-900">{submitError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-lg bg-accent-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            <Send className="mr-2" size={20} />
            Register Your Interest
          </>
        )}
      </button>
    </motion.form>
  );
}
