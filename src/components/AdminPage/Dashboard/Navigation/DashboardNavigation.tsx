import React from "react";
import styles from "./DashboardNavigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/UI/Button";
const DashboardNavigation = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles["nav-bar-left"]}>
        <ul>
          <li>
            <Link href="/admin/dashboard/add-an-offer">Add new offer</Link>
          </li>
          <li>
            <Link href="/admin/dashboard/your-offers">See all offers</Link>
          </li>
        </ul>
      </div>
      <div className={styles["nav-bar-top"]}>
        <Button
          style={styles["button-log-out"]}
          onClick={() => {
            sessionStorage.setItem("isLogged", "false");
            router.replace("/admin");
          }}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default DashboardNavigation;