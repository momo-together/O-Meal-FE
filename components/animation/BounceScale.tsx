import { motion } from "motion/react";

interface BounceScaleProps {
  /** 바운스 트리거 여부 */
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

const BounceScale = ({ isActive, children, className }: BounceScaleProps) => {
  return (
    <motion.div
      className={className}
      animate={isActive ? { scale: [1, 1.4, 0.9, 1] } : { scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default BounceScale;
