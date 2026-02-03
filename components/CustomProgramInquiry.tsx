"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Section from "./Section";

type DeliveryLocation = "us" | "in-country";
type FocusArea = "leadership" | "efficiency" | "service-delivery" | "governance";

const focusAreas = [
  { id: "leadership" as FocusArea, label: "Leadership" },
  { id: "efficiency" as FocusArea, label: "Operational Efficiency" },
  { id: "service-delivery" as FocusArea, label: "Service Delivery" },
  { id: "governance" as FocusArea, label: "Governance" },
];

export default function CustomProgramInquiry() {
  const [deliveryLocation, setDeliveryLocation] = useState<DeliveryLocation>("us");
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<FocusArea[]>([]);
  const [cohortSize, setCohortSize] = useState(15);

  const toggleFocusArea = (area: FocusArea) => {
    setSelectedFocusAreas((prev) =>
      prev.includes(area)
        ? prev.filter((a) => a !== area)
        : [...prev, area]
    );
  };

  return (
    <Section className="bg-primary-50 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Design a Bespoke Engagement
          </h2>
          <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto">
            Create a client-specific program tailored to your organization's
            unique needs and objectives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Delivery Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-md border border-primary-200"
            >
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4">
                Step 1: Delivery Location
              </h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setDeliveryLocation("us")}
                  className={`flex-1 px-6 py-4 rounded-lg font-semibold transition-all duration-300 min-h-[44px] ${
                    deliveryLocation === "us"
                      ? "bg-primary-900 text-white shadow-lg"
                      : "bg-primary-50 text-primary-900 border-2 border-primary-200 hover:border-primary-400"
                  }`}
                >
                  <MapPin className="inline mr-2" size={20} />
                  United States
                </button>
                <button
                  onClick={() => setDeliveryLocation("in-country")}
                  className={`flex-1 px-6 py-4 rounded-lg font-semibold transition-all duration-300 min-h-[44px] ${
                    deliveryLocation === "in-country"
                      ? "bg-primary-900 text-white shadow-lg"
                      : "bg-primary-50 text-primary-900 border-2 border-primary-200 hover:border-primary-400"
                  }`}
                >
                  <MapPin className="inline mr-2" size={20} />
                  In-Country
                </button>
              </div>
            </motion.div>

            {/* Step 2: Focus Areas */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-primary-200"
            >
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4">
                Step 2: Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => toggleFocusArea(area.id)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left min-h-[44px] ${
                      selectedFocusAreas.includes(area.id)
                        ? "bg-accent-100 text-accent-900 border-2 border-accent-700"
                        : "bg-primary-50 text-primary-900 border-2 border-primary-200 hover:border-primary-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{area.label}</span>
                      {selectedFocusAreas.includes(area.id) && (
                        <CheckCircle2 className="text-accent-700" size={20} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Cohort Size */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md border border-primary-200"
            >
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4">
                Step 3: Estimated Cohort Size
              </h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={cohortSize}
                  onChange={(e) => setCohortSize(Number(e.target.value))}
                  className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer accent-accent-700"
                />
                <div className="flex justify-between text-sm text-secondary-DEFAULT">
                  <span>5 participants</span>
                  <span className="font-semibold text-primary-900 text-lg">
                    {cohortSize} participants
                  </span>
                  <span>50+ participants</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Draft Concept Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-8 h-fit"
          >
            <div className="bg-primary-900 rounded-xl p-6 md:p-8 shadow-xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">
                Draft Concept
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white/70 text-sm mb-1">Delivery Location</p>
                  <p className="font-semibold">
                    {deliveryLocation === "us"
                      ? "United States"
                      : "In-Country Delivery"}
                  </p>
                </div>

                <div>
                  <p className="text-white/70 text-sm mb-1">Focus Areas</p>
                  {selectedFocusAreas.length > 0 ? (
                    <ul className="space-y-1">
                      {selectedFocusAreas.map((area) => {
                        const focusArea = focusAreas.find((a) => a.id === area);
                        return (
                          <li key={area} className="flex items-center">
                            <CheckCircle2 className="text-accent-500 mr-2" size={16} />
                            <span>{focusArea?.label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-white/50 italic">Select focus areas</p>
                  )}
                </div>

                <div>
                  <p className="text-white/70 text-sm mb-1">Cohort Size</p>
                  <p className="font-semibold flex items-center">
                    <Users className="mr-2" size={20} />
                    {cohortSize} participants
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-white/90 text-sm mb-4">
                  Ready to proceed? Submit your inquiry and our team will
                  develop a detailed proposal.
                </p>
                <button className="w-full bg-accent-700 hover:bg-accent-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-h-[44px]">
                  Request Proposal
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
