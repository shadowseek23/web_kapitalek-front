import NextLink from "next/link";

import { siteConfig } from "@/config/site";

export const NavbarCTA = () => {
  return (
    <div className="hidden lg:flex items-center">
      <NextLink
        className="navbar__cta-button 
				button
				py-2 px-4
				bg-black text-white no-underline font-[400] text-center
				hover:text-white hover:bg-beige hover:scale-[1.02] transition-all"
        href={siteConfig.cta.href}
      >
        {siteConfig.cta.label}
      </NextLink>
    </div>
  );
};
