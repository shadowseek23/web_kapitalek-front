"use client";

import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  size: string;
  ariaLabel: string;
  className?: string;
  sizeResponsive?: boolean;
}

export const SocialIcon = ({ href, icon, size, ariaLabel, className = "", sizeResponsive = false }: SocialIconProps) => {
  var sizeClassNames = `p-[0.38em] text-[1.12rem]`;
  sizeClassNames += 
    sizeResponsive ?  
      ` lg:text-[1.28rem]`
    : " ";

  
  
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`navbar__social-link inline-block items-center justify-center bg-black rounded-full
        text-white
        hover:text-white hover:bg-beige hover:scale-[1.02] transition-all text-center
        ${sizeClassNames} ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
};
