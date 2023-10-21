"use client";

import { useEffect, useRef } from "react";
import { type Variants, motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  className?: string;
  children: React.ReactNode;
  animationVariants?: Variants;
  animationOrder?: number;
}

const DEFAULT_VARIANTS = {
  visible: { opacity: 1, translateX: 0, translateY: 0 },
  hidden: { opacity: 0, translateX: -50, translateY: 50 },
};

const Reveal = ({
  className,
  children,
  animationVariants = DEFAULT_VARIANTS,
  animationOrder = 1,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      className={className}
      animate={mainControls}
      variants={animationVariants}
      transition={{ duration: 0.7, delay: 0.1 * (animationOrder + 1) }}
    >
      {children}
    </motion.section>
  );
};
export default Reveal;
