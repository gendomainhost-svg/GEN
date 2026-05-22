"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Handshake,
  Loader2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Section from "./Section";
import {
  ContactEmailError,
  sendContactEmail,
  type ContactEmailParams,
} from "@/lib/contactEmail";

// Form Schemas
const step1Schema = z.object({
  inquiryType: z.enum(["training", "consulting", "partnership"], {
    message: "Please select an option",
  }),
});

const step2Schema = z.object({
  primaryChallenge: z.string().optional(),
  institutionName: z.string().min(2, "Institution name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

type InquiryType = "training" | "consulting" | "partnership";

interface InquiryOption {
  type: InquiryType;
  title: string;
  subtitle: string;
  icon: any;
  description: string;
}

const inquiryOptions: InquiryOption[] = [
  {
    type: "training",
    title: "Institutional Training",
    subtitle: "Capacity Building",
    icon: GraduationCap,
    description: "Custom training programs for your team",
  },
  {
    type: "consulting",
    title: "Advisory & Consulting",
    subtitle: "Reform Design",
    icon: Briefcase,
    description: "Strategic guidance and transformation support",
  },
  {
    type: "partnership",
    title: "Partnership Inquiry",
    subtitle: "Network Collaboration",
    icon: Handshake,
    description: "Join our global network of partners",
  },
];

export default function SmartContactForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [inquiryType, setInquiryType] = useState<InquiryType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      inquiryType: undefined,
    },
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      institutionName: "",
      contactName: "",
      email: "",
      phone: "",
      message: "",
      primaryChallenge: "",
    },
  });

  const onStep1Submit = (data: Step1Data) => {
    setInquiryType(data.inquiryType);
    setStep(2);
  };

  const onStep2Submit = async (data: Step2Data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const inquiryLabels: Record<InquiryType, string> = {
      training: "Institutional Training",
      consulting: "Advisory & Consulting",
      partnership: "Partnership Inquiry",
    };

    const payload: ContactEmailParams = {
      form_type: "institutional",
      name: data.contactName.trim(),
      from_name: data.contactName.trim(),
      email: data.email.trim(),
      reply_to: data.email.trim(),
      organization: data.institutionName.trim(),
      job_title: "",
      country: "",
      program_interest: inquiryType ? inquiryLabels[inquiryType] : "",
      cohort_size: "",
      training_objectives: data.primaryChallenge?.trim() ?? "",
      subject: inquiryType ? inquiryLabels[inquiryType] : "GEN inquiry",
      message: data.message.trim(),
    };

    try {
      await sendContactEmail(payload);
      setIsSubmitted(true);
      step1Form.reset();
      step2Form.reset();
    } catch (err) {
      console.error("Contact send failed:", err);
      setSubmitError(
        err instanceof ContactEmailError
          ? err.message
          : "Unable to send your message right now. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOptionSelect = (type: InquiryType) => {
    step1Form.setValue("inquiryType", type);
    step1Form.handleSubmit(onStep1Submit)();
  };

  if (isSubmitted) {
    return (
      <Section className="bg-primary-50 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <CheckCircle2 className="text-green-600 mx-auto mb-6" size={64} />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Thank You!
          </h2>
          <p className="text-xl text-secondary-DEFAULT mb-8">
            Your inquiry has been submitted successfully. Our team will contact
            you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setInquiryType(null);
              setSubmitError(null);
            }}
            className="text-accent-700 hover:text-accent-600 font-semibold"
          >
            Submit another inquiry
          </button>
        </motion.div>
      </Section>
    );
  }

  return (
    <Section id="contact" className="bg-primary-50 py-20 md:py-32 dot-pattern">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary-900/5 text-primary-700 text-sm font-semibold mb-4 border border-primary-200"
        >
          Engage GEN
        </motion.span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900">
          Contact & Inquiry
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {inquiryOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <motion.button
                      key={option.type}
                      onClick={() => handleOptionSelect(option.type)}
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-primary-200 hover:border-accent-600/50 text-left group relative overflow-hidden"
                    >
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-700 to-accent-500 group-hover:w-full transition-all duration-500" />
                      <motion.div
                        className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-700 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent-700/20"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        <Icon className="text-primary-700 group-hover:text-white transition-colors duration-500" size={28} />
                      </motion.div>
                      <h4 className="font-serif text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-800 transition-colors">
                        {option.title}
                      </h4>
                      <p className="text-secondary-DEFAULT text-sm">
                        {option.description}
                      </p>
                      <div className="mt-3 flex items-center text-accent-700 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Select <ArrowRight className="ml-1" size={14} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {step1Form.formState.errors.inquiryType && (
                <p className="text-red-600 text-sm text-center mt-4">
                  {step1Form.formState.errors.inquiryType.message}
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
                <div className="mb-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center text-primary-900 hover:text-accent-700 font-medium transition-colors"
                  >
                    <ArrowLeft className="mr-2" size={18} />
                    Back
                  </button>
                </div>

                <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
                  {/* Conditional Primary Challenge for Consulting */}
                  {inquiryType === "consulting" && (
                    <div>
                      <label className="block text-primary-900 font-semibold mb-2">
                        What is your primary challenge?
                      </label>
                      <select
                        {...step2Form.register("primaryChallenge")}
                        className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent bg-white"
                      >
                        <option value="">Select a challenge</option>
                        <option value="efficiency">Efficiency & Operations</option>
                        <option value="governance">Governance & Accountability</option>
                        <option value="digital">Digital Transformation</option>
                        <option value="reform">Institutional Reform</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

                  {/* Institution Name */}
                  <div className="relative">
                    <input
                      type="text"
                      {...step2Form.register("institutionName")}
                      placeholder=" "
                      className="peer w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent bg-white"
                    />
                    <label className="absolute left-4 top-3 text-secondary-DEFAULT transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary-900 bg-white px-2 pointer-events-none">
                      Institution Name *
                    </label>
                    {step2Form.formState.errors.institutionName && (
                      <p className="text-red-600 text-sm mt-1">
                        {step2Form.formState.errors.institutionName.message}
                      </p>
                    )}
                  </div>

                  {/* Contact Name */}
                  <div className="relative">
                    <input
                      type="text"
                      {...step2Form.register("contactName")}
                      placeholder=" "
                      className="peer w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent bg-white"
                    />
                    <label className="absolute left-4 top-3 text-secondary-DEFAULT transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary-900 bg-white px-2 pointer-events-none">
                      Contact Name *
                    </label>
                    {step2Form.formState.errors.contactName && (
                      <p className="text-red-600 text-sm mt-1">
                        {step2Form.formState.errors.contactName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      {...step2Form.register("email")}
                      placeholder=" "
                      className="peer w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent bg-white"
                    />
                    <label className="absolute left-4 top-3 text-secondary-DEFAULT transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary-900 bg-white px-2 pointer-events-none">
                      Email Address *
                    </label>
                    {step2Form.formState.errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {step2Form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      {...step2Form.register("phone")}
                      placeholder=" "
                      className="peer w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent bg-white"
                    />
                    <label className="absolute left-4 top-3 text-secondary-DEFAULT transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary-900 bg-white px-2 pointer-events-none">
                      Phone Number (Optional)
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      {...step2Form.register("message")}
                      rows={5}
                      placeholder=" "
                      className="peer w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent bg-white resize-none"
                    />
                    <label className="absolute left-4 top-3 text-secondary-DEFAULT transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary-900 bg-white px-2 pointer-events-none">
                      Additional Details *
                    </label>
                    {step2Form.formState.errors.message && (
                      <p className="text-red-600 text-sm mt-1">
                        {step2Form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-red-600 text-sm" role="alert">
                      {submitError}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
