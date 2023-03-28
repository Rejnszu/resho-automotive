import React from "react";
import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
  style?: string;
}
const Main = ({ children, style }: Props) => {
  return (
    <motion.main
      className={`${style ? style : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
};

export default Main;
