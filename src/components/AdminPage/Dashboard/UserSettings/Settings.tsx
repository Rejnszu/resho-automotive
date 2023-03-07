import React, { useRef } from "react";
import styles from "./Settings.module.scss";
import HeadingH3 from "@/components/Typography/Headings/HeadingH3";
import Button from "@/components/UI/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDeleteUserMutation } from "@/redux/api/usersApiSlice";
import Spinner from "@/components/UI/Spinner";
import DeleteForm from "./Forms/DeleteForm";
import ChaneUserInfoForm from "./Forms/ChaneUserInfoForm";
const Settings = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [deleteUser, { data, isLoading, isSuccess: deletingCompleted, error }] =
    useDeleteUserMutation();
  const deletePasswordRef = useRef(null);

  return (
    <section className={`${styles.settings} "section-padding container`}>
      <ChaneUserInfoForm />
      <DeleteForm />
    </section>
  );
};

export default Settings;
