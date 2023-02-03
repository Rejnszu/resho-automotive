import React from "react";
import styles from "./HeadingH2.module.scss";
interface props {
  children: React.ReactNode;
}
const HeadingH2 = ({ children }: props) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default HeadingH2;
