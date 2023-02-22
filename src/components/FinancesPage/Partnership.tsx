import React from "react";
import HeadingH2 from "../Typography/Headings/HeadingH2";
import styles from "./Partnership.module.scss";
import Image from "next/image";
const Partnership = () => {
  return (
    <section className={`section-padding ${styles["bank-section"]}`}>
      <HeadingH2>Partnership</HeadingH2>
      <div className={`container ${styles.logos}`}>
        <Image
          src="/assets/Finances/commerz.png"
          alt="commerz bank"
          height={80}
          width={300}
        />
        <Image
          src="/assets/Finances/ing.png"
          alt="ing bank"
          height={80}
          width={300}
        />
        <Image
          src="/assets/Finances/deutche.png"
          alt="deutche bank"
          height={80}
          width={400}
        />
      </div>
    </section>
  );
};

export default Partnership;
