import React from "react";
import styles from "./HeadingH3.module.scss";
interface props {
  children: React.ReactNode;
  center?: boolean;
}
const HeadingH3 = ({ children, center }: props) => {
  return (
    <h3
      style={center ? { textAlign: "center" } : {}}
      className={styles.heading}
    >
      {children}
    </h3>
  );
};

export default HeadingH3;
