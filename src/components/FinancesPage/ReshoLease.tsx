import React from "react";
import HeadingH2 from "../Typography/Headings/HeadingH2";
import HeadingH3 from "../Typography/Headings/HeadingH3";
import Text from "../Typography/Text";
import styles from "./ReshoLease.module.scss";
import { AiOutlineLike } from "react-icons/ai";

const ReshoLease = () => {
  return (
    <section className={`${styles["lease-section"]} container section-padding`}>
      <HeadingH2>
        Check our latest financing option,{" "}
        <span>
          <span>Resho</span>
          <span>Lease</span>
        </span>{" "}
      </HeadingH2>
      <div className={styles["lease-wrapper"]}>
        <div className={styles["lease-description"]}>
          <HeadingH3>You don't trust banks, maybe you will trust us!</HeadingH3>
          <div className={styles["lease-point-wrapper"]}>
            <AiOutlineLike />
            <Text>For our clients we offer a new form of leasing.</Text>
          </div>
          <div className={styles["lease-point-wrapper"]}>
            <AiOutlineLike />
            <Text>We take care of all the formalities.</Text>
          </div>
          <div className={styles["lease-point-wrapper"]}>
            <AiOutlineLike />
            <Text>No hidden catches, everything is easy and transparent.</Text>
          </div>
          <div className={styles["lease-point-wrapper"]}>
            <AiOutlineLike /> <Text>APR of only 1,03%.</Text>
          </div>
          <div className={styles["lease-point-wrapper"]}>
            <AiOutlineLike />
            <Text>Only 1 hour and you can take your new car.</Text>
          </div>
        </div>
        <div className={styles["lease-image"]}>
          <span className={styles.resholease}>
            <span>Resho</span>
            <span>Lease</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ReshoLease;
