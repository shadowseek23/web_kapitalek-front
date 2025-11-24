import Link from "next/link";
import { NavbarSocial } from "./navigation/NavbarSocial";
import { siteConfig } from "@/config/site";

export const Footer = () => {        
    return (
        <footer>
            <section className="_social 
            py-section-half
            flex flex-col items-center
            "> 
                <div className="container text-center">
                    <h2 className="h3 text-center mb-[1em] ">
                        Najděte nás na sociálních sítích
                    </h2>                    
                    <div className="inline-block">
                        <NavbarSocial gap="[4rem]" />
                    </div>
                </div>
            </section>
            <section className="_links-etc bg-black text-white py-12">
            <div className="container 
                flex flex-col justify-between 
                gap-x-4 gap-y-12
                md:flex-row
            ">
                <div className="_left-column 
                    flex flex-col items-center gap-y-2
                    md:grow-1"
                >
                    <h4 className="h3 text-white tracking-wide text-center mb-[1em] ">
                        Kapitálek s.r.o.
                    </h4>
                    <Link className="link-light" href="/podminky-zpracovani-osobnich-udaju">
                        Podmínky zpracování osobních údajů
                    </Link>
                    <Link className="link-light" href="/podminky-cookies">
                        Podmínky používání cookies
                    </Link>
                </div>
                <div className="_middle-column"
                >
                    {siteConfig.navItemsLeft.concat(siteConfig.navItemsRight).map((item) => (
                        <li>
                            <a href="{item.href}">{item.label}</a>
                        </li>
                    ))}
                </div>
                <div className="_right-column
                    flex flex-col items-center gap-y-1
                    text-center
                    md:grow-1"
                >
                    Tento web má pod křídly
                    <Link href="#"  className="link-light" target="_blank">
                        Studio Libertis
                    </Link>
                </div>
            </div>
            </section>
        </footer>
    )
}