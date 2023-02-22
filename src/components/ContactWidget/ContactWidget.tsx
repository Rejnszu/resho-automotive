import React, { useState, useEffect } from "react";
import styles from "./ContactWidget.module.scss";
import { BiMessageDetail, BiSend } from "react-icons/bi";
import { BsFillTelephoneFill, BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineSmile } from "react-icons/ai";
import { IoIosAttach } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { messengerActions } from "@/redux/messenger-slice";
import { RootState } from "@/redux/store";
import { getTime } from "@/utils/getTime";
import Image from "next/image";
import Message from "./Message";

const ContactWidget = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.messenger.messages);
  const [showWidget, setShowWidget] = useState(false);
  const [openWidget, setOpenWidget] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  function toggleWidget() {
    setOpenWidget((prevState) => !prevState);
  }

  function sendMessage() {
    dispatch(
      messengerActions.addNewMessage({
        message: message,
        date: getTime(new Date()),
      })
    );
    setMessage("");
  }

  useEffect(() => {
    setShowWidget(false);
    let timer = setTimeout(() => setShowWidget(true), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [router.pathname]);
  return (
    <>
      {openWidget && (
        <div className={styles["contact-widget__messenger"]}>
          <p className={styles["messenger__header"]}>
            <Image
              src="/assets/General/avatar.png"
              alt="avatar"
              width={40}
              height={40}
            />
            Resho Consultant
            <AiOutlineClose onClick={toggleWidget} />
          </p>
          <div className={styles["messenger__display"]}>
            {messages.map((message) => {
              return (
                <Message
                  key={message.date}
                  msg={message.message}
                  date={message.date}
                />
              );
            })}
          </div>
          <div className={styles["messenger__input__wrapper"]}>
            <AiOutlineSmile />
            <IoIosAttach />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={1}
              placeholder="Send a message"
              typeof="text"
              className={styles["messenger__input"]}
            />
            {message.length !== 0 && (
              <span
                onClick={sendMessage}
                className={styles["messenger__send-button"]}
              >
                <BiSend />
              </span>
            )}
          </div>
        </div>
      )}
      {showWidget && (
        <div className={`${styles["contact-widget__panel"]} `}>
          {!openWidget && (
            <>
              <BsFillTelephoneFill onClick={toggleWidget} />
              <BsCameraVideoFill onClick={toggleWidget} />
              <BiMessageDetail onClick={toggleWidget} />
            </>
          )}
          {openWidget && <AiOutlineClose onClick={toggleWidget} />}
        </div>
      )}
    </>
  );
};

export default ContactWidget;
