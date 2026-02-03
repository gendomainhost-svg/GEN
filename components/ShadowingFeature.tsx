"use client";

import { motion } from "framer-motion";
import { Eye, Network, Target, CheckCircle2, ArrowRight } from "lucide-react";

const journeySteps = [
  {
    id: "1",
    title: "Preparation",
    description: "Pre-departure orientation",
    icon: CheckCircle2,
  },
  {
    id: "2",
    title: "Immersion",
    description: "On-site shadowing in the US",
    icon: Eye,
  },
  {
    id: "3",
    title: "Synthesis",
    description: "Debriefing and action planning",
    icon: Network,
  },
  {
    id: "4",
    title: "Implementation",
    description: "Post-return advisory support",
    icon: Target,
  },
];

export default function ShadowingFeature() {
  return (
    <div className="bg-blue-50 rounded-2xl p-8 md:p-12 my-12 border border-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          Real-World Immersion
        </h2>
        <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
          Participants observe and engage with high-performing institutions in
          real time
        </p>
      </motion.div>

      {/* Journey Map / Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent-700 rounded-full border-4 border-blue-50 z-10" />

                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-blue-200 text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-700" size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-DEFAULT text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps (mobile) */}
                {index < journeySteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="text-blue-300" size={24} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Eye className="text-blue-700" size={24} />
          </div>
          <h4 className="font-semibold text-primary-900 mb-2">Observation</h4>
          <p className="text-sm text-secondary-DEFAULT">
            Direct observation of operational excellence
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Network className="text-blue-700" size={24} />
          </div>
          <h4 className="font-semibold text-primary-900 mb-2">Networking</h4>
          <p className="text-sm text-secondary-DEFAULT">
            Connect with practitioners and leaders
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Target className="text-blue-700" size={24} />
          </div>
          <h4 className="font-semibold text-primary-900 mb-2">Action</h4>
          <p className="text-sm text-secondary-DEFAULT">
            Translate insights into implementation
          </p>
        </div>
      </div>
    </div>
  );
}
