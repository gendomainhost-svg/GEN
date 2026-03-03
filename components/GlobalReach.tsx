"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Section from "./Section";

// Lazy load the entire map component to improve initial page load
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => <MapLoader />,
});

// Loading component for map
function MapLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-primary-800 rounded-xl">
      <div className="text-center">
        <Loader2 className="animate-spin text-accent-500 mx-auto mb-4" size={32} />
        <p className="text-white/70 text-sm">Loading map...</p>
      </div>
    </div>
  );
}



export default function GlobalReach() {
  return (
    <Section className="bg-primary-900 text-white py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
          A Hub-and-Network Model
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Lean US core with a global network of partner institutions and experts.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] bg-primary-800 rounded-xl overflow-hidden">
          <MapComponent />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/80 mt-8 text-sm md:text-base"
        >
          Global Network · Knowledge Exchange · Local Expertise
        </motion.p>
      </div>
    </Section>
  );
}
