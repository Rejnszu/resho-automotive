import React, { useState } from "react";
import styles from "./ContactInformations.module.scss";
import Text from "@/components/Typography/Text";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
interface Props {
  phone: number;
  name: string;
  email: string;
}
const ContactInformations = ({ phone, name, email }: Props) => {
  const [showNumber, setShowNumber] = useState(false);
  return (
    <section className={styles["contact-informations"]}>
      <Text>Posted By:</Text>
      <ul className={styles["informations__list"]}>
        <li>
          <p>
            <BsFillPersonFill />
          </p>
          <p>{name}</p>
        </li>
        <li>
          <p>
            <AiOutlineMail />
          </p>
          <p>{email}</p>
        </li>
        <li>
          <p>
            <AiOutlinePhone />
          </p>
          {showNumber ? (
            <p
              className={styles.number}
              onClick={() => setShowNumber((prevState) => !prevState)}
            >
              {phone}
            </p>
          ) : (
            <p
              className={`${styles.number} ${styles["number--inactive"]}`}
              onClick={() => setShowNumber((prevState) => !prevState)}
            >
              Show number
            </p>
          )}
        </li>
      </ul>
    </section>
  );
};

export default ContactInformations;
