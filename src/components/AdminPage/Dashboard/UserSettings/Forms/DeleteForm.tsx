import React, { useRef, useState, useEffect } from "react";
import { useDeleteUserMutation } from "@/redux/api/usersApiSlice";
import Button from "@/components/UI/Button";
import HeadingH3 from "@/components/Typography/Headings/HeadingH3";
import Spinner from "@/components/UI/Spinner";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Warning from "@/components/Typography/Warning";
import styles from "./DeleteForm.module.scss";
import { useRouter } from "next/router";
const DeleteForm = () => {
  const deletePasswordRef = useRef(null);
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const [errorType, setErrorType] = useState("");
  const [deleteUser, { isLoading, isSuccess: deletingCompleted }] =
    useDeleteUserMutation();

  useEffect(() => {
    if (deletingCompleted) {
      localStorage.removeItem("isLogged");
      localStorage.removeItem("userId");
      router.replace("/admin");
    }
  });
  return (
    <form
      className={styles.delete}
      onSubmit={(e) => {
        setErrorType("");
        e.preventDefault();
        deleteUser({
          email: user.email,
          password: deletePasswordRef.current.value,
        })
          .unwrap()
          .catch((error) => {
            setErrorType(error.data.message);
          });
      }}
    >
      <HeadingH3>Delete your account</HeadingH3>
      <label>Password</label>
      <input ref={deletePasswordRef} required />{" "}
      {errorType !== "" && <Warning>{errorType}</Warning>}
      <Button type="submit">Delete</Button>
      {isLoading && (
        <div className={styles.loader}>
          <Spinner />
        </div>
      )}
    </form>
  );
};

export default DeleteForm;
