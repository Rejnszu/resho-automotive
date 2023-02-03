import React from "react";
import styles from "./Footer.module.scss";
import Text from "../Typography/Text";
import Image from "next/image";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdLocationPin, MdMail, MdDirectionsCar } from "react-icons/md";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section
        className={`${styles["section--logo"]} ${styles.section} container`}
      >
        <div className={styles.logo}>
          <Image
            src="/assets/General/logo.png"
            alt="logo"
            height={40}
            width={120}
          />
          <Text>Best european car dealer</Text>
        </div>
        <div className={styles.socials}>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </section>
      <section
        className={`${styles["section--info"]} ${styles.section} container`}
      >
        <ul className={styles["info__list"]}>
          <li>Our dealers</li>
          <li>Berlin &#62;</li>
          <li>Monachium &#62;</li>
          <li>Hamburg &#62;</li>
        </ul>
        <ul className={styles["info__list"]}>
          <li>Sites</li>
          <li>
            <Link href="/buy-a-car">Buy a car</Link>
          </li>
          <li>
            <Link href="/finances">Finances</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className={styles["info__list"]}>
          <li>Informations</li>
          <li>Guarantee</li>
          <li>Rules</li>
          <li>About us</li>
        </ul>
        <ul className={styles["info__list"]}>
          <li>Contact</li>
          <li>
            <MdDirectionsCar />
            Resho Automotive GMBH
          </li>
          <li>
            <MdLocationPin /> Urlich Strasse 39B, 89-232, Berlin
          </li>
          <li>
            <BsTelephoneFill /> +49 538-68-68
          </li>
          <li>
            <MdMail /> resho@gmail.com
          </li>
        </ul>
      </section>
      <section
        className={`${styles["section--credits"]} ${styles.section} container`}
      >
        Car Dealership E-Commerce © 2023 | Created Łukasz Rejnsz
      </section>
    </footer>
  );
};

export default Footer;
