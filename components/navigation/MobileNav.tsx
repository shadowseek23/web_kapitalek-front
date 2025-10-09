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
        <nav id="mainmenu_mobile" className={`flex lg:hidden items-center justify-between h-24`}
         role="navigation" aria-label="main navigation">
            <NavbarLogo />
            {/* hamburger */}
            <button className="flex flex-col justify-between h-6 w-6">
                <span className="sr-only">Menu</span>
                <span className="block w-6 h-px bg-black"></span>
                <span className="block w-6 h-px bg-black"></span>
            </button>
        </nav>
    );
};