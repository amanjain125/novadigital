import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 1.0,
  y = 60,
  className = '',
  once = false,
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.1 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // premium cubic-bezier ease-out (easeOutExpo)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
