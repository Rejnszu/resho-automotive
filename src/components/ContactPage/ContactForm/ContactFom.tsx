import React from "react";
import styles from "./ContactForm.module.scss";
import Form from "./Form";
import { FiMail } from "react-icons/fi";
const ContactFom = () => {
  return (
    <section className={`${styles["contact-form__section"]} section-padding `}>
      <div className={`${styles["contact-form__wrapper"]} container`}>
        <div className={styles["contact-form__CTA"]}>
          <p className={styles["CTA__text--main"]}>Let's talk.</p>
          <p className={styles["CTA__text--rest"]}>
            Tell us about you dream car, and will do our best to fulfill this
            dream!
          </p>
          <p className={styles["CTA__text--mail"]}>
            <FiMail /> Mail us directly at:
            <a href="mailto:resho@gmail.com"> resho@gmail.com </a>
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactFom;
