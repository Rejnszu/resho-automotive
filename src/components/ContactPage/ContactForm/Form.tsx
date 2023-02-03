import HeadingH3 from "@/components/Typography/Headings/HeadingH3";
import Button from "@/components/UI/Button";
import React from "react";
import styles from "./Form.module.scss";
const Form = () => {
  return (
    <form className={styles.form}>
      <HeadingH3>Send us a message</HeadingH3>
      <div className={styles["form__inputs"]}>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="name">Name</label>
          <input typeof="text" id="name" />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="phone">Phone</label>
          <input typeof="tel" id="phone" />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="email">Email</label>
          <input typeof="email" id="email" />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="subject">Subject</label>
          <input typeof="text" id="subject" />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="message">Message</label>
          <textarea typeof="text" id="message" rows={15} />
        </div>
      </div>
      <Button onClick={() => {}}>Send</Button>
    </form>
  );
};

export default Form;
