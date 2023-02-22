import React from "react";
import styles from "./Error.module.scss";
interface Props {
  children: React.ReactNode;
}
const Error = ({ children }: Props) => {
  return <p className={styles.error}>{children}</p>;
};

export default Error;
