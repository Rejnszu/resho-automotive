import React from "react";
import HeadingH1 from "../Typography/Headings/HeadingH1";
import styles from "./ImageBanner.module.scss";
const ImageBanner = () => {
  return (
    <section className={styles["contact__image-banner"]}>
      <HeadingH1>Contact us</HeadingH1>
    </section>
  );
};

export default ImageBanner;
