"use client";

import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { NavItem } from "./NavItem";
import { NavDropdownItem } from "./NavDropdownItem";
import { NavbarSocial } from "./NavbarSocial";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarCTA } from "./NavbarCTA";

// Centered Navbar Component
export const NavbarDesktopCentered = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  const renderNavItems = (items: typeof siteConfig.navItemsLeft, isRightSide = false) => {
    return items.map((item, index) => {
      const isLast = isRightSide && index === items.length - 1;

      if ((item as any).dropdown) {
        return (
          <NavDropdownItem
            key={item.href}
            label={item.label}
            href={item.href}
            dropdown={(item as any).dropdown}
            isActive={isActive(item.href)}
          />
        );
      }

      return (
        <NavItem
          key={item.href}
          label={item.label}
          href={item.href}
          isActive={isActive(item.href)}
          isLastChild={isLast}
        />
      );
    });
  };

  return (
    <nav id="mainmenu_desktop" 
      className={`hidden lg:flex items-center items-stretch justify-center h-24`} 
      role="navigation" aria-label="main navigation">
      <div id="mainmenu-left" className="flex justify-between items-stretch flex-grow basis-3xs">            
        <NavbarSocial />
        {/* left menu items*/} <div 
          className="flex grow-1 items-stretch justify-end basis-sm">
          {renderNavItems(siteConfig.navItemsLeft)}
        </div>
      </div>
      <NavbarLogo />
      <div id="mainmenu-right" className="flex justify-between items-stretch flex-grow basis-3xs">
        {/* right menu items*/}<div 
          className="flex grow-1  items-stretch justify-start basis-sm">
          {renderNavItems(siteConfig.navItemsRight, true)}
        </div>         
        <NavbarCTA /> 
      </div>
    </nav>
  );
};
