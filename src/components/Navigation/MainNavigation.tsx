import React, { useEffect, useState } from "react";
import styles from "./MainNavigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import Burger from "./Burger";
const MainNavigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function scrollNav() {
      if (window.pageYOffset > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", scrollNav);
    return () => window.removeEventListener("scroll", scrollNav);
  });

  return (
    <>
      <nav
        className={`${styles["navigation--desktop"]} ${
          isScrolled ? styles.scrolled : ""
        } `}
      >
        <ul>
          <li className={styles["navigation__link--logo"]}>
            <Link href="/">
              <Image
                src="/assets/General/logo.png"
                alt="logo"
                height={40}
                width={120}
              />
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/buy-a-car">Buy a car</Link>
          </li>
          <li>
            <Link href="/finance-your-car">Finances</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Burger
        toggleMobileNav={() => setShowMobileNav((prevState) => !prevState)}
        showMobileNav={showMobileNav}
      />
      <nav
        className={`${styles["navigation--mobile"]} ${
          showMobileNav ? styles.active : ""
        }`}
      >
        <ul onClick={() => setShowMobileNav((prevState) => !prevState)}>
          <li className={styles["navigation__link--logo"]}>
            <Link href="/">
              <Image
                src="/assets/General/logo.png"
                alt="logo"
                height={40}
                width={120}
              />
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/buy-a-car">Buy a car</Link>
          </li>
          <li>
            <Link href="/finance-your-car">Finances</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
