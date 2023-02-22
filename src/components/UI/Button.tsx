import React from "react";
import styles from "./Button.module.scss";
interface props {
  children: React.ReactNode;
  onClick: (e: any) => void;
  style?: string;
}
const Button = ({ children, onClick, style }: props) => {
  return (
    <button className={`${styles.button} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
