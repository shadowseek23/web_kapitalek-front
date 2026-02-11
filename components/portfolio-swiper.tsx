"use client";
import breakpoints from "@/config/breakpoints.json";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/dist/photoswipe.css";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowShortIcon } from "@/components/icons";

export const PortfolioSwiper = (props: {
  galleryID: string;
  category: string;
}) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      //   gallery: '#' + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "zoom",
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
      description:
        "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
      category: "all",
    },
    {
      id: 2,
      image: "/portfolio/2.png",
      image_lightbox: "/portfolio/2.png",
      image_width: 1000,
      image_height: 1000,

      title: "Vazba modrou nití s lorem ipsum dolor sit amet",
      description:
        "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
      category: "bakalarky",
    },
    {
      id: 3,
      image: "/portfolio/3.png",
      image_lightbox: "/portfolio/3.png",
      image_width: 1000,
      image_height: 1000,

      title: "Vazba modrou nití s lorem ipsum dolor sit amet",
      description:
        "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
      category: "diplomky",
    },
    {
      id: 4,
      image: "/portfolio/4.png",
      image_lightbox: "/portfolio/4.png",
      image_width: 1000,
      image_height: 1000,

      title: "Vazba modrou nití s lorem ipsum dolor sit amet",
      description:
        "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
      category: "knihy",
    },
    {
      id: 5,
      image: "/portfolio/1.png",
      image_lightbox: "/portfolio/1.png",
      image_width: 1000,
      image_height: 1000,

      title: "Vazba modrou nití s lorem ipsum dolor sit amet",
      description:
        "Vazba bakalářských, diplomových a dalších školních prací - nabízíme to a zase tohle",
      category: "all",
    },
    {
      id: 6,
      image: "/portfolio/2.png",
      image_lightbox: "/portfolio/2.png",
      image_width: 1000,
      image_height: 1000,
      title: "Portfolio 6",
      category: "bakalarky",
    },
    {
      id: 7,
      image: "/portfolio/3.png",
      image_lightbox: "/portfolio/3.png",
      image_width: 1000,
      image_height: 1000,
      title: "Portfolio 7",
      category: "diplomky",
    },
  ];

  return (
    <AnimatePresence>
      <Swiper
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
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        className="my-swiper pswp-gallery"
        id={props.galleryID}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".my-button-next",
          prevEl: ".my-button-prev",
        }}
        slidesPerGroup={1}
        slidesPerView={1}
        spaceBetween={22}
        speed={1000}
        // loop={true}
        pagination={{
          clickable: true,
        }}
      >
        <div className="swiper-wrapper">
          {PortfolioData.filter(
            (item) =>
              item.category === props.category || props.category === "all",
          ).map((item, index) => (
            <motion.div
              key={item.id}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
            >
              <SwiperSlide key={item.id} className="p-4 md:p-2 lg:p-0">
                <div
                  className="__slide-wrapper 
                                    !flex flex-col gap-5 
                                    min-h-[34rem]
                                    my-8
                                    p-8 px-8 border-1 border-stroke-light bg-white max-w-[32rem]
                                    sm _hover:bg-beige-light hover:scale-102 !transition-all hover:shadow-[0px_4px_16px_rgba(0,0,0,0.1)]"
                >
                  <a
                    href={item.image_lightbox || item.image}
                    key={props.galleryID + "-" + item.id}
                    data-pswp-height={item.image_height}
                    data-pswp-width={item.image_width}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      alt={item.title}
                      height={item.image_height}
                      src={item.image}
                      width={item.image_width}
                    />
                  </a>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg normal-case tracking-[0.05em] font-normal">
                      {item.title}
                    </h4>
                    <div className="text-[1.1rem] font-[300] normal-case">
                      {item.description}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </motion.div>
          ))}
        </div>

        <div
          className="_arrow-navigation
                flex flex-row-reverse justify-between items-center
                h-[3rem] mt-[2rem]
                
            "
        >
          <button
            type="button"
            className="my-button-next
                    z-10 rotate-180 8 hover:-translate-x-2 transition-all 
                    hover:cursor-pointer
                "
          >
            <ArrowShortIcon height="24" />
          </button>
          <button
            type="button"
            className="my-button-prev
                     z-100 hover:translate-x-2 transition-all 
                    hover:cursor-pointer
                "
          >
            <ArrowShortIcon height="24" />
          </button>
        </div>
        <style>
          {`
                    .swiper-pagination {
                        margin-bottom: 3rem;
                        height: 3rem;
                        align-items: center;
                        display: flex;
                        justify-content: center;
                    }
                    .swiper-pagination-bullet {
                        width: 0.9rem;
                        height: 0.9rem;
                        background-color: white;
                        border: 1px solid rgba(0,0,0,0.8);
                        border-radius: 50%;
                        opacity: 0.3;
                    }
                    .swiper-pagination-bullet:hover {
                        background-color: var(--color-beige);
                        border: 1px solid rgba(0,0,0,1);
                        opacity: 0.6;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: var(--color-black);
                        border: 1px solid var(--color-black);
                        opacity: 0.8;
                    }
                    @media (min-width: 768px) {
                        .swiper-pagination {
                            margin-bottom: -0.4rem;
                        }
                    }
                    .swiper-button-disabled {
                        opacity: 0.2;
                        cursor: default;
                        
                    }
                    .swiper-button-disabled:hover > *, 
                    .swiper-button-disabled:hover {
                        transform: none !important;
                        translate: none !important;
                    }
                `}
        </style>
      </Swiper>
    </AnimatePresence>
  );
};
