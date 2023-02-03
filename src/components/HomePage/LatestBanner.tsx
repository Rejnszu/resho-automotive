import React, { useRef } from "react";
import HeadingH2 from "../Typography/Headings/HeadingH2";
import styles from "./LatestBanner.module.scss";
import LatestTile from "./LatestTile";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { DUMMY_CARS_OFFERS } from "@/dummyData/DummyData";
const LatestBanner = () => {
  const bannerRef = useRef<HTMLUListElement>(null);

  function scrollRight() {
    if (window.innerWidth > 600) {
      bannerRef!.current.scrollLeft += 350;
    } else {
      bannerRef!.current.scrollLeft += 270;
    }
  }
  function scrollLeft() {
    if (window.innerWidth > 600) {
      bannerRef!.current.scrollLeft -= 350;
    } else {
      bannerRef!.current.scrollLeft -= 270;
    }
  }
  return (
    <section className={`${styles["latest-section"]} section-padding`}>
      <HeadingH2>Latest Additions</HeadingH2>
      <div className={`${styles["banner__overlay"]} container`}>
        <button
          type="button"
          onClick={scrollLeft}
          className={`${styles["scroll-button"]} ${styles["scroll-button--left"]}`}
        >
          <IoMdArrowDropleft />
        </button>
        <button
          type="button"
          onClick={scrollRight}
          className={`${styles["scroll-button"]} ${styles["scroll-button--right"]}`}
        >
          <IoMdArrowDropright />
        </button>
        <ul ref={bannerRef} className={`${styles["latest-banner"]}`}>
          {DUMMY_CARS_OFFERS.map((offer) => {
            return <LatestTile key={offer.id} {...offer} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default LatestBanner;
