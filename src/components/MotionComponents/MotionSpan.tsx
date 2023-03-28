import React from "react";
import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
  delay: number;
}
const MotionSpan = ({ children, delay }: Props) => {
  return (
    <motion.span
      initial={{ opacity: 0, transform: "translateY(100px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ ease: "linear", duration: 0.4, delay: delay }}
    >
      {children}
    </motion.span>
  );
};

export default MotionSpan;
