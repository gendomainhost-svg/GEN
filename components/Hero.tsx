"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900"
    >
      {/* Background Network Visualization */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* World Map Outline */}
          <path
            d="M200 300 Q300 250 400 300 T600 300 T800 300 T1000 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent-500"
          />
          <path
            d="M200 500 Q300 450 400 500 T600 500 T800 500 T1000 500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent-500"
          />
          {/* Connecting Nodes */}
          {[200, 400, 600, 800, 1000].map((x, i) => (
            <g key={i}>
              <circle
                cx={x}
                cy={300}
                r="8"
                fill="currentColor"
                className="text-accent-500"
              >
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
              </circle>
              <circle
                cx={x}
                cy={500}
                r="8"
                fill="currentColor"
                className="text-accent-500"
              >
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5 + 1}s`}
                />
              </circle>
              <line
                x1={x}
                y1={300}
                x2={x}
                y2={500}
                stroke="currentColor"
                strokeWidth="1"
                className="text-accent-500/30"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Global Efficiency Network
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-accent-500 font-medium mb-8"
          >
            Advancing Institutional Performance Through Experiential Learning
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl"
          >
            Global Efficiency Network (GEN) is a U.S.-based organization that
            designs and delivers high-standard capacity-building, consulting,
            and experiential learning programs for institutions and
            professionals worldwide. Headquartered in Alabama, GEN leverages the
            depth, innovation, and operational excellence of the United States
            to help organizations strengthen leadership, efficiency, and service
            delivery.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#services"
              className="group relative bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center shadow-lg min-h-[44px]"
            >
              Explore Programs
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <Link
              href="#consulting"
              className="group relative bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center min-h-[44px]"
            >
              <Briefcase className="mr-2" size={20} />
              Advisory Solutions
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-900/30 to-primary-900 pointer-events-none" />
    </section>
  );
}

