import React from "react";
import styles from "./Message.module.scss";
import { ImBin2 } from "react-icons/im";
import { useDeleteMessageMutation } from "@/redux/api/messagesApiSlice";
interface props {
  msg: string;
  date: string;
  id: string;
  userEmail: string;
  creator: string;
}
const Message = ({ msg, date, id, userEmail, creator }: props) => {
  const [deleteMessage, { isLoading }] = useDeleteMessageMutation();
  return (
    <div
      className={`${styles.message} ${creator === "admin" ? styles.admin : ""}`}
    >
      {isLoading ? "Deleting..." : msg}
      <span className={styles["message__date"]}>{date}</span>
      <span className={styles["message__settings"]}>
        <ImBin2
          onClick={() => deleteMessage({ userEmail: userEmail, id: id })}
        />
      </span>
    </div>
  );
};

export default Message;
