"use client";
import { siteConfig } from "@/config/site";
import { CloseIcon } from "@/components/icons";
import { MobileNavItem } from "./MobileNavItem";



export const MobileFullscreenMenu = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {

    const renderMobileNavItems = (items: typeof siteConfig.navItemsLeft) => {
        return items.map((item) => {
            return (
                <MobileNavItem key={item.href} 
                isMobileNavOpen={isOpen} setIsMobileNavOpen={setIsOpen}
                {...item} />
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
                bg-[#E6DECD]
                ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-1 pointer-events-none"}
            `}
            aria-hidden={!isOpen}>
            <a className="__close-icon
                    absolute top-0 right-0 pt-8 pr-8 pb-2 pl-2
                    group
                "
                href="#" 
                onClick={(e) => { e.preventDefault(); setIsOpen(false); }}
                >
                    <div className="__rounder-wrapper
                         rounded-full p-3 
                         bg-[rgba(0,0,0,0.1)]
                        flex items-center justify-center
                        group-hover:bg-white
                        transition-[background-color] duration-[120ms]
                        ">
                        <CloseIcon size="20" />  
                    </div>
            </a>
            <ul className="__mobile-nav-items
                flex flex-col
                w-full"
            >
                {renderMobileNavItems(siteConfig.navItemsLeft)}
                {renderMobileNavItems(siteConfig.navItemsRight)}
            </ul>

            <div className="__vertical-line
                absolute top-0 left-[8vw] bottom-0
                w-[1px] h-full bg-[rgba(0,0,0,0.1)]"></div>
        </div>
    )

}
