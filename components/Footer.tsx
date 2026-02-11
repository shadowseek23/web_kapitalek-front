import Link from "next/link";

import { NavbarSocial } from "./navigation/NavbarSocial";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer>
      <section
        className="_social 
            py-section-half
            flex flex-col items-center
            "
      >
        <div className="container text-center">
          <h2 className="h3 text-center mb-[1em] ">
            Najděte nás na sociálních sítích
          </h2>
          <div className="inline-block">
            <NavbarSocial gap="[4rem]" sizeResponsive={true} />
          </div>
        </div>
      </section>
      <section
        className="_links-etc bg-black text-white py-12
            flex justify-center"
      >
        <div
          className="container 
                flex flex-col justify-between 
                gap-x-6 gap-y-12
                !max-w-[50rem] 
                md:flex-row md:flex-wrap
                lg:grid lg:grid-cols-3 lg:gap-x-12
                lg:!max-w-[80rem]               
            "
        >
          <div
            className="_left-column 
                    flex flex-col items-center gap-y-2
                    md:grow-1 md:text-left md:items-start
                    lg:min-w-0"
          >
            <h4
              className=" h3 text-white tracking-wide text-center mb-[1em] 
                        md:text-left
                        lg:h-[2rem] lg:flex lg:flex-col lg:justify-end lg:items-start lg:mb-4"
            >
              Kapitálek s.r.o.
            </h4>
            <Link
              className="link-light md:text-left"
              href="/podminky-zpracovani-osobnich-udaju"
            >
              Podmínky zpracování osobních údajů
            </Link>
            <Link className="link-light md:text-left" href="/podminky-cookies">
              Podmínky používání cookies
            </Link>
          </div>
          <div
            className="_middle-column text-center
                     md:basis-1/2 md:text-left
                     md:relative md:left-20
                     lg:relative lg:min-w-0 lg:!left-28"
          >
            <h4
              className="text-white mb-4
                        lg:h-[2rem] lg:flex lg:flex-col lg:justify-end lg:items-start lg:mb-4"
            >
              Rychlé odkazy
            </h4>
            <ul>
              {siteConfig.navItemsLeft
                .concat(siteConfig.navItemsRight)
                .map((item) => (
                  <li key={item.href} className="mb-2">
                    <a className="link-light" href="{item.href}">
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div
            className="_right-column
                    flex flex-col items-center gap-y-1
                    text-center
                    md:grow-1 
                    lg:min-w-0
                    lg:items-start
                    lg:relative lg:left-22
                    "
          >
            <span className="lg:h-[2rem] lg:flex lg:flex-col lg:justify-end lg:items-start lg:mb-2 ">
              Tento web má pod křídly
            </span>
            <Link
              className="link-light"
              href="https://libertis.studio/"
              target="_blank"
            >
              Studio Libertis
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
