import React from "react";
import Button from "../UI/Button";
import HeadingH1 from "../Typography/Headings/HeadingH1";
import Text from "../Typography/Text";
import styles from "./Hero.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
const Hero = () => {
  const router = useRouter();
  const scrollToNextSection = () => {
    window.scrollTo(0, window.innerHeight - 50);
  };
  return (
    <section className={styles.hero}>
      <div className={`container section-padding ${styles["hero__content"]}`}>
        <HeadingH1>Resho Automotive</HeadingH1>
        <Text>
          You need it? We have it!
          <br />
          Biggest offer of used cars on european market.
        </Text>
        <Button onClick={() => router.push("/buy-a-car")}>
          Check our new offers!
        </Button>
        <button
          className={styles["button__scroll-down"]}
          onClick={scrollToNextSection}
        >
          <MdKeyboardArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Hero;
