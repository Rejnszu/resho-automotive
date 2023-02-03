import React from "react";
import styles from "./Member.module.scss";
import Image from "next/image";

interface props {
  name: string;
  img: string;
  role: string;
  phone: string;
}
const Member = ({ ...props }: props) => {
  return (
    <div className={styles.member}>
      <Image
        priority
        src={props.img}
        alt={props.name}
        width={140}
        height={140}
      />
      <div className={styles["member__details"]}>
        <p>{props.name}</p>
        <p>{props.role}</p>
        <p>
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </p>
      </div>
    </div>
  );
};

export default Member;
