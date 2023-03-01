import React, { useEffect } from "react";
import styles from "./Cookies.module.scss";
import { useDispatch } from "react-redux";
import { cookiesActions } from "@/redux/cookies-slice";
import Button from "../UI/Button";
const Cookies = () => {
  const dispatch = useDispatch();
  const hideCookies = () => {
    dispatch(cookiesActions.hideCookiesModal());
    localStorage.setItem("showCookies", "false");
  };
  useEffect(() => {
    if (localStorage.getItem("showCookies") === "false") {
      dispatch(cookiesActions.hideCookiesModal());
    }
  });
  return (
    <section className={styles.cookies}>
      <h3>
        This website uses cookies We use cookies, tags and similar technologies
        for operational and marketing purposes.
      </h3>
      <div className={styles["cookies__buttons-wrapper"]}>
        <Button onClick={hideCookies}>Accept</Button>
        <Button onClick={hideCookies}>Decline</Button>
      </div>
    </section>
  );
};

export default Cookies;
