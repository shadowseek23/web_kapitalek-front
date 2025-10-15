"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { TriangleIcon, ArrowShortIcon } from "@/components/icons";
import { ArrowIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import NextLink from "next/link";



export const OurServicesSection = () => {
	const servicesData = [		
		{
			key: "1",
			ariaLabel: "Pro firmy",
			title: "Pro firmy",			
			content:				
				<p>			
					Nabízíme výrobu reklamních bloků na míru dle potřeb klientů 
					a profesionální vazbu dokumentů a materiálů pro firemní použití. 
					Dále také malonákladovou vazbu a vazbu V8 od formátu A4 do 580x580 mm. 
				</p>
		},
		{
			key: "2",
			ariaLabel: "Pro studenty",
			title: "Pro studenty",
			content:
			<p>
				Pomáháme studentům uchovat jejich důležité práce našimi kvalitními 
				a cenově dostupnými vazbami. Nabízíme vazbu bakalářských či diplomových prací, 
				a dalších školních materiálů. 
			</p>
		},
		{
			key: "3",
			ariaLabel: "Pro každého",
			title: "Pro každého",
			content:
			<p>
				Nabízíme širokou škálu vazeb a produktů pro každodenní použití, 
				jako jsou bloky, fotoknihy, deníky, alba, kroniky a další. 
				Naše vazby jsou vyrobeny s ohledem na kvalitu, 
				strvanlivost a estetiku, aby splnily vaše potřeby. 
			</p>
		}
	];


	return (
		<section id="sluzby" className="section py-section border-default-b">
			
			<div className="container 
				flex flex-col items-center gap-y-vertical-gap
				lg:gap-x-horizontal-gap
				xl:gap-x-horizontal-gap-double

				lg:max-w-full 
				lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
				lg:items-start 
			">
				<div className="_left-column _headline-and-text-column
					flex flex-col justify-start gap-4
					max-w-[calc(600rem/16)]
					lg:max-w-[200rem/16] 
				">
					<h2 className="h2 mb-h2">Naše služby</h2>					
					<p className="text-big">
						Každá kniha je unikátem a zaslouží si <strong>výjimečnou vazbu, která ji dostane na výsluní. </strong>
						Naše rukodělné vazby plné kvality představují mistrovství v oboru, kde se spojuje <strong>preciznost 
						a pečlivost s nápaditostí a invencí.</strong> Výsledkem jsou vazby, 
						<strong> které nejen skvěle vypadají, ale také vydrží věky... </strong>
					</p>
				</div>
				<div className="_right-column _services-column
					w-full
					flex flex-col justify-between items-center gap-y-20 
					lg:min-h-[30rem]">								
						<Accordion className="_services-accordion 
							w-[calc(100%+2*var(--mobile-page-margin))] max-w-[calc(600rem/16)] 
							border-y-1 px-0 mx-[calc(-1*var(--mobile-page-margin))]  border-stroke-light
							lg:max-w-[100%]" 

							dividerProps={{
								className:"border-stroke-light"
							}}
						>
							{servicesData.map((item) => (
								<AccordionItem 
									key={item.key} aria-label={item.ariaLabel} title={item.title}
									indicator={<TriangleIcon />}
									disableIndicatorAnimation={false}
									classNames={{
										base: "md:bg-white ",
										heading: "",
										trigger: "justify-between cursor-pointer px-10 py-8 pl-[calc(2vw+2.2rem)] hover:bg-beige hover:text-white hover:scale-[1.01] transition-all hover:mb-4",
										titleWrapper: "",
										title: " text-xl uppercase tracking-wide",
										subtitle: "",
										startContent: "",
										indicator: "",
										content: "max-w-[50rem] pt-2 pb-14 pl-[calc(2vw+2.2rem)] pr-[calc(2vw+2.2rem)] text-[500px] text-base-lg lg:text-base-lg",
									}}>
									{item.content}
								</AccordionItem>
							))}
						</Accordion>	
						<div className="_button-wrapper-with-stroke 
						w-full
							grow-1 flex flex-col justify-end align-stretch
							border-b-1 border-stroke-light overflow-hidden 

						lg:pt-20">
							<div className="_button-wrapper
								grow-0 basis-auto flex justify-center
								w-full
								lg:justify-start">

								<NextLink href="/#kontakt" className="_button
									flex justify-center items-center gap-[10%]
									w-full max-w-[calc(460rem/16)]
									grow-1 basis-auto
									px-6.5 py-4.5 m-0
									 bg-black text-big text-white no-underline shadow-[0_0px_4rem_rgba(0,0,0,0.15)]
									 hover:bg-beige hover:text-white hover:scale-[1.01] hover:shadow-[0_0px_5rem_rgba(0,0,0,0.12)] transition-all
								">	
									<span className="_button__text
										text-big font-[500] text-center leading-[1.1em]
										lg:basis-[12rem]
									">									
										Objednat vazbu
									</span>
									<span className="button__icon
										max-w-[20vw]
									">									
										<ArrowShortIcon 
											direction="right" 
											strokeWidth={1} 
											stroke="#fff"
										/>
									</span>
								</NextLink>
							</div>
						</div>			
				</div>
			</div>

		</section>
	);
};