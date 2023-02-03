import React from "react";
import HeadingH2 from "../Typography/Headings/HeadingH2";
import HeadingH3 from "../Typography/Headings/HeadingH3";
import Image from "next/image";
import Text from "../Typography/Text";
import Button from "../UI/Button";
import styles from "./AboutCompany.module.scss";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
const AboutCompany = () => {
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: true,
  });
  return (
    <section className={`section-padding  ${styles["about__section"]}`}>
      <HeadingH2>Check us, before we check your car</HeadingH2>
      <div className={`${styles.about} container`}>
        <div
          className={`${styles["about__container"]} ${styles["about__container--dealership"]}`}
        >
          <Image
            ref={ref}
            className={`${styles["about__image-first"]} ${
              inView ? styles.active : ""
            }`}
            src="/assets/HomePage/dealership2.jpg"
            alt="delearship"
            height={150}
            width={230}
          />
          <Image
            ref={ref1}
            className={`${styles["about__image-second"]} ${
              inView1 ? styles.active : ""
            }`}
            src="/assets/HomePage/dealership3.jpg"
            alt="delearship"
            height={150}
            width={230}
          />
        </div>
        <div
          className={`${styles["about__container"]} ${styles["about__container--info"]}`}
        >
          <Text>About us:</Text>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Text>Our mission:</Text>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button onClick={() => router.push("/contact")}>
            Meet our staff
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
