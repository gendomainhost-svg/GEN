"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function HomeRecognition() {
  return (
    <section className="bg-primary-900 py-14 md:py-18">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Award className="text-accent-500 mb-4" size={40} />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Honoring Institutional Excellence
          </h2>
          <p className="text-white/90 mb-6">
            We recognize leaders and organizations that demonstrate outstanding
            accountability, innovation, and impact.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-transparent border-2 border-accent-500 text-accent-500 rounded-lg font-semibold hover:bg-accent-500 hover:text-primary-900 transition-all min-h-[44px]"
          >
            Nominate an Institution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
