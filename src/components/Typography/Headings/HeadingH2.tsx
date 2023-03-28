import React from "react";
import styles from "./HeadingH2.module.scss";
import { useInView } from "react-intersection-observer";
interface props {
  children: React.ReactNode;
}
const HeadingH2 = ({ children }: props) => {
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: true,
  });
  return (
    <div className={styles["heading-wrapper"]}>
      <h2
        ref={ref}
        className={`${styles.heading} ${inView ? styles.active : ""}`}
      >
        <span className={styles["left-line"]} />{" "}
        <span className={styles["right-line"]} />
        {children}
      </h2>
    </div>
  );
};

export default HeadingH2;
