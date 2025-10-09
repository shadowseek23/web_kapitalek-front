import NextLink from "next/link";

import { siteConfig } from "@/config/site";

export const NavbarCTA = () => {
  return (
    <div className="hidden lg:flex items-center">
      <NextLink href={siteConfig.cta.href} className="navbar__cta-button 
        button bg-black text-white py-2 px-4 no-underline font-[400]
        hover:text-white hover:bg-beige hover:scale-[1.02] transition-all ">
          {/* 
          py-2 = 2*4 = 8px
          px-8 = 4*8 = 32px */}
        {siteConfig.cta.label}
      </NextLink>
    </div>
  );
};
