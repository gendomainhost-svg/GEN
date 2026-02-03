"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Section from "./Section";

const programImages = [
  "/images/Gemini_Generated_Image_4tio8o4tio8o4tio.png",
  "/images/Gemini_Generated_Image_58ix8t58ix8t58ix.png",
  "/images/Gemini_Generated_Image_6mz2ma6mz2ma6mz2.png",
  "/images/Gemini_Generated_Image_7dgcel7dgcel7dgc.png",
  "/images/Gemini_Generated_Image_azs23aazs23aazs2.png",
  "/images/Gemini_Generated_Image_ecocpeecocpeecoc.png",
  "/images/Gemini_Generated_Image_ewc1aewc1aewc1ae.png",
  "/images/Gemini_Generated_Image_fxw92ffxw92ffxw9.png",
  "/images/Gemini_Generated_Image_gg0zeogg0zeogg0z.png",
  "/images/Gemini_Generated_Image_gno6qlgno6qlgno6.png",
  "/images/Gemini_Generated_Image_maxnbrmaxnbrmaxn.png",
  "/images/Gemini_Generated_Image_obnjl2obnjl2obnj.png",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === programImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? programImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === programImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <Section className="bg-white py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Program Gallery
        </h2>
        <p className="text-lg text-secondary-DEFAULT">
          Experience our programs through real moments and achievements
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Image Slider Container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={programImages[currentIndex]}
                alt={`Program image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-900/80 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {programImages.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-6 flex justify-center gap-2 overflow-x-auto pb-2">
          {programImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-accent-700 shadow-lg scale-110"
                  : "border-primary-200 hover:border-primary-400 opacity-70 hover:opacity-100"
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
