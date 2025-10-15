'use client';

import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export const HeroSection = () => {
	return (

		<section id="hero" className="border-default-b">
			<div className="container
				flex flex-col justify-center gap-y-[2rem]
				py-[4.5rem]
				md:py-[3.5rem]				
				lg:!py-0

				lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
				lg:h-[60vh] min-h-[calc(600rem/16)] lg:max-h-[calc(1200rem/16)]
			">

				<div className="_left-column _top-column 
					pt-[5rem]
					flex items-center justify-center 
					lg:p-0
					lg:border-r-1 lg:border-stroke
				">
					<div className="flex justify-center">
						<Image 
							src="/Kapitalek_logo_sand_and_black.png" 
							alt="Knihařské mistrovství - Kvalitní vazba knih" 
							width={50} 
							height={50}
							priority
							className="_logo 
								w-[90%] max-w-[calc(440rem/16)] lg:w-[70%] h-auto 
								lg:-ml-[10%]
								xl:-ml-[30%]"
							sizes="(max-width: 768px) 300px, (max-width: 1200px) 300px, 300px"
						/>
					</div>
				</div>
				<div className="_right-column _bottom-column
					flex items-center justify-center
					py-[6vh]
					sm:px-[3vw] lg:px-0 
				">
				<div className="_quotes-container
					relative w-full max-w-200 py-[3rem]
					
				 	md:px-[1.6rem]	
					lg:w-[88%] lg:!px-[calc(3rem_+_2vw)] lg:py-[calc(3rem_+_2vh)]
					xl:w-[77%] xl:-mr-[10%] 2xl:!px-[4rem] 2xl:!py-[4rem]
				">
							<div className="_quote-left 
								text-beige text-[2.8rem] 
								absolute 
								top-[0] -left-[1rem]
								
								lg:top-0 lg:left-[0vw]
							">“</div>
							<div className="_quote-right 
								text-beige text-[2.8rem] 
								absolute bottom-0 right-[0vw] sm:bottom-0 sm:right-0 
								transform rotate-180
							">“</div>
							<h2 className="_title-with-typewriter
								text-[2rem]
								 __text-5xl font-light tracking-normal mb-6 normal-case 
							">
								<Typewriter
									options={{
										strings: [
											'Knihařské místrovství v každé vazbě', 
											'Kvalitní vazba knih bez kompromisů'],
										autoStart: true,
										loop: true,
									}}
								/>								
							</h2>
							<h3 className="_subheading
								text-[1.5rem]
								__text-3xl tracking-normal font-extralight racking-kapitalek normal-case
							">
								Vytváříme vyjímečné knihy pro všechny, kdo ocení kvalitu a cit pro detail.
							</h3>
					</div>
				</div>

			</div>
		</section>
	);
};
