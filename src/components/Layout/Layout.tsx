import React from "react";
import ContactWidget from "../ContactWidget/ContactWidget";
import Footer from "../Footer/Footer";
import MainNavigation from "../Navigation/MainNavigation";
import { useRouter } from "next/router";

import styles from "./Layout.module.scss";
interface props {
  children: React.ReactNode;
}
const Layout = ({ children }: props) => {
  const router = useRouter();
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
      {!router.pathname.includes("/admin") && <ContactWidget />}
    </>
  );
};

export default Layout;
