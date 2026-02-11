"use client";

import NextLink from "next/link";

// Simple Navbar Item (Link)
interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  isLastChild?: boolean;
}

export const NavItem = ({
  label,
  href,
  isActive = false,
  isLastChild = false,
}: NavItemProps) => {
  // const classes = ["navbar__item", "navbar__item--link"];
  // if (isLastChild) classes.push("navbar__item--last-child");
  // if (isActive) classes.push("is-active");

  return (
    <NextLink
      className="flex items-center justify-center
      text-base text-black tracking-wide uppercase no-underline
      min-w-36 py-2 px-[calc(1vw+4*var(--spacing))]
      _hover:text-white _hover:bg-beige hover:scale-[1.01] transition-all hover:font-[600] text-center"
      href={href}
    >
      {label}
    </NextLink>
  );
};
