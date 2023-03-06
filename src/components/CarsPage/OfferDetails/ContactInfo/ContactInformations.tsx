import React from "react";
import styles from "./ContactInformations.module.scss";
import Text from "@/components/Typography/Text";
interface Props {
  phone: number;
  name: string;
  email: string;
}
const ContactInformations = ({ phone, name, email }: Props) => {
  return (
    <section className={styles["contact-informations"]}>
      <Text>Posted By:</Text>
      <ul className={styles["informations__list"]}>
        <li>
          <p>Name:</p>
          <p>{name}</p>
        </li>
        <li>
          <p>Email:</p>
          <p>{email}</p>
        </li>
        <li>
          <p>Phone:</p>
          <p>{phone}</p>
        </li>
      </ul>
    </section>
  );
};

export default ContactInformations;
