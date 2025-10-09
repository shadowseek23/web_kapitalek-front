"use client";

import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  size: string;
  ariaLabel: string;
  className?: string;
}

export const SocialIcon = ({ href, icon, size, ariaLabel, className = "" }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`navbar__social-link inline-block items-center justify-center bg-black rounded-full
        text-white
        hover:text-white hover:bg-beige hover:scale-[1.02] transition-all text-center
        p-1.5 text-${size} ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
};
