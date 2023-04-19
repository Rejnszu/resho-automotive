import React, { useState, useEffect, useRef } from "react";
import styles from "./ContactWidget.module.scss";
import { BiMessageDetail, BiSend } from "react-icons/bi";
import { BsFillTelephoneFill, BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineSmile } from "react-icons/ai";
import { IoIosAttach } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getTime } from "@/utils/getTime";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import Message from "./Message";
import Emojis from "./Emojis";
import {
  useGetUserEmailsQuery,
  useGetUserMessagesQuery,
  useUpdateUserMessagesMutation,
} from "@/redux/api/messagesApiSlice";
import Spinner from "../UI/Spinner";
const ContactWidget = () => {
  const userEmail = useSelector((state: RootState) => state.user?.user?.email);
  const isAdmin = userEmail === process.env.sample_admin_email;
  const [chatWith, setChatWith] = useState(process.env.sample_admin_email);
  const messengerDisplayRef = useRef<HTMLDivElement>(null);
  const [limit, setLimit] = useState(20);
  const { data, isLoading } = useGetUserMessagesQuery(
    {
      userEmail: isAdmin ? chatWith : userEmail,
      limit: limit,
      type: "messages",
    },
    { skip: !userEmail, pollingInterval: 2000 }
  );
  const { data: emails } = useGetUserEmailsQuery(
    { type: "usersEmails" },
    { skip: !isAdmin }
  );

  const [updateMessages] = useUpdateUserMessagesMutation();
  const [showWidget, setShowWidget] = useState(false);
  const [openWidget, setOpenWidget] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const router = useRouter();

  const isLoggedIn =
    typeof window !== "undefined" && localStorage.getItem("isLogged");

  function toggleWidget() {
    setOpenWidget((prevState) => !prevState);
  }

  function sendMessage() {
    const unique_id = uuid();
    updateMessages({
      userEmail: isAdmin ? chatWith : userEmail,
      message: {
        id: unique_id,
        message: message,
        date: getTime(new Date()),
        creator: isAdmin ? "admin" : "user",
      },
    });
    setMessage("");
    messengerDisplayRef!.current!.scrollTop =
      messengerDisplayRef?.current?.scrollHeight;
  }

  useEffect(() => {
    setShowWidget(false);
    let timer = setTimeout(() => setShowWidget(true), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [router.pathname]);
  useEffect(() => {
    if (openWidget) {
      messengerDisplayRef!.current!.scrollTop =
        messengerDisplayRef?.current?.scrollHeight;
    }
  }, [openWidget]);

  const showOlderMessages = () => {
    if (messengerDisplayRef.current.scrollTop === 0) {
      setLimit((prevLimit) => prevLimit + 20);
      messengerDisplayRef!.current!.scrollTop = 10;
    }
  };

  return (
    <>
      {openWidget && (
        <div className={styles["contact-widget__messenger"]}>
          {!isLoggedIn && (
            <div className={styles["not-logged-in"]}>
              Please log in to use messenger.
            </div>
          )}
          <p className={styles["messenger__header"]}>
            <Image
              src="/assets/General/avatar.png"
              alt="avatar"
              width={40}
              height={40}
            />
            {isAdmin ? (
              <select
                onChange={(e) => {
                  setChatWith(e.target.value);
                }}
                required
                id="brand"
                name="brand"
              >
                <option key="default" value="">
                  default
                </option>
                {emails.userEmails.map((email) => {
                  return <option key={email.email}>{email.email}</option>;
                })}
              </select>
            ) : (
              <span>Resho Consultant</span>
            )}
            <AiOutlineClose onClick={toggleWidget} />
          </p>{" "}
          <div
            onScroll={showOlderMessages}
            ref={messengerDisplayRef}
            className={styles["messenger__display"]}
          >
            {isLoading && <Spinner />}
            {!isLoading &&
              data?.messages?.map((message) => {
                return (
                  <Message
                    key={message.date + Math.random() * 100}
                    msg={message.message}
                    date={message.date}
                    id={message.id}
                    userEmail={userEmail}
                    creator={message.creator}
                  />
                );
              })}
          </div>
          <div className={styles["messenger__input__wrapper"]}>
            <AiOutlineSmile
              className={styles["emojis-opener"]}
              onClick={() => setShowEmojis((prevState) => !prevState)}
            />
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
                onClick={isLoggedIn ? sendMessage : undefined}
                className={styles["messenger__send-button"]}
              >
                <BiSend />
              </span>
            )}{" "}
            {showEmojis && (
              <Emojis
                setMessage={(emoji: string) =>
                  setMessage((prevMessage) => prevMessage + emoji)
                }
              />
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
