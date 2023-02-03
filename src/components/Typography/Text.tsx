import React from "react";
import styles from "./Text.module.scss";
interface props {
  children: React.ReactNode;
  center?: boolean;
}
const Text = ({ children, center }: props) => {
  return (
    <p
      style={center ? { textAlign: "center" } : {}}
      className={styles["generic-text"]}
    >
      {children}
    </p>
  );
};

export default Text;
