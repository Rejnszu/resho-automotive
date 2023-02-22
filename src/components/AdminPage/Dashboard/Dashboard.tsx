
import React from "react";
import styles from "./Dashboard.module.scss";
import { useRouter } from "next/router";
const Dashboard = () => {
  const router = useRouter();
  return <div className={styles["dashboard__layout"]}>Dashboard</div>;
};

export default Dashboard;
