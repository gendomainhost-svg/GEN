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

// Floating particles for the hero
function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80 - Math.random() * 120],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, 0.6, 0],
            scale: [0, 1 + Math.random(), 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 20000);
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
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900"
    >
      {/* Photo background with zoom effect */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt=""
              fill
              className="object-cover brightness-110"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-900/50 to-primary-900/70 pointer-events-none" />

      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(185,28,28,0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse at 80% 50%, rgba(185,28,28,0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 20%, rgba(185,28,28,0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse at 20% 50%, rgba(185,28,28,0.15) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <HeroParticles />

      {/* Content */}
      <div className="relative z-10 w-full pl-6 md:pl-10 lg:pl-12 pr-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-left"
        >
          {/* Subtle pre-title */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            U.S.-Based Institutional Learning
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 leading-tight gradient-text"
          >
            Global Efficiency Network
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-white font-light italic mb-6"
          >
            Advancing Institutional Performance Through Experiential Learning
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/85 mb-10 leading-relaxed max-w-2xl"
          >
            Global Efficiency Network (GEN) is a U.S.-based organization that
            designs and delivers high-standard capacity-building, consulting, and
            experiential learning programs for institutions and professionals
            worldwide.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link
              href="#services"
              className="group relative bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,28,28,0.4)] hover:scale-105 flex items-center justify-center shadow-lg min-h-[44px] overflow-hidden"
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative">Explore Programs</span>
              <ArrowRight
                className="ml-2 relative group-hover:translate-x-1 transition-transform"
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/60"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
