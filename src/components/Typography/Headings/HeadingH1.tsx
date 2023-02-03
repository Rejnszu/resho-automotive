import React from "react";
import styles from "./HeadingH1.module.scss";
interface props {
  children: React.ReactNode;
}
const HeadingH1 = ({ children }: props) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default HeadingH1;
