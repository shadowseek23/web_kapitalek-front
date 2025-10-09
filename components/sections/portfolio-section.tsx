"use client";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioSwiper } from "../portfolio-swiper";
import { useState } from "react";



export const PortfolioSection = () => {
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
			<h2 className="mb-16">Portfolio</h2>
            
            {/* <Tabs variant="underlined" aria-label="Options" className="mb-16 max-w-40">
                {categories.map((category) => (
                    <Tab key={category.key} value={category.key}>{category.title}</Tab>
                ))}
            </Tabs> */}

            {/* categories */}
            <div className="flex flex-row gap-4 mb-8 flex-wrap">
                {categories.map((category) => {
                    const active = category.key === currentCategory;
                    return (
                        <motion.div 
                            key={category.key} 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                        >
                            <button 
                                className={`basis-[8rem] px-6 py-2.5 hover:bg-beige hover:text-white hover:cursor-pointer
                                    text-base
                                    ${active ? 'bg-black text-white' : 'border-b-1 border-stroke-light  text-black'}`}
                                onClick={() => setCurrentCategory(category.key)}
                            >
                                {category.title}
                            </button>
                        </motion.div>
                    );
                })}
            </div>
            {/* swiper */}
            <PortfolioSwiper galleryID="portfolio-swiper" category={currentCategory} />
		</div>
        </section>
	);
};

