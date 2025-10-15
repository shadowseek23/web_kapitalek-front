"use client";

import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { NavItem } from "./NavItem";
import { NavDropdownItem } from "./NavDropdownItem";
import { NavbarSocial } from "./NavbarSocial";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarCTA } from "./NavbarCTA";

// Centered Navbar Component
export const MobileNav = () => {

    return (
        <nav id="mainmenu_mobile" className={`flex items-center justify-end 
            md:justify-between min-h-28 md:min-h-24  
            lg:hidden `}
         role="navigation" aria-label="main navigation">
            <span className="hidden md:block"><NavbarLogo /></span>
            {/* hamburger */}
            <button className="px-4 py-4">
                <span className="flex flex-col justify-between items-end h-6 w-8">
                    <span className="sr-only">Menu</span>
                    <span className="block w-6 h-px bg-black"></span>
                    <span className="block w-9 h-px bg-black"></span>
                </span>
            </button>
        </nav>
    );
};