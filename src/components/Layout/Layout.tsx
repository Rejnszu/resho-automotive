import React from "react";
import ContactWidget from "../ContactWidget/ContactWidget";
import Footer from "../Footer/Footer";
import MainNavigation from "../Navigation/MainNavigation";
import { useRouter } from "next/router";
import Cookies from "../Cookies/Cookies";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const showCookiesModal = useSelector(
    (state: RootState) => state.cookies.showCookiesModal
  );
  const router = useRouter();
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
      {!router.pathname.includes("/admin") && <ContactWidget />}
      {showCookiesModal && <Cookies />}
    </>
  );
};

export default Layout;
