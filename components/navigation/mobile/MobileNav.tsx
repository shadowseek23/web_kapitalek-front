"use client";
// does it have to be client side? >> at what point is it rendered?
// import { usePathname } from "next/navigation"; >> stores the current pathname in the browser
import { MobileFullscreenMenu } from "./MobileFullscreenMenu";
import { NavbarLogo } from "../NavbarLogo";
import { useState } from "react";
import { useEffect } from "react";

// Basicaslly just the hamburger menu triggger button >> fullscreen nav is in a seperate file
export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);
1
    return (
        <>
            <nav id="mainmenu_mobile" className={`flex items-center justify-end min-h-24
                md:justify-between md:min-h-24  
                lg:hidden `}
             role="navigation" aria-label="main navigation">
                <span className="hidden md:block">
                    <NavbarLogo />
                </span>
                {/* hamburger */}
                <button onClick={() => setIsOpen(!isOpen)}
                    className="hover:cursor-pointer
                        px-4 py-4">
                    <span className="flex flex-col justify-between items-end h-6 w-8">
                        <span className="sr-only">Menu</span>
                        <span className="block w-6 h-[2px] bg-black"></span>
                        <span className="block w-9 h-[2px] bg-black"></span>
                    </span>
                </button>
            </nav>
            <MobileFullscreenMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};