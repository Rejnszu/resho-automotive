import React from "react";
import styles from "./Dashboard.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();
  return (
    <div className={styles["dashboard__layout"]}>Welcome: {user.name}</div>
  );
};

export default Dashboard;
