import React, { useEffect, useState } from "react";
import DashboardNavigation from "../AdminPage/Dashboard/Navigation/DashboardNavigation";
import styles from "./DashboardLayout.module.scss";
import { useRouter } from "next/router";

import Spinner from "../UI/Spinner";
interface props {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: props) => {
  const [showLoader, setShowLoader] = useState(true);
  const router = useRouter();
  const isLogged =
    typeof window !== "undefined" &&
    localStorage.getItem("isLogged") === "true";

  useEffect(() => {
    if (!isLogged) {
      router.replace("/admin");
    }
  });
  useEffect(() => {
    setShowLoader(true);
    let timer = setTimeout(() => setShowLoader(false), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [router.pathname]);

  if (showLoader) {
    return (
      <div className="center-loader">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <DashboardNavigation />
      <main className={styles["dashboard__content"]}>{children}</main>
    </>
  );
};

export default DashboardLayout;
