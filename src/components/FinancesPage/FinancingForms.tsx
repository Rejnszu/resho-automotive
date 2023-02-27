import React from "react";
import HeadingH3 from "../Typography/Headings/HeadingH3";
import styles from "./FinancingForms.module.scss";
import Image from "next/image";
import HeadingH2 from "../Typography/Headings/HeadingH2";
import { BsArrowsMove } from "react-icons/bs";
const FinancingForms = () => {
  return (
    <section className="container section-padding">
      <HeadingH2>Not sure which way of financing is good for you?</HeadingH2>
      <div className={styles["financing-wrapper"]}>
        <div className={styles["financing-card"]}>
          <HeadingH3>Cash</HeadingH3>
          <p className={styles["card__text"]}>You have money? We have cars.</p>
          <Image
            src="/assets/Finances/money.png"
            alt="cash"
            width={80}
            height={80}
          ></Image>
        </div>
        <div className={styles["financing-card__inner-wrapper"]}>
          <div className={styles["financing-card"]}>
            <HeadingH3>Loan</HeadingH3>
            <p className={styles["card__text"]}>
              Need some support from bank? Say no more.
            </p>
            <Image
              src="/assets/Finances/loan.png"
              alt="loan"
              width={80}
              height={80}
            ></Image>
          </div>
          <div className={`${styles["financing-card--center"]} `}>
            <BsArrowsMove />
          </div>
          <div className={styles["financing-card"]}>
            <HeadingH3>Leasing</HeadingH3>
            <p className={styles["card__text"]}>
              You have a company? We have solutions.
            </p>{" "}
            <Image
              src="/assets/Finances/leasing.png"
              alt="leasing"
              width={80}
              height={80}
            ></Image>
          </div>
        </div>
        <div className={styles["financing-card"]}>
          <HeadingH3>Rental</HeadingH3>
          <p className={styles["card__text"]}>
            You need car temporary? You guessed right, we have cars for rent.
          </p>{" "}
          <Image
            src="/assets/Finances/rent.png"
            alt="rent"
            width={80}
            height={80}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default FinancingForms;
