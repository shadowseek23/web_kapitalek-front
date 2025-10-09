"use client";
import breakpoints from "@/config/breakpoints.json";

import { Tabs, Tab } from "@heroui/tabs";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ArrowShortIcon } from "@/components/icons";

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import "photoswipe/dist/photoswipe.css";

import Image from "next/image";
import { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

export const PortfolioSwiper = (props: { galleryID: string, category: string }) => {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
        //   gallery: '#' + props.galleryID,
          children: 'a',
          pswpModule: () => import('photoswipe'),
          showHideAnimationType: 'zoom',
        });
        lightbox.init();
    
        return () => {
          lightbox.destroy();
          lightbox = null as any;
        };
      }, []);

    const PortfolioData = [
        {
            id: 1,
            image: "/portfolio/1.png",
            image_lightbox: "/portfolio/1.png",
            image_width: 1000,
            image_height: 1000,
            title: "Vazba modrou nití s lorem ipsum dolor sit amet",
            description: "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
            category: "all"
        },
        {
            id: 2,
            image: "/portfolio/2.png",
            image_lightbox: "/portfolio/2.png",
            image_width: 1000,
            image_height: 1000,

            
            title: "Vazba modrou nití s lorem ipsum dolor sit amet",
            description: "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
            category: "bakalarky"
        },
        {
            id: 3,
            image: "/portfolio/3.png",
            image_lightbox: "/portfolio/3.png",
            image_width: 1000,
            image_height: 1000,
            
            title: "Vazba modrou nití s lorem ipsum dolor sit amet",
            description: "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
            category: "diplomky"

        },
        {
            id: 4,
            image: "/portfolio/4.png",
            image_lightbox: "/portfolio/4.png",
            image_width: 1000,
            image_height: 1000,
            
            title: "Vazba modrou nití s lorem ipsum dolor sit amet",
            description: "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
            category: "knihy"
        },
        {
            id: 5,
            image: "/portfolio/1.png",
            image_lightbox: "/portfolio/1.png",
            image_width: 1000,
            image_height: 1000,
            
            title: "Vazba modrou nití s lorem ipsum dolor sit amet",
            description: "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
            category: "all"
        },
        {
            id: 6,
            image: "/portfolio/2.png",
            image_lightbox: "/portfolio/2.png",
            image_width: 1000,
            image_height: 1000,
            title: "Portfolio 6",
            category: "bakalarky"
        },
        {
            id: 7,
            image: "/portfolio/3.png",
            image_lightbox: "/portfolio/3.png",
            image_width: 1000,
            image_height: 1000,
            title: "Portfolio 7",
            category: "diplomky"
        },
    ]
	return (

    <AnimatePresence>
        <Swiper 
            id={props.galleryID}
            modules={[Pagination, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={1000}
            // loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={{
                    nextEl: ".my-button-next",
                    prevEl: ".my-button-prev",
                }}
            breakpoints={{
                [breakpoints.md_px]: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                [breakpoints.lg_px]: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                [breakpoints.xl_px]: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                [breakpoints["2xl_px"]]: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
            }}
            className="my-swiper pswp-gallery">
                
            {PortfolioData
                .filter(item => item.category === props.category || props.category === "all")
                .map((item, index) => (
                    <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <SwiperSlide 
                            key={item.id}
                            className="!flex flex-col gap-5 
                                min-h-[34rem]
                                my-8
                                p-8 px-8 border-1 border-stroke-light bg-white max-w-[32rem]
                                sm _hover:bg-beige-light hover:scale-102 !transition-all hover:shadow-[0px_4px_16px_rgba(0,0,0,0.1)]">

                                <a 
                                // href={item.image_lightbox}
                                data-pswp-width={item.image_width}
                                data-pswp-height={item.image_height}
                                key={props.galleryID + '-' + item.id}
                                target="_blank"
                                rel="noreferrer"
                                >
                                    <Image src={item.image} alt={item.title} width={item.image_width} height={item.image_height} />
                                </a>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg normal-case tracking-[0.05em] font-normal">{item.title}</h4>
                                    <div className="text-[1.1rem] font-[300] normal-case">{item.description}</div>
                                </div>
                        </SwiperSlide>
                    </motion.div>
                ))}

            <div className="navigation flex flex-row-reverse justify-between">
                <a className="my-button-next rotate-180 py-6 pt-8 hover:-translate-x-2 transition-all hover:cursor-pointer"><ArrowShortIcon /></a>
                <a className="my-button-prev  py-6 pt-8 hover:translate-x-2 transition-all hover:cursor-pointer"><ArrowShortIcon /></a>
            </div>
            <style>
                {`
                    .swiper-pagination {
                        top: 0;
                    }
                    .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background-color: #000;
                        border-radius: 50%;
                    }
                `}
            </style>
     
        </Swiper>
        
        </AnimatePresence>
	);
};