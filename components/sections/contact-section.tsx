import ContactForm from "../contact-form"
import Image from "next/image"

export const ContactSection = () => {
    return (
        <section id="kontakt" className="section py-section border-default-b relative overflow-hidden">
            <div className="container lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]">
                <div className="relative">                                    
                    <svg 
                        className="absolute right-0 -top-[10rem] z-0"
                         width="2000" height="2000" 
                         viewBox="0 0 1159 681" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-565.359 680.437L1158.69 -266.74L-556.789 -248.717L-565.359 680.437Z" fill="#F6F4F0"/>
                    </svg>   
                    <Image 
                        className='w-1/2 __max-w-[16rem] z-10  lg:-mt-20 relative'
                        src="/jehla.png" 
                        width={380} height={285} 
                        alt="Šicí jehla" 
                    />
                </div>
            </div>
            <div className="container lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]">
                <div className="flex flex-col items-start justify-start">                 
                    <h1 className="mb-h2 z-10 max-w-[20rem] text--line-height-[2em]">Objednat vazbu</h1>
                    <p className="text-big w-3/4 z-10s">Pošlete nám objednávku a my se Vám ozveme s případnými dotazy. 
                        Nemusíte se bát a klidně nám zanechte v komentáři Vaše speciální požadavky.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}