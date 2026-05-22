"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  "/images/Gemini_Generated_Image_4tio8o4tio8o4tio.png",
  "/images/Gemini_Generated_Image_58ix8t58ix8t58ix.png",
  "/images/Gemini_Generated_Image_7dgcel7dgcel7dgc.png",
  "/images/Gemini_Generated_Image_ecocpeecocpeecoc.png",
  "/images/Gemini_Generated_Image_gg0zeogg0zeogg0z.png",
  "/images/Gemini_Generated_Image_maxnbrmaxnbrmaxn.png",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 24000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="border-b border-primary-200 bg-white pt-24 md:pt-28"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:min-h-[calc(100vh-7rem)] lg:max-h-[820px]">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center px-6 py-14 md:px-10 lg:px-12 lg:py-20"
        >
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-primary-500">
            U.S.-Based Institutional Learning
          </p>

          <h1 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-primary-900 whitespace-nowrap">
            Global Efficiency Network
          </h1>

          <p className="mt-6 max-w-md font-serif text-lg md:text-xl font-normal italic leading-relaxed text-primary-700">
            Advancing Institutional Performance Through Experiential Learning
          </p>

          <p className="mt-5 max-w-md text-base leading-relaxed text-secondary-DEFAULT">
            GEN designs and delivers capacity-building, consulting, and
            experiential learning programs for institutions and professionals
            worldwide.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-800"
            >
              Explore Programs
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center justify-center rounded-md border border-primary-300 px-6 py-3 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
            >
              Advisory Solutions
            </Link>
          </div>
        </motion.div>

        {/* Photography */}
        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt=""
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
          <div
            className="pointer-events-none absolute inset-0 bg-primary-900/5 lg:bg-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-white to-transparent lg:block"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
