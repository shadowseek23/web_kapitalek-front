"use client";

import type { MouseEvent } from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { AboutImage } from "@/components/about-image";

export const AboutSection = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  const leftInitial = isMobile ? { opacity: 0, y: 24 } : { opacity: 0, x: -32 };
  const rightInitial = isMobile ? { opacity: 0, y: 24 } : { opacity: 0, x: 32 };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 18, mass: 0.8 });
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 18, mass: 0.8 });
  const floatX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const floatY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const floatXSoft = useTransform(smoothX, [-1, 1], [-8, 8]);
  const floatYSoft = useTransform(smoothY, [-1, 1], [-6, 6]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="section
            py-section border-default-b 
            gap-y-[8rem]
        "
      id="o-nas"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        className="container _o-projektu
                flex flex-col-reverse items-center gap-y-vertical-gap-small
                md:flex-col-reverse
                lg:grid lg:grid-cols-[var(--grid-cols-narrow-right)]
                lg:gap-x-horizontal-gap
                "
      >
        <motion.div
          className="_left-column _text                    
                        max-w-tablet-text-max-w mx-auto"
          initial={leftInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <h2
            className="_headline
                        h2 mb-h2
                    "
          >
            O projektu
          </h2>
          <div
            className="_content
                        text-base
                    "
          >
            <p>
              Jsme tým zkušených knihařů, kteří se již dlouhá léta specializují
              na ruční vazby knih, a jiných dokumentů a tiskovin.
            </p>
            <p>
              Zaměřujeme se na vytváření kvalitních vazeb, které jsme schopni
              plně přizpůsobit Vašim přáním a potřebám.
            </p>
            <p>
              Naše knihařské techniky jsou založeny na tradičních metodách,
              které jsou kombinovány s moderními technologiemi tak, abychom
              docílili vazeb, jež jsou kvalitní, odolné a esteticky příjemé.
            </p>
            <p>
              Služby, které poskytujeme zahrnují vazbu knih, časopisů,
              zápisníků, fotoalb a dalších dokumentů. Zvládneme také opravy
              poškozených knižních vazeb. Rádi Vám poradíme nejlepší přístup,
              který bude vyhovovat Vašim potřebám a poskytneme Vám profesionální
              a přátelskou službu.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="_right-column my-4 xs:my-0 xs:mb-10"
          initial={rightInitial}
          style={{ x: floatX, y: floatY }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <AboutImage
            extraClassName=""
            imageSrc="/content/unsplash-hromadka-knih.jpg"
            positionInLayout="right"
          />
        </motion.div>
      </div>
      {/* Mobile separator */}
      <div className="block w-full">
        <div className="mx-auto my-12 md:my-14 lg:my-200 h-px w-[80vw] max-w-[32rem] bg-black" />
      </div>
      <div
        className="container _o-projektu
                flex flex-col gap-y-vertical-gap-small
                lg:direction
                lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
                lg:gap-x-horizontal-gap
            "
      >
        <motion.div
          className="_left-column my-10 xs:my-0 xs:mb-10"
          initial={rightInitial}
          style={{ x: floatXSoft, y: floatYSoft }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <AboutImage
            extraClassName=""
            imageSrc="/content/unsplash-vazba.jpg"
            positionInLayout="left"
          />
        </motion.div>
        <motion.div
          className="_right-column _text
                    max-w-tablet-text-max-w mx-auto"
          initial={leftInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <h2
            className="_headline
                        h2 mb-h2 text-[1.3rem] tracking-almost-normal
                    "
          >
            Kapitálek - víte co tento pojem v knihařském světe znamená?
          </h2>
          <div
            className="_content
                        text-base"
          >
            <p>
              Kapitálek je nedílnou součástí knižní vazby kombinující funkčnost
              a estetiku. Naším primárním cílem, je dodávat Vám funkční výrobky,
              které vydrží roky a budou Vám v životě přinášet radost i po
              estetické stránce.
            </p>

            <p>
              Ve světě vazby knih se pohybujeme již spoustu let, za které jsme
              získali nedocenitelné zkušenosti s řemeslnými, ale i moderními
              technikami. V průběhu práce pro celou řadu zákazníků z řad firem i
              široké veřejnosti jsme pracovali s mnoha rozličnými materiály a
              naučili se zákazníkům poskytnou řešení dle jejich přání a
              požadavků.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
