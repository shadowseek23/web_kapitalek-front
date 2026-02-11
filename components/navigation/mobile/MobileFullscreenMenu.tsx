"use client";
import { siteConfig } from "@/config/site";
import { CloseIcon } from "@/components/icons";
import { MobileNavItem } from "./MobileNavItem";
import { motion, type Variants } from "framer-motion";



export const MobileFullscreenMenu = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
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
            )            
        });
    }
    return (
        <div id="mobile-fullscreen-menu"
            className={`__main-wrapper
                fixed top-0 left-0
                transform-gpu origin-top-right
                transition-[opacity,transform] duration-[600ms]
                flex items-center pb-[10vh] w-full h-full z-100
                bg-beige
                
                ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-1 pointer-events-none"}
            `}
            aria-hidden={!isOpen}
            onClick={(e) => { e.preventDefault(); setIsOpen(false); }}
        >
            <a className="__close-icon
                    absolute top-0 right-0 pt-8 pr-8 pb-2 pl-2
                    group
                "
                href="#" 
                onClick={(e) => { e.preventDefault(); setIsOpen(false); }}
                >
                    <div className="__rounder-wrapper
                         rounded-full p-3 
                         bg-[rgba(0,0,0,0.04)]
                        flex items-center justify-center
                        group-hover:bg-white
                        transition-[background-color] duration-[120ms]
                        ">
                        <CloseIcon size="20" />  
                    </div>
            </a>
            <motion.ul
                className="__mobile-nav-items
                    flex flex-col
                    w-full"
                variants={listVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
            >
                {renderMobileNavItems(siteConfig.navItemsLeft)}
                {renderMobileNavItems(siteConfig.navItemsRight)}
            </motion.ul>

            <div className="__vertical-line
                absolute top-0 left-[8vw] bottom-0
                w-[1px] h-full bg-[rgba(0,0,0,0.1)]"></div>
        </div>
    )

}
