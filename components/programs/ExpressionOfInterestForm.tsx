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

export default function ExpressionOfInterestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
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

    const defaultMessage = `Expression of Interest: ${FLAGSHIP_PROGRAM.shortTitle} (${FLAGSHIP_PROGRAM.dates})`;

    try {
      await sendContactEmail({
        form_type: "individual",
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        reply_to: formData.email.trim(),
        organization: formData.organization.trim(),
        job_title: formData.jobTitle.trim(),
        country: formData.country.trim(),
        program_interest: FLAGSHIP_PROGRAM.title,
        cohort_size: "",
        training_objectives: "",
        subject: `EOI: ${FLAGSHIP_PROGRAM.shortTitle}`,
        message: formData.message.trim() || defaultMessage,
      });
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="eoi-name" className="mb-2 block text-sm font-medium text-primary-900">
            Full Name *
          </label>
          <input
            type="text"
            id="eoi-name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="eoi-email" className="mb-2 block text-sm font-medium text-primary-900">
            Email *
          </label>
          <input
            type="email"
            id="eoi-email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="eoi-organization" className="mb-2 block text-sm font-medium text-primary-900">
            Organization
          </label>
          <input
            type="text"
            id="eoi-organization"
            name="organization"
            autoComplete="organization"
            value={formData.organization}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="eoi-jobTitle" className="mb-2 block text-sm font-medium text-primary-900">
            Job Title
          </label>
          <input
            type="text"
            id="eoi-jobTitle"
            name="jobTitle"
            autoComplete="organization-title"
            value={formData.jobTitle}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="eoi-country" className="mb-2 block text-sm font-medium text-primary-900">
          Country
        </label>
        <input
          type="text"
          id="eoi-country"
          name="country"
          autoComplete="country-name"
          value={formData.country}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="eoi-message" className="mb-2 block text-sm font-medium text-primary-900">
          Additional Information
        </label>
        <textarea
          id="eoi-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Share any relevant background or questions about participation."
          className={`${inputClass} resize-none`}
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
