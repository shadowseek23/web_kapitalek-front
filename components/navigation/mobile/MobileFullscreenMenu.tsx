"use client";
import { motion, type Variants } from "framer-motion";

import { MobileNavItem } from "./MobileNavItem";

import { siteConfig } from "@/config/site";
import { CloseIcon } from "@/components/icons";

export const MobileFullscreenMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const listVariants: Variants = {
    open: {
      transition: {
        delayChildren: 0.12,
        staggerChildren: 0.08,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    closed: {
      opacity: 0,
      y: 12,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const renderMobileNavItems = (items: typeof siteConfig.navItemsLeft) => {
    return items.map((item) => {
      return (
        <MobileNavItem
          key={item.href}
          isMobileNavOpen={isOpen}
          setIsMobileNavOpen={setIsOpen}
          variants={itemVariants}
          {...item}
        />
      );
    });
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      aria-hidden={!isOpen}
      className={`__main-wrapper
                fixed top-0 left-0
                transform-gpu origin-top-right
                transition-[opacity,transform] duration-[600ms]
                flex items-center pb-[10vh] w-full h-full z-100
                bg-beige
                
                ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-1 pointer-events-none"}
            `}
      id="mobile-fullscreen-menu"
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(false);
      }}
    >
      <button
        className="__close-icon
                    absolute top-0 right-0 pt-8 pr-8 pb-2 pl-2
                    group
                "
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);
        }}
      >
        <div
          className="__rounder-wrapper
                         rounded-full p-3 
                         bg-[rgba(0,0,0,0.04)]
                        flex items-center justify-center
                        group-hover:bg-white
                        transition-[background-color] duration-[120ms]
                        "
        >
          <CloseIcon size={20} />
        </div>
      </button>
      <motion.ul
        animate={isOpen ? "open" : "closed"}
        className="__mobile-nav-items
                    flex flex-col
                    w-full"
        initial="closed"
        variants={listVariants}
      >
        {renderMobileNavItems(siteConfig.navItemsLeft)}
        {renderMobileNavItems(siteConfig.navItemsRight)}
      </motion.ul>

      <div
        className="__vertical-line
                absolute top-0 left-[8vw] bottom-0
                w-[1px] h-full bg-[rgba(0,0,0,0.1)]"
      />
    </div>
  );
};
