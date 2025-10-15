"use client";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioSwiper } from "./portfolio-swiper";
import { useState } from "react";



export const Portfolio = () => {
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
        <section className="section py-section border-default-b">
		<div className="container">
			<h2 className="mb-16">Portfolio</h2>

            {/* categories */}
            <div className="flex flex-row gap-4 mb-8">
                {categories.map((category) => {
                    const active = category.key === currentCategory;
                    return (
                        <AnimatePresence>
                        <motion.div key={category.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <button 
                        className={`px-6 py-2.5 hover:bg-beige hover:text-white hover:cursor-pointer
                            text-base
                            ${active ? 'bg-black text-white' : 'border-b-1 border-stroke-light  text-black'}`}
                        key={category.key}
                        onClick={() => setCurrentCategory(category.key)}
                        >
                        {category.title}
                    </button>
                    </motion.div>
                    </AnimatePresence>
                )})}
            </div>
            {/* swiper */}
            <PortfolioSwiper galleryID="portfolio-swiper" category={currentCsategory} />
		</div>
        </section>
	);
};

