"use client";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/social-icon";

export const NavbarSocial = ({ gap = "3" }: { gap?: string }) => {
  const size = "sm";
  return (
    <div className={`flex items-center flex-row gap-4`}>
      <SocialIcon
        href={siteConfig.socialLinks.instagram}
        icon={<FaInstagram />}
        ariaLabel="Instagram"
        size={size}
      />
      <SocialIcon
        href={siteConfig.socialLinks.facebook}
        icon={<FaFacebookF />}
        ariaLabel="Facebook"
        size={size}
      />
      <SocialIcon
        href={siteConfig.socialLinks.linkedin}
        icon={<FaLinkedinIn />}
        ariaLabel="LinkedIn"
        size={size}
      />
    </div>
  );
};
