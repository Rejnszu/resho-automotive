import React, { useState, useEffect } from "react";
import Button from "@/components/UI/Button";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/router";
import { useGetUserMutation } from "@/redux/api/usersApiSlice";
import { useDispatch } from "react-redux";
import Warning from "@/components/Typography/Warning";
import Spinner from "@/components/UI/Spinner";
import { userActions } from "@/redux/user-slice";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [getUser, { isSuccess, isLoading }] = useGetUserMutation();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorType, setErrorType] = useState("");

  async function login(e, email: string, password: string) {
    e.preventDefault();
    setErrorType("");
    if (email.trim().length === 0 || !email.includes("@")) {
      setErrorType("Invalid email");
      return;
    } else {
      if (password.trim().length === 0) {
        setErrorType("Empty password input");
        return;
      }
    }
    getUser({ email, password })
      .unwrap()
      .then((data) => {
        sessionStorage.setItem("isLogged", "true");
        router.replace("/admin/dashboard");
        console.log(data.user);
        dispatch(userActions.setUser(data.user));
      })
      .catch((error) => {
        setErrorType(error.data.message);
      });
  }

  return (
    <div className={styles["login__wrapper"]}>
      <form className={styles["login-form"]}>
        <label htmlFor="user">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <Button onClick={(e) => login(e, email, password)}>Log in</Button>
      </form>
      <Button
        onClick={() => {
          router.push("/admin/sign-up");
        }}
      >
        Sign in
      </Button>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {errorType !== "" && <Warning>{errorType}</Warning>}
    </div>
  );
};

export default LoginForm;
