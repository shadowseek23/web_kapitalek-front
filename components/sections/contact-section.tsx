import ContactForm from "../contact-form"
import Image from "next/image"

export const ContactSection = () => {
    return (
        <section id="kontakt" className="section
            py-section border-default-b relative overflow-hidden
        ">
            <div className="container _pomocny-kvuli-ilustraci
                lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
                lg:gap-x-horizontal-gap-double
            ">
                <div className="_positioning-div
                    relative w-full text-center
                ">                                    
                    <svg 
                        className="_background-ilustration
                            
                            absolute right-0 -top-[10rem] z-0"
                         width="2000" height="2000" 
                         viewBox="0 0 1159 681" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-565.359 680.437L1158.69 -266.74L-556.789 -248.717L-565.359 680.437Z" fill="#F6F4F0"/>
                    </svg>   
                    <Image 
                        className='_obrazek-jehly
                            relative
                            mx-auto
                            w-1/2 min-w-[10rem] max-w-[20rem] z-10  
                            -ml-[5%]
                            lg:-ml-0
                            lg:-mt-20'
                        src="/jehla.png" 
                        width={380} height={285} 
                        alt="Šicí jehla" 
                    />
                </div>
            </div>
            <div className="container _formularatext
            
                flex flex-col gap-y-vertical-gap-small
                lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
                lg:gap-x-horizontal-gap
                xl:gap-x-horizontal-gap-double
            ">
                <div className="_left-column
                    flex flex-col items-center justify-start
                    text-center
                    lg:items-start
                ">                 
                    <h2 className="_headline
                        h2 mb-h2 z-10 max-w-[20rem] text--line-height-[2em]
                        lg:max-w-[100%]
                    ">
                        Objednat vazbu
                    </h2>
                    <p className="_instrukce
                        text-big w-full z-10                        
                        max-w-tablet-text-max-w mx-auto
                        text-left
                    ">
                        Pošlete nám objednávku a my se Vám ozveme ohledně realizace.
                        Nebojte se v komentáři uvést Vaše speciální požadavky. Speciality nás baví!
                    </p>
                </div>
                <div className="_right-column
                    flex flex-col items-center justify-center
                ">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}