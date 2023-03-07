import React from "react";
import styles from "./DashboardNavigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/UI/Button";
import { BsBoxArrowRight } from "react-icons/bs";
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
          <li>
            <Link href="/admin/dashboard/user-settings">User settings</Link>
          </li>
        </ul>
      </div>
      <div className={styles["nav-bar-top"]}>
        <Button
          style={styles["button-log-out"]}
          onClick={() => {
            localStorage.removeItem("isLogged");
            localStorage.removeItem("userId");
            router.replace("/admin");
          }}
        >
          <p>Logout</p> <BsBoxArrowRight />
        </Button>
      </div>
    </>
  );
};

export default DashboardNavigation;
