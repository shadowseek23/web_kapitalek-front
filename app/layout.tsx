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
          <section className="section bg-white border-default-b">
            <div className="container">
            <NavbarDesktopCentered breakpoint="lg" />
            <MobileNav breakpoint="lg" />
            </div>
          </section>
            <main className="">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <div className="container">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">HeroUI</p>
                </Link>
              </div>
            </footer>
        </Providers>
      </body>
    </html>
  );
}
