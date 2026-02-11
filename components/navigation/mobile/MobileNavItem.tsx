"use client";
import { motion, type Variants } from "framer-motion";

interface MobileNavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isOpen: boolean) => void;
  variants?: Variants;
}

export const MobileNavItem = ({ label, href, isActive = false, isMobileNavOpen, setIsMobileNavOpen, variants }: MobileNavItemProps ) => {
    return (
        <motion.li
            className="__mobile-nav-item
                block
                w-full            
                b- border-t-1 border-t-[rgba(0,0,0,0.8)]
                last:border-b-1 border-b-[rgba(0,0,0,0.8)]
            "
            variants={variants}
        >
            <a href={href} 
                onClick={(e) => {setIsMobileNavOpen(false); e.stopPropagation();}}
                className="navbar__item-inner-link
                    block
                    
                    
                    w-full
                    p-8
                    pl-[22vw]
                    h3 no-underline uppercase
                    hover:bg-white
                    hover:mb-2
                    hover:-mt-1
                    hover:border-b-1 
                    hover:border-b-[rgba(0,0,0,0.15)]
                    transition-[margin] duration-150
                    text-black
                ">
                {label}
            </a>
        </motion.li>
    )
}