import React from "react";
import styles from "./Banner.module.scss";
import Text from "../Typography/Text";
import Image from "next/image";

import HeadingH2 from "../Typography/Headings/HeadingH2";
import { useRouter } from "next/router";
const Banner = () => {
  const router = useRouter();
  return (
    <section className={`${styles.banner} section-padding`}>
      <HeadingH2>Not sure what to do?</HeadingH2>
      <div className={`${styles["banner__tiles"]} container`}>
        <div
          onClick={() => router.push("/buy-a-car")}
          className={styles["banner__tile"]}
        >
          <Text>Choose the car you want to buy.</Text>
          <Image
            src="/assets/HomePage/choose.jpg"
            alt="choose your car"
            width={200}
            height={200}
          />
        </div>
        <div
          onClick={() => router.push("/finance-your-car")}
          className={styles["banner__tile"]}
        >
          <Text>Decide how you want to finance it.</Text>
          <Image
            src="/assets/HomePage/finance.jpg"
            alt="choose the financing"
            width={200}
            height={200}
          />
        </div>
        <div
          onClick={() => router.push("/contact")}
          className={styles["banner__tile"]}
        >
          <Text>Contact with our consultant.</Text>
          <Image
            src="/assets/HomePage/contact.jpg"
            alt="contact us"
            width={200}
            height={200}
          />
        </div>
        <div className={styles["banner__tile"]}>
          <Text>Live a dream with your new car.</Text>
          <Image
            src="/assets/HomePage/success.jpg"
            alt="live a dream"
            width={200}
            height={200}
          />
        </div>
      </div>
      <Text center={true}>It's so easy.</Text>
    </section>
  );
};

export default Banner;
