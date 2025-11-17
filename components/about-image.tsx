import Image from "next/image";

export const AboutImage = ({positionInLayout, imageSrc, extraClassName = ""}: {positionInLayout: "left" | "right", imageSrc: string, extraClassName?: string}) => {;
    const positionClass = positionInLayout === "left" ? "" : "";

    return (
        <div className="text-center">
            <div className={`_about-image            
                relative
                lg:w-[68%]
                ${positionInLayout === "left" ? 
                    "_position-in-layout-left xs:-right-[1rem] md:-right-[1.5rem]" 
                    : "_position-in-layout-right xs:-left-[1rem] md:-left-[1.5rem]"}
                mx-auto
                inline-block
                ${extraClassName}
            `}>
                <div className={`_bg-border
                    absolute border-stroke border-1
                    w-full h-full 
                    z-0
                    ${positionInLayout === "left" ? 
                        "_position-in-layout-left xs:-left-[1.2rem] xs:-bottom-[1.5rem] md:-left-[1.8rem] md:-bottom-[2.2rem]" 
                        : "_position-in-layout-right xs:-right-[1.2rem] xs:-bottom-[1.5rem] md:-right-[1.8rem] md:-bottom-[2.2rem]"
                    }`}>  </div>
                <Image className="_image
                    border-stroke-light border-1
                    relative
                    w-fit
                    h-[60vh] min-h-60 max-h-[calc(280rem/16)]
                    lg:h-fit lg:w-[100%] lg:min-h-none lg:max-h-none
                    object-contain z-10" 
                    src={imageSrc} alt="About Image" width={1000} height={1000} />
            </div>
        </div>
    );
};
