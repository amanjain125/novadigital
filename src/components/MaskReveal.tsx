import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export const MaskReveal = ({
  children,
  delay = 0,
  duration = 1.0,
  once = false,
  className = '',
}: MaskRevealProps) => {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 30 }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 }}
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
