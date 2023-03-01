import React from "react";
import styles from "./Success.module.scss";
interface Props {
  children: React.ReactNode;
}
const Success = ({ children }: Props) => {
  return <p className={styles.success}>{children}</p>;
};

export default Success;
