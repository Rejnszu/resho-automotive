import React from "react";
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
          <p>{phone}</p>
        </li>
      </ul>
    </section>
  );
};

export default ContactInformations;
