import { AboutImage } from "@/components/about-image";

export const AboutSection = () => {
    return (
        <section id="o-nas" className="section
            py-section border-default-b 
        ">
            <div className="container _o-projektu
                flex flex-col-reverse items-center gap-y-vertical-gap-small
                mb-vertical-gap
                md:flex-col-reverse
                lg:grid lg:grid-cols-[var(--grid-cols-narrow-right)]
                lg:gap-x-horizontal-gap
                xl:gap-x-horizontal-gap-double
                ">
                <div className="_left-column _text                    
                        max-w-tablet-text-max-w mx-auto">
                    <h2 className="_headline
                        h2 mb-h2
                    ">
                        O projektu
                    </h2>
                    <div className="_content
                        text-base
                    ">
                        <p>Jsme tým zkušených knihařů, kteří se již dlouhá léta specializují na ruční vazby knih, a jiných dokumentů a tiskovin.</p>
                        <p>Zaměřujeme se na vytváření kvalitních vazeb, které jsme schopni plně přizpůsobit Vašim přáním a potřebám.</p>
                        <p>Naše knihařské techniky jsou založeny na tradičních metodách, které jsou kombinovány s moderními technologiemi tak, abychom docílili vazeb, jež jsou kvalitní, odolné a esteticky příjemé.</p>
                        <p>Služby, které poskytujeme zahrnují vazbu knih, časopisů, zápisníků, fotoalb a dalších dokumentů. Zvládneme také opravy poškozených knižních vazeb. Rádi Vám poradíme nejlepší přístup, 
                            který bude vyhovovat Vašim potřebám a poskytneme Vám profesionální a přátelskou službu.</p>
                    </div>
                </div>
                <div className="_right-column my-4 xs:my-0 xs:mb-10">
                    <AboutImage imageSrc="/content/unsplash-hromadka-knih.jpg" 
                        positionInLayout="right"
                        extraClassName="" 
                    />
                </div>
            </div>
            <div className="container _o-projektu
                flex flex-col gap-y-vertical-gap-small
                lg:direction
                lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
                lg:gap-x-horizontal-gap
                xl:gap-x-horizontal-gap-double
            ">
                <div className="_left-column my-10 xs:my-0 xs:mb-10">                    
                    <AboutImage imageSrc="/content/unsplash-vazba.jpg"
                        positionInLayout="left" 
                        extraClassName="" 
                    />

                </div>
                <div className="_right-column _text
                    max-w-tablet-text-max-w mx-auto">       
                    <h2 className="_headline
                        h2 mb-h2 text-[1.3rem] tracking-almost-normal
                    ">
                        Kapitálek - víte co tento pojem v knihařském světe znamená? 
                    </h2>
                    <div className="_content
                        text-base">
                        <p>Kapitálek je nedílnou součástí knižní vazby kombinující funkčnost a estetiku. 
                        Naším primárním cílem, je dodávat Vám funkční výrobky, které vydrží roky a budou Vám v životě přinášet radost i po estetické stránce.</p>

                        <p>Ve světě vazby knih se pohybujeme již spoustu let, za které jsme získali nedocenitelné zkušenosti s řemeslnými, ale i moderními technikami. V průběhu práce pro celou řadu zákazníků z řad firem i široké veřejnosti jsme pracovali s mnoha rozličnými materiály a naučili se zákazníkům poskytnou řešení dle jejich přání a požadavků.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
