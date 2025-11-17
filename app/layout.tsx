import "@/styles/globals.css";
import "@/styles/components/navbar.css";
import "@/styles/components/navbar-mobile.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { NavbarDesktopCentered } from "@/components/navigation/NavbarDesktopCentered";
import { MobileNav } from "@/components/navigation/MobileNav";
import { NavbarSocial } from "@/components/navigation/NavbarSocial";
import NextLink from "next/link";
import {Footer} from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div id="top"></div>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <section className="section bg-white md:border-b-stroke md:border-b-1">
            <div className="container">
            <NavbarDesktopCentered breakpoint="lg" />
            <MobileNav breakpoint="lg" />
            </div>
          </section>
            <main className="">
              {children}
            </main>
            <Footer />

        </Providers>
      </body>
    </html>
  );
}
