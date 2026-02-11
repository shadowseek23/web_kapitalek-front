"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ContactForm from "../contact-form";

export const ContactSection = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  const leftInitial = isMobile ? { opacity: 0, y: 24 } : { opacity: 0, x: -32 };
  const rightInitial = isMobile ? { opacity: 0, y: 24 } : { opacity: 0, x: 32 };

  return (
    <section
      className="section
            py-section border-default-b relative overflow-hidden
        "
      id="kontakt"
    >
      <div
        className="container _pomocny-kvuli-ilustraci
                lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
                lg:gap-x-horizontal-gap-double
            "
      >
        <motion.div
          className="_positioning-div
                    relative w-full text-center
                "
          initial={rightInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <svg
            className="_background-ilustration
                            
                            absolute right-0 -top-[10rem] z-0"
            fill="none"
            height="2000"
            viewBox="0 0 1159 681"
            width="2000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-565.359 680.437L1158.69 -266.74L-556.789 -248.717L-565.359 680.437Z"
              fill="#F6F4F0"
            />
          </svg>
          <Image
            alt="Šicí jehla"
            className="_obrazek-jehly
                            relative
                            mx-auto
                            w-1/2 min-w-[10rem] max-w-[20rem] z-10  
                            -ml-[5%]
                            lg:-ml-0
                            lg:-mt-20"
            height={285}
            src="/jehla.png"
            width={380}
          />
        </motion.div>
      </div>
      <div
        className="container _formularatext
            
                flex flex-col gap-y-vertical-gap-small
                lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
                lg:gap-x-horizontal-gap
                xl:gap-x-horizontal-gap-double
            "
      >
        <motion.div
          className="_left-column
                    flex flex-col items-center justify-start
                    text-center
                    lg:items-start
                "
          initial={leftInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <h2
            className="_headline
                        h2 mb-h2 z-10 max-w-[20rem] text--line-height-[2em]
                        lg:max-w-[100%]
                    "
          >
            Objednat vazbu
          </h2>
          <p
            className="_instrukce
                        text-big w-full z-10                        
                        max-w-tablet-text-max-w mx-auto
                        text-left
                    "
          >
            Pošlete nám objednávku a my se Vám ozveme ohledně realizace. Nebojte
            se v komentáři uvést Vaše speciální požadavky. Speciality nás baví!
          </p>
        </motion.div>
        <motion.div
          className="_right-column
                    flex flex-col items-center justify-center
                "
          initial={rightInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};
