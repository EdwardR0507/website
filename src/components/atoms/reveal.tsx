"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  className?: string;
  children: React.ReactNode;
  animationVariants: any;
  animationOrder?: number;
}

const Reveal = ({
  className,
  children,
  animationVariants,
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
