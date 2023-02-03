import React from "react";
import Footer from "../Footer/Footer";
import MainNavigation from "../Navigation/MainNavigation";
import styles from "./Layout.module.scss";
interface props {
  children: React.ReactNode;
}
const Layout = ({ children }: props) => {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
