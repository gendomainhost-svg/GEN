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
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", { inquiryType, ...data });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setInquiryType(null);
      step1Form.reset();
      step2Form.reset();
    }, 3000);
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
          <p className="text-xl text-secondary-DEFAULT">
            Your inquiry has been submitted successfully. Our team will contact
            you shortly.
          </p>
        </motion.div>
      </Section>
    );
  }

  return (
    <Section id="contact" className="bg-primary-50 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Contact & Inquiry
        </h2>
        <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto">
          Let us know how GEN can help you achieve your goals
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Step Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step === 1
                  ? "bg-primary-900 text-white"
                  : "bg-primary-200 text-primary-900"
              }`}
            >
              1
            </div>
            <div className={`w-16 h-1 ${step === 2 ? "bg-primary-900" : "bg-primary-200"}`} />
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step === 2
                  ? "bg-primary-900 text-white"
                  : "bg-primary-200 text-primary-900"
              }`}
            >
              2
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
                How can GEN help you?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {inquiryOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <motion.button
                      key={option.type}
                      onClick={() => handleOptionSelect(option.type)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-primary-200 hover:border-primary-900 text-left group"
                    >
                      <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-900 transition-colors">
                        <Icon className="text-primary-700 group-hover:text-white transition-colors" size={28} />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-primary-900 mb-1">
                        {option.title}
                      </h4>
                      <p className="text-accent-700 font-semibold text-sm mb-2">
                        {option.subtitle}
                      </p>
                      <p className="text-secondary-DEFAULT text-sm">
                        {option.description}
                      </p>
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
                    className="flex items-center text-primary-900 hover:text-accent-700 font-medium transition-colors mb-4"
                  >
                    <ArrowLeft className="mr-2" size={18} />
                    Back
                  </button>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900">
                    Tell Us More
                  </h3>
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
