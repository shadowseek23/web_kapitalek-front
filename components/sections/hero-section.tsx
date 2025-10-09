'use client';

import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export const HeroSection = () => {
	const quotesStyles = "text-4xl font-primary";
	return (

		<section id="hero" className="border-default-b">

			{/* container */}<div 
				className="container 
					flex flex-col justify-center

					lg:grid lg:grid-cols-[var(--grid-cols-narrow-left)]
					lg:h-[60vh] min-h-[calc(600rem/16)] lg:max-h-[calc(1200rem/16)]
					pt-16 pb-10 sm:py-0 md:py-[4rem]">

				{/* left column- 1/3 width */}<div 
					className="flex items-center justify-center 
					lg:border-r-1 lg:border-stroke py-[6vh]">
					<div className="flex justify-center">
						<Image 
							src="/Kapitalek_logo_sand_and_black.png" 
							alt="Knihařské mistrovství - Kvalitní vazba knih" 
							width={50} 
							height={50}
							priority
							className="w-[70%] h-auto 
								lg:-ml-[10%]
								xl:-ml-[30%]"
							sizes="(max-width: 768px) 300px, (max-width: 1200px) 300px, 300px"
						/>
					</div>
				</div>
				{/* right column- 2/3 width */}<div 
					className="flex items-center justify-center
					py-[6vh]
					sm:px-[3vw] lg:px-0">
					{/* quotes container */} <div 
						className="relative 
						px-[10vw] py-[10vh] lg:px-18 lg:py-14
						w-full
						max-w-200
						lg:max-w-[85%]
						xl:-mr-[10%] xl:max-w-[65%]">
							{/*quote left*/} <div 
								className="text-beige text-[2.8rem] 
								absolute top-0 left-[3vw] sm:top-0 sm:left-0">“</div>
							{/*quote right*/} <div 
								className="text-beige text-[2.8rem] 
								absolute bottom-0 right-[3vw] sm:bottom-0 sm:right-0 
								transform rotate-180">“</div>
							
							{/* Content */}
							<h2 
								className="text-5xl font-light tracking-normal mb-6 normal-case">
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
							<h3 className="text-3xl tracking-normal font-extralight racking-kapitalek normal-case">
								Vytváříme vyjímečné knihy pro všechny kdo ocení kvalitu a cit pro detail.
							</h3>
					</div>
				</div>

			</div>
		</section>
	);
};
