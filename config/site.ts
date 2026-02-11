export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "KAPITÁLEK: Knihařské mistrovství v každé vazbě",
  description:
    "Vytváříme vyjímečné knihy pro všechny kdo ocení kvalitu a cit pro detail.",
  navItemsLeft: [
    {
      label: "Naše služby",
      href: "/#sluzby",
    },
    {
      label: "Portfolio",
      href: "/#portfolio",
    },
  ],
  navItemsRight: [
    {
      label: "O nás",
      href: "/#o-nas",
    },
    {
      label: "Kontakt",
      href: "/#kontakt",
    },
  ],
  socialLinks: {
    instagram: "https://instagram.com/kapitalek",
    facebook: "https://facebook.com/kapitalek",
    linkedin: "https://linkedin.com/company/kapitalek",
  },
  cta: {
    label: "Objednat vazbu",
    href: "/#kontakt",
  },
  links: {
    // github: "https://github.com/heroui-inc/heroui",
    // twitter: "https://twitter.com/hero_ui",
    // docs: "https://heroui.com",
    // discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev",
  },
};
