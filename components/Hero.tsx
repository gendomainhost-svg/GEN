"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Photo background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary-900/75 pointer-events-none" />

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
            U.S.-based capacity-building, consulting, and experiential learning
            for institutions worldwide. Headquartered in Alabama.
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
              href="/consulting"
              className="group relative bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center min-h-[44px]"
            >
              <Briefcase className="mr-2" size={20} />
              Advisory Solutions
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
