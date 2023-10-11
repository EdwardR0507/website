import LinkedIn from "@/components/atoms/icons/Linkedin";
import Twitter from "@/components/atoms/icons/Twitter";
import Github from "@/components/atoms/icons/tech/Github";
import { PERSONAL_INFO } from "@/lib/data/about";

export const socialMediaSection = [
  {
    icon: () => <Github />,
    href: PERSONAL_INFO.socialMedia.github,
    target: "_blank",
  },
  {
    icon: () => <LinkedIn />,
    href: PERSONAL_INFO.socialMedia.linkedin,
    target: "_blank",
  },
  {
    icon: () => <Twitter />,
    href: PERSONAL_INFO.socialMedia.twitter,
    target: "_blank",
  },
];
