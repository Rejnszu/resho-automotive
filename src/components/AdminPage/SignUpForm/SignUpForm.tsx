import React, { useEffect, useRef, useState } from "react";
import styles from "./SignUpForm.module.scss";
import Button from "@/components/UI/Button";
import { useRouter } from "next/router";
import { useCreateUserMutation } from "@/redux/api/usersApiSlice";
import Spinner from "@/components/UI/Spinner";
import Warning from "@/components/Typography/Warning";
import Success from "@/components/Typography/Success";
import { User } from "@/models/models";
const SignUpForm = () => {
  const router = useRouter();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const [errorType, setErrorType] = useState<string>();
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation();

  const submitUser = (e) => {
    e.preventDefault();
    setErrorType("");
    if (!emailRef.current.value || !emailRef.current.value.includes("@")) {
      setErrorType("Incorrect email");
      return;
    } else if (
      !passwordRef.current.value ||
      passwordRef.current.value.trim().length < 6
    ) {
      setErrorType(
        "Invalid input, password should be at least 6 characters long."
      );
      return;
    } else if (!phoneRef.current.value || phoneRef.current.value.length < 9) {
      setErrorType("Incorrect phone.");
      return;
    }

    const user: User = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      offers: [],
    };
    createUser(user)
      .unwrap()
      .catch((error) => {
        setErrorType(error.data.message);
      });
  };
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => router.replace("/admin"), 2000);
    }
  }, [isSuccess, router]);
  return (
    <div className={styles["sign-up__wrapper"]}>
      <form onSubmit={submitUser} className={styles["sign-up-form"]}>
        <label htmlFor="user">Email</label>
        <input required ref={emailRef} type="text" id="user" />
        <label htmlFor="password">Password</label>
        <input required ref={passwordRef} typeof="phone" id="password" />{" "}
        <label htmlFor="phone">Phone</label>
        <input required ref={phoneRef} typeof="tel" id="phone" />
        <Button type="submit">Sign up</Button>
      </form>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {errorType !== "" && <Warning>{errorType}</Warning>}
      {isSuccess && <Success>Account created succesfully</Success>}
    </div>
  );
};

export default SignUpForm;
