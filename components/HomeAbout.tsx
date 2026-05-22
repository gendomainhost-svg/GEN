"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const workWithGEN = [
  "Apply for an open-enrollment program",
  "Request a commissioned or customized program",
  "Engage GEN for consulting and advisory services",
  "Partner with GEN as an academic, institutional, or service provider",
];

export default function HomeAbout() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-4"
            >
              Our Methodology
            </motion.span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-secondary-DEFAULT leading-relaxed mb-6">
              GEN&apos;s approach is grounded in experiential learning. Rather
              than theory-heavy instruction, our programs emphasize exposure to
              real institutions, practitioners, systems, and decision-making
              environments. Participants engage directly with U.S. institutions
              and professionals to observe, learn, and adapt proven practices to
              their own operational contexts.
            </p>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center text-accent-700 hover:text-accent-600 font-semibold group animated-underline"
              >
                Learn more about GEN
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Work With GEN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 md:p-8 border border-primary-200 shadow-lg hover:shadow-xl transition-shadow duration-500"
          >
            <h3 className="font-serif text-2xl font-bold text-primary-900 mb-5">
              Work With GEN
            </h3>
            <ul className="space-y-4">
              {workWithGEN.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle2
                      className="text-accent-700 flex-shrink-0 mt-0.5 group-hover:text-accent-600 transition-colors"
                      size={20}
                    />
                  </motion.div>
                  <span className="text-secondary-DEFAULT leading-relaxed group-hover:text-primary-900 transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center mt-6 bg-accent-700 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(185,28,28,0.3)] shadow-md text-sm overflow-hidden relative group"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">Get Started</span>
                <ArrowRight className="ml-2 relative" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
