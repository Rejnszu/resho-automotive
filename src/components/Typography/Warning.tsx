import React from "react";
import styles from "./Warning.module.scss";
interface Props {
  children: React.ReactNode;
}
const Warning = ({ children }: Props) => {
  return <p className={styles.warning}>{children}</p>;
};

export default Warning;
