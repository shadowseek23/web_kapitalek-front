"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/social-icon";

export const NavbarSocial = ({
  gap = "3",
  sizeResponsive = false,
}: {
  gap?: string;
  sizeResponsive?: boolean;
}) => {
  const size = "sm";
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const items = [
    {
      href: siteConfig.socialLinks.instagram,
      icon: <FaInstagram />,
      ariaLabel: "Instagram",
    },
    {
      href: siteConfig.socialLinks.facebook,
      icon: <FaFacebookF />,
      ariaLabel: "Facebook",
    },
    {
      href: siteConfig.socialLinks.linkedin,
      icon: <FaLinkedinIn />,
      ariaLabel: "LinkedIn",
    },
  ];

  return (
    <motion.div
      className="flex items-center flex-row gap-4"
      initial="hidden"
      variants={container}
      viewport={{ once: true, amount: 0.3 }}
      whileInView="visible"
    >
      {items.map((itemData) => (
        <motion.div key={itemData.ariaLabel} variants={item}>
          <SocialIcon
            ariaLabel={itemData.ariaLabel}
            href={itemData.href}
            icon={itemData.icon}
            size={size}
            sizeResponsive={sizeResponsive}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
