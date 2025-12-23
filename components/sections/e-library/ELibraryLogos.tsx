"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const libraryLogos = [
  {
    name: "Ankara University",
    image: "/images/ANKUNI.png",
    url: "https://ankara.edu.tr",
  },
  {
    name: "arXiv",
    image: "/images/ARXIV.jpg",
    url: "https://arxiv.org",
  },
  {
    name: "CORE",
    image: "/images/CORE.png",
    url: "https://core.ac.uk",
  },
  {
    name: "DOAJ",
    image: "/images/DOAJ.jpg",
    url: "https://doaj.org",
  },
  {
    name: "ERIC",
    image: "/images/ERIC.png",
    url: "https://eric.ed.gov",
  },
  {
    name: "MIT OpenCourseWare",
    image: "/images/MIT-OCW.png",
    url: "https://ocw.mit.edu",
  },
  {
    name: "ODTÜ METU",
    image: "/images/ODTUMETU.jpg",
    url: "https://www.metu.edu.tr",
  },
  {
    name: "Open Textbook Library",
    image: "/images/OTL.jpg",
    url: "https://open.umn.edu/opentextbooks",
  },
  {
    name: "SGH",
    image: "/images/SGH.png",
    url: "https://www.sgh.waw.pl",
  },
];

export default function ELibraryLogos() {
  const t = useTranslations("eLibrary.logos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % libraryLogos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + libraryLogos.length) % libraryLogos.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % libraryLogos.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // For mobile/tablet: show grid
  if (isMobile) {
    return (
      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {libraryLogos.map((logo, index) => (
              <motion.a
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center h-32 md:h-40"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={200}
                  height={100}
                  className="object-contain max-w-full max-h-full"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // For desktop: show carousel
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="p-12 md:p-16"
              >
                <a
                  href={libraryLogos[currentIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col items-center justify-center min-h-[300px]">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg mb-6 w-full max-w-md">
                      <Image
                        src={libraryLogos[currentIndex].image}
                        alt={libraryLogos[currentIndex].name}
                        width={400}
                        height={200}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {libraryLogos[currentIndex].name}
                    </h3>
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous logo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next logo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {libraryLogos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-3 h-3 bg-blue-600 dark:bg-blue-400"
                    : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to logo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid View for Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("allLibraries")}
          </h3>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
            {libraryLogos.map((logo, index) => (
              <motion.a
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center h-32"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={150}
                  height={80}
                  className="object-contain max-w-full max-h-full"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

