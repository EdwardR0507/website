"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import { ISkill } from "@/lib/data";
import { TechCard } from "../molecules";

interface StackSectionProps {
  title: string;
  skills: ISkill[];
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const StackSection = ({ title, skills }: StackSectionProps) => {
  const ref = useRef(null);

  return (
    <section
      className="mt-8 first-of-type:mt-0 last-of-type:mb-16 lg:last-of-type:mb-8"
      ref={ref}
    >
      <p className="text-xl font-semibold mb-2 sm:text-2xl">{title}</p>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <TechCard
              tech={skill.tech}
              icon={skill.icon}
              progress={skill.progress}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
