"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import OptimizedPicture from "@/components/OptimizedPicture";
import { heroImages } from "@/lib/images";

function preloadImage(pngPath: string) {
  const img = new window.Image();
  img.src = pngPath.replace(/\.png$/i, ".webp");
}

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const src = heroImages[currentImageIndex];

  const advance = useCallback(() => {
    setCurrentImageIndex((prev) => {
      const next = (prev + 1) % heroImages.length;
      preloadImage(heroImages[next]);
      return next;
    });
  }, []);

  useEffect(() => {
    preloadImage(heroImages[1]);
    const interval = setInterval(advance, 24000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <section
      id="home"
      className="border-b border-primary-200 bg-white pt-24 md:pt-28"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:min-h-[calc(100vh-7rem)] lg:max-h-[820px]">
        <div className="flex flex-col justify-center px-6 py-14 md:px-10 lg:px-12 lg:py-20 animate-fade-in">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-primary-500">
            U.S.-Based Institutional Learning
          </p>

          <h1 className="font-serif text-[clamp(1.5rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-primary-900 sm:whitespace-nowrap">
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
              href="/programs"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-accent-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-800"
            >
              Explore Programs
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/consulting"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-primary-300 px-6 py-3 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
            >
              Advisory Solutions
            </Link>
          </div>
        </div>

        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
          <OptimizedPicture
            key={src}
            src={src}
            alt="GEN programs and institutional learning"
            fill
            className="object-cover object-center animate-hero-fade"
            priority={currentImageIndex === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="pointer-events-none absolute inset-0 z-20 bg-primary-900/5 lg:bg-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-16 bg-gradient-to-r from-white to-transparent lg:block"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
