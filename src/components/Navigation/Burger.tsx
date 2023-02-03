import React from "react";
import styles from "./Burger.module.scss";
interface props {
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}
const Burger = ({ showMobileNav, toggleMobileNav }: props) => {
  return (
    <div onClick={toggleMobileNav} className={styles.burger}>
      <span className={showMobileNav ? styles.active : ""}></span>
      <span className={showMobileNav ? styles.active : ""}></span>
      <span className={showMobileNav ? styles.active : ""}></span>
      <span className={showMobileNav ? styles.active : ""}></span>
      <span className={showMobileNav ? styles.active : ""}></span>
    </div>
  );
};

export default Burger;
