"use client";

interface MobileNavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
}

export const MobileNavItem = ({  label, href, isActive = false, isMobileNavOpen, setIsMobileNavOpen } ) => {
    return (
        <li className="__mobile-nav-item
            block
            w-full            
            b- border-t-1 border-t-[rgba(0,0,0,0.15)]
            last:border-b-1 border-b-[rgba(0,0,0,0.15)]
        ">
            <a href={href} 
                onClick={() => setIsMobileNavOpen(false)}
                className="navbar__item-inner-link
                    block
                    
                    
                    w-full
                    p-8
                    pl-[22vw]
                    h3 no-underline uppercase
                    hover:bg-white
                    hover:mb-2
                    hover:-mt-1
                    hover:border-b-1 
                    hover:border-b-[rgba(0,0,0,0.15)]
                    transition-[margin] duration-150
                    
                ">
                {label}
            </a>
        </li>
    )
}