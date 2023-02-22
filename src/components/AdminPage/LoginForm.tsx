import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/router";
const LoginForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  function login(e: any, user: string, password: string): void {
    e.preventDefault();
    if (
      user === process.env.admin_username &&
      password === process.env.admin_password
    ) {
      sessionStorage.setItem("isLogged", "true");
      router.replace("/admin/dashboard");
    } else {
      console.log("wrong!");
    }
  }

  return (
    <div className={styles["login__wrapper"]}>
      <form className={styles["login-form"]}>
        <label htmlFor="user">UserName</label>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          id="user"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          typeof="text"
          id="password"
        />
        <Button onClick={(e) => login(e, user, password)}>Log in</Button>
      </form>
    </div>
  );
};

export default LoginForm;
