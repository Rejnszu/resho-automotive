import React from "react";
import styles from "./HeroBanner.module.scss";
import Button from "../UI/Button";
import HeadingH1 from "../Typography/Headings/HeadingH1";
import Text from "../Typography/Text";
import { useRouter } from "next/router";
const HeroBanner = () => {
  const router = useRouter();
  return (
    <section className={styles["hero-banner"]}>
      <div className={`container section-padding ${styles["hero__content"]}`}>
        <HeadingH1>We make dreams come true</HeadingH1>
        <Text>
          You need some advice, or help with financing your goals?
          <br />
          Don't worry, we offer wide range of financing forms.
        </Text>
        <Button onClick={() => router.push("/contact")}>
          Contact with our financial adviser.
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
