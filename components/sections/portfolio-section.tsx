"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { PortfolioSwiper } from "../portfolio-swiper";

export const PortfolioSection = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  const leftInitial = isMobile ? { opacity: 0, y: 24 } : { opacity: 0, x: -32 };
  const rightInitial = isMobile ? { opacity: 0, y: 24 } : { opacity: 0, x: 32 };

  const categories = [
    {
      key: "all",
      title: "Vše",
      active: true,
    },
    {
      key: "diplomky",
      title: "Diplomky",
    },
    {
      key: "bakalarky",
      title: "Bakalářky",
    },
    {
      key: "knihy",
      title: "Knihy",
    },
  ];
  const [currentCategory, setCurrentCategory] = useState("all");

  return (
    <section className="section py-section border-default-b" id="portfolio">
      <div className="container">
        <motion.h2
          className="h2 mb-16"
          initial={leftInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          Portfolio
        </motion.h2>

        {/* categories */}
        <motion.div
          className="flex flex-row  gap-4 mb-8 flex-wrap"
          initial={leftInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          {categories.map((category) => {
            const active = category.key === currentCategory;

            return (
              <motion.div
                key={category.key}
                animate={{ opacity: 1 }}
                className="grow-1 basis-[8rem] 
                                md:grow-0"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              >
                <button
                  className={`w-full max-w-[calc(180rem/16)] px-6 py-2.5 hover:bg-beige hover:text-white hover:cursor-pointer
                                    text-base
                                    ${active ? "bg-black text-white" : "border-b-1 border-stroke-light  text-black"}`}
                  onClick={() => setCurrentCategory(category.key)}
                >
                  {category.title}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
        {/* swiper */}
        <motion.div
          initial={rightInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <PortfolioSwiper
            category={currentCategory}
            galleryID="portfolio-swiper"
          />
        </motion.div>
      </div>
    </section>
  );
};
