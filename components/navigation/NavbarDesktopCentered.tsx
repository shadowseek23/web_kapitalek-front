"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { NavItem } from "./NavItem";
import { NavDropdownItem } from "./NavDropdownItem";
import { NavbarSocial } from "./NavbarSocial";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarCTA } from "./NavbarCTA";

// Centered Navbar Component
export const NavbarDesktopCentered = () => {
  const pathname = usePathname();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const menuContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.45 },
    },
  };

  const menuItem = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const renderNavItems = (items: typeof siteConfig.navItemsLeft, isRightSide = false) => {
    return items.map((item, index) => {
      const isLast = isRightSide && index === items.length - 1;

      if ((item as any).dropdown) {
        return (
          <motion.div key={item.href} className="flex items-stretch" variants={menuItem}>
            <NavDropdownItem
              label={item.label}
              href={item.href}
              dropdown={(item as any).dropdown}
              isActive={isActive(item.href)}
            />
          </motion.div>
        );
      }

      return (
        <motion.div key={item.href} className="flex items-stretch" variants={menuItem}>
          <NavItem
            label={item.label}
            href={item.href}
            isActive={isActive(item.href)}
            isLastChild={isLast}
          />
        </motion.div>
      );
    });
  };

  return (
    <motion.nav
      id="mainmenu_desktop" 
      className="hidden lg:flex items-center items-stretch justify-center h-24"
      role="navigation"
      aria-label="main navigation"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div id="mainmenu-left" className="flex justify-between items-stretch flex-grow basis-3xs">            
        <motion.div className="flex items-stretch" variants={item}>
          <NavbarSocial />
        </motion.div>
        {/* left menu items*/} <motion.div
          className="flex grow-1 items-stretch justify-end basis-sm"
          variants={menuContainer}
        >
          {renderNavItems(siteConfig.navItemsLeft)}
        </motion.div>
      </div>
      <motion.div className="flex items-stretch" variants={item}>
        <NavbarLogo />
      </motion.div>
      <div id="mainmenu-right" className="flex justify-between items-stretch flex-grow basis-3xs">
        {/* right menu items*/}<motion.div 
          className="flex grow-1  items-stretch justify-start basis-sm"
          variants={menuContainer}
        >
          {renderNavItems(siteConfig.navItemsRight, true)}
        </motion.div>         
        <motion.div className="flex items-stretch" variants={item}>
          <NavbarCTA />
        </motion.div>
      </div>
    </motion.nav>
  );
};
