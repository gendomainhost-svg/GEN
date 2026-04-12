"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type FormType = "individual" | "institutional" | "general";

interface ContactFormValues {
  name: string;
  email: string;
  organization?: string;
  jobTitle?: string;
  country?: string;
  programInterest?: string;
  cohortSize?: string;
  trainingObjectives?: string;
  subject?: string;
  message?: string;
}

const emptyFormData: ContactFormValues = {
  name: "",
  email: "",
  organization: "",
  jobTitle: "",
  country: "",
  programInterest: "",
  cohortSize: "",
  trainingObjectives: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") as FormType | null;
  const [activeTab, setActiveTab] = useState<FormType>(
    typeParam && ["individual", "institutional", "general"].includes(typeParam)
      ? typeParam
      : "individual"
  );

  useEffect(() => {
    if (typeParam && ["individual", "institutional", "general"].includes(typeParam)) {
      setActiveTab(typeParam);
    }
  }, [typeParam]);

  const [formData, setFormData] = useState<ContactFormValues>({ ...emptyFormData });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildTemplateParams = useCallback(() => {
    return {
      form_type: activeTab,
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      organization: formData.organization ?? "",
      job_title: formData.jobTitle ?? "",
      country: formData.country ?? "",
      program_interest: formData.programInterest ?? "",
      cohort_size: formData.cohortSize ?? "",
      training_objectives: formData.trainingObjectives ?? "",
      subject: formData.subject ?? "",
      message: formData.message ?? "",
    };
  }, [activeTab, formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildTemplateParams()),
      });

      let data: { error?: string } = {};
      try {
        data = await res.json();
      } catch {
        /* non-JSON response */
      }

      if (!res.ok) {
        setSubmitError(
          data.error ??
            "Something went wrong sending your message. Please try again or email us directly."
        );
        return;
      }

      setShowSuccess(true);
      setFormData({ ...emptyFormData });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      console.error("Contact send failed:", err);
      setSubmitError(
        "Something went wrong sending your message. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: "individual" as FormType, label: "Individual Application" },
    { id: "institutional" as FormType, label: "Institutional Inquiry" },
    { id: "general" as FormType, label: "General Contact" },
  ];

  return (
    <div className="relative">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-primary-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setFormData({ ...emptyFormData });
              setShowSuccess(false);
              setSubmitError(null);
            }}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === tab.id
                ? "text-accent-700 border-b-2 border-accent-700"
                : "text-secondary-DEFAULT hover:text-primary-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <motion.form
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Individual Form */}
        {activeTab === "individual" && (
          <>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Current Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                required
                value={formData.jobTitle || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Country *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="programInterest"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Program of Interest *
              </label>
              <select
                id="programInterest"
                name="programInterest"
                required
                value={formData.programInterest || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none bg-white"
              >
                <option value="">Select a program</option>
                <option value="executive-short-courses">Executive Short Courses</option>
                <option value="study-tours">Study Tours</option>
                <option value="fellowships">Fellowships</option>
                <option value="shadowing">Shadowing</option>
              </select>
            </div>
          </>
        )}

        {/* Institutional Form */}
        {activeTab === "institutional" && (
          <>
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Organization Name *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Representative Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="cohortSize"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Estimated Cohort Size *
              </label>
              <input
                type="text"
                id="cohortSize"
                name="cohortSize"
                required
                value={formData.cohortSize || ""}
                onChange={handleInputChange}
                placeholder="e.g., 10-20 participants"
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="trainingObjectives"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Training Objectives *
              </label>
              <textarea
                id="trainingObjectives"
                name="trainingObjectives"
                required
                rows={4}
                value={formData.trainingObjectives || ""}
                onChange={handleInputChange}
                placeholder="Describe your institution's training objectives..."
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none resize-none"
              />
            </div>
          </>
        )}

        {/* General Contact Form */}
        {activeTab === "general" && (
          <>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary-900 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none resize-none"
              />
            </div>
          </>
        )}

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-accent-50 border-l-4 border-accent-700 p-4 rounded-lg"
          >
            <p className="text-accent-900 font-medium">
              Thank you! Your message has been received. We'll be in touch soon.
            </p>
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg"
          >
            <p className="text-red-900 font-medium">{submitError}</p>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
