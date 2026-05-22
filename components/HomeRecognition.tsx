"use client";

import { motion } from "framer-motion";
import { Award, Trophy, CheckCircle2 } from "lucide-react";

const recognitionFocus = [
  "Institutional reform and performance improvement",
  "Leadership excellence",
  "Citizen- or client-centered service delivery",
  "Innovation and operational impact",
];

export default function HomeRecognition() {
  return (
    <section className="bg-gradient-to-b from-white to-primary-50 py-16 md:py-24 relative overflow-hidden border-y border-primary-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Award className="text-accent-600 mb-4 mx-auto lg:mx-0" size={40} />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Honoring Institutional Leadership
            </h2>
            <p className="text-secondary-DEFAULT mb-6">
              GEN recognizes institutions and leaders who demonstrate outstanding
              commitment to efficiency, innovation, accountability, and service
              delivery.
            </p>

            {/* Recognition Focus Items */}
            <ul className="space-y-2 mb-6 text-left">
              {recognitionFocus.map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <CheckCircle2
                    className="text-accent-500 flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-primary-800 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-primary-500 text-sm italic mb-6">
              Recognition is merit-based, non-political, and grounded in
              demonstrable outcomes.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border-2 border-accent-600 text-accent-700 rounded-lg font-semibold hover:bg-accent-600 hover:text-white transition-all min-h-[44px]"
            >
              Nominate an Institution
            </motion.button>
          </motion.div>

          {/* Certificate animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center py-8"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 bg-gradient-to-br from-accent-600 to-accent-800 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-3 bg-white rounded-xl shadow-inner">
                  <div className="p-6 text-center h-full flex flex-col items-center justify-center">
                    <div className="mb-3">
                      <Award className="text-accent-700 mx-auto" size={48} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary-900 mb-1">
                      Excellence Award
                    </h3>
                    <p className="text-secondary-DEFAULT text-xs">
                      Outstanding Achievement in Public Service
                    </p>
                    <div className="mt-4 pt-4 border-t border-primary-200 w-full">
                      <p className="font-serif text-base text-primary-900 font-bold">
                        GEN
                      </p>
                      <p className="text-xs text-secondary-DEFAULT">
                        Global Efficiency Network
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-400 via-accent-600 to-accent-400" />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-400 via-accent-600 to-accent-400" />
              </div>
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="absolute top-4 right-4 lg:right-8"
            >
              <Trophy className="text-accent-400 opacity-50" size={36} />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-4 lg:left-8"
            >
              <Award className="text-accent-400 opacity-50" size={28} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
