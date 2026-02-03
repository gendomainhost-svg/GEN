"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import Section from "./Section";

export default function RecognitionExcellence() {
  return (
    <Section className="bg-primary-900 py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900/20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Honoring Institutional Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Recognizing leaders and organizations that demonstrate outstanding
              accountability, innovation, and impact in service delivery
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-accent-500 text-accent-500 rounded-lg font-semibold text-lg hover:bg-accent-500 hover:text-primary-900 transition-all duration-300 min-h-[44px]"
            >
              Nominate an Institution
            </motion.button>
          </motion.div>

          {/* 3D Trophy/Certificate Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Floating Trophy */}
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
              {/* Certificate/Trophy Base */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96 bg-gradient-to-br from-accent-600 to-accent-800 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Certificate Paper */}
                <div className="absolute inset-4 bg-white rounded-xl shadow-inner">
                  <div className="p-8 text-center h-full flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <Award className="text-accent-700 mx-auto" size={64} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary-900 mb-2">
                      Excellence Award
                    </h3>
                    <p className="text-secondary-DEFAULT text-sm">
                      Outstanding Achievement in Public Service
                    </p>
                    <div className="mt-6 pt-6 border-t border-primary-200 w-full">
                      <p className="font-serif text-lg text-primary-900 font-bold">
                        GEN
                      </p>
                      <p className="text-xs text-secondary-DEFAULT">
                        Global Efficiency Network
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-400 via-accent-600 to-accent-400" />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-400 via-accent-600 to-accent-400" />
              </div>

              {/* Shine Effect */}
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
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
            </motion.div>

            {/* Floating Accent Icons */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0"
            >
              <Trophy className="text-accent-400 opacity-50" size={48} />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0"
            >
              <Award className="text-accent-400 opacity-50" size={40} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
