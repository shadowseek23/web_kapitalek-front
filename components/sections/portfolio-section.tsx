"use client";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioSwiper } from "../portfolio-swiper";
import { useState } from "react";



export const PortfolioSection = () => {
    const isMobile = typeof window !== "undefined" &&
        window.matchMedia("(max-width: 768px)").matches;
    const leftInitial = isMobile ? { opacity: 0, y: 24 } : { opacity: 0, x: -32 };
    const rightInitial = isMobile ? { opacity: 0, y: 24 } : { opacity: 0, x: 32 };

    const categories = [
        {
            key: "all",
            title: "Vše",
            active: true
        },
        {
            key: "diplomky",
            title: "Diplomky"
        },
        {
            key: "bakalarky",
            title: "Bakalářky"
        },
        {
            key: "knihy",
            title: "Knihy"
        },
    ]
    const [currentCategory, setCurrentCategory] = useState("all");

	return (
        <section id="portfolio" className="section py-section border-default-b">
        <div className="container">
            <motion.h2
                className="h2 mb-16"
                initial={leftInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Portfolio
            </motion.h2>

            {/* categories */}
            <motion.div
                className="flex flex-row  gap-4 mb-8 flex-wrap"
                initial={leftInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {categories.map((category) => {
                    const active = category.key === currentCategory;
                    return (
                        <motion.div
                            className="grow-1 basis-[8rem] 
                                md:grow-0"
                            key={category.key} 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                        >
                            <button 
                                className={`w-full max-w-[calc(180rem/16)] px-6 py-2.5 hover:bg-beige hover:text-white hover:cursor-pointer
                                    text-base
                                    ${active ? 'bg-black text-white' : 'border-b-1 border-stroke-light  text-black'}`}
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
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <PortfolioSwiper galleryID="portfolio-swiper" category={currentCategory} />
            </motion.div>
		</div>
        </section>
	);
};

