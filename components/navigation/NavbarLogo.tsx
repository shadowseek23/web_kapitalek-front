import NextLink from "next/link";

export const NavbarLogo = () => {
  return (
    
    <div className="flex items-center px-8">
      {/* px-4 = 4*4 = 16px */}
      {/* px-2 = 2*4 = 8px */}
      <NextLink href="/">
        <img
          className="navbar__logo-image max-w-16 min-w-12 w-full h-auto"
          // 16*4 = 64px
          src="/logo_circle.png"
          alt="Kapitálek - logo"
        />
      </NextLink>
    </div>
  );
};
