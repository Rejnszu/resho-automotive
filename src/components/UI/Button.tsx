import React from "react";
import styles from "./Button.module.scss";
interface props {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  style?: string;
  type?: "button" | "submit" | "reset";
}
const Button = ({ children, onClick, style, type }: props) => {
  return (
    <button
      type={type || "button"}
      className={`${styles.button} ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
