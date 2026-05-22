"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import {
  ContactEmailError,
  sendContactEmail,
} from "@/lib/contactEmail";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const emptyFormData: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>({
    ...emptyFormData,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildPayload = useCallback(() => {
    return {
      form_type: "general" as const,
      name: formData.name.trim(),
      from_name: formData.name.trim(),
      email: formData.email.trim(),
      reply_to: formData.email.trim(),
      organization: "",
      job_title: "",
      country: "",
      program_interest: "",
      cohort_size: "",
      training_objectives: "",
      subject: "",
      message: formData.message.trim(),
    };
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await sendContactEmail(buildPayload());
      setShowSuccess(true);
      setFormData({ ...emptyFormData });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      console.error("Contact send failed:", err);
      setSubmitError(
        err instanceof ContactEmailError
          ? err.message
          : "Something went wrong sending your message. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none";

  return (
    <div className="relative">
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-primary-900"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-primary-900"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-primary-900"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            minLength={10}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="How can we help?"
            className={`${inputClass} resize-none`}
          />
        </div>

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border-l-4 border-accent-700 bg-accent-50 p-4"
          >
            <p className="font-medium text-accent-900">
              Thank you! Your message has been received. We&apos;ll be in touch
              soon.
            </p>
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4"
          >
            <p className="font-medium text-red-900">{submitError}</p>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-lg bg-accent-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Send Message
            </>
          )}
        </button>
      </motion.form>
    </div>
  );
}
