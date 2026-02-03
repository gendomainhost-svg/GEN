"use client";

import { motion } from "framer-motion";
import { Globe2, Loader2 } from "lucide-react";
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
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          A Hub-and-Network Model
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Combining a lean core team in the US with a global network of partner
          institutions and experts
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* World Map - Lazy loaded */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-primary-800 rounded-xl overflow-hidden">
          <MapComponent />
        </div>

        {/* Stats or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Globe2 className="text-accent-500" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">Global Network</h3>
            <p className="text-white/70">
              Partner institutions across continents
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Globe2 className="text-accent-500" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">
              Knowledge Exchange
            </h3>
            <p className="text-white/70">
              Continuous learning and collaboration
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Globe2 className="text-accent-500" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">
              Local Expertise
            </h3>
            <p className="text-white/70">
              Contextualized solutions for each region
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
