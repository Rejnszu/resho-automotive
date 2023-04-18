import React from "react";
import styles from "./Emojis.module.scss";
interface Props {
  setMessage: any;
}
const Emojis = ({ setMessage }: Props) => {
  const emojis = [
    "😀",
    "😁",
    "😂",
    "😃",
    "😄",
    "😅",
    "😆",
    "😇",
    "😈",
    "😉",
    "😊",
    "😋",
    "😌",
    "😍",
    "😎",
    "😏",
    "😐",
    "😑",
    "😒",
    "😓",
    "😔",
    "😕",
    "😖",
    "😗",
    "😘",
  ];
  return (
    <div className={styles.emojis}>
      {emojis.map((emoji) => (
        <span
          onClick={(e) => setMessage((e.target as HTMLSpanElement).innerText)}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default Emojis;
