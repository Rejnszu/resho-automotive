import React from "react";
import styles from "./Message.module.scss";
interface props {
  msg: string;
  date: string;
}
const Message = ({ msg, date }: props) => {
  return (
    <div className={styles.message}>
      {msg}
      <span className={styles["message__date"]}>{date}</span>
    </div>
  );
};

export default Message;
