"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAbout() {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4"
        >
          Our Approach
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-secondary-DEFAULT leading-relaxed mb-8"
        >
          Experiential learning: real institutions, practitioners, and
          decision-making environments. We connect participants with U.S.
          expertise to observe, learn, and adapt proven practices.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center text-accent-700 hover:text-accent-600 font-semibold group"
          >
            Learn more about GEN
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
