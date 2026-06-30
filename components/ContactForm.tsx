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

  const hintClass = "mt-1 text-xs text-secondary-DEFAULT";

  return (
    <div className="relative">
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <p className="text-sm leading-relaxed text-secondary-DEFAULT">
          Please share your name, email, and a brief message about your inquiry.
          Tell us whether you are interested in a program, consulting support, or
          a partnership opportunity. Fields marked with * are required.
        </p>

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-primary-900"
          >
            Name *
          </label>
          <p className={hintClass}>Your full name as it should appear on correspondence.</p>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Jane Doe"
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-primary-900"
          >
            Email *
          </label>
          <p className={hintClass}>A professional or work email we can use to reach you.</p>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. jane.doe@organization.gov"
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-primary-900"
          >
            Message *
          </label>
          <p className={hintClass}>
            Describe your inquiry, the program or service you are interested in,
            and any questions about participation, timing, or next steps.
          </p>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            minLength={10}
            value={formData.message}
            onChange={handleInputChange}
            placeholder={`Example:\nI would like to learn more about GEN's open-enrollment programs and whether there are upcoming dates for executive training in the United States.`}
            className={`${inputClass} mt-2 resize-none`}
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
