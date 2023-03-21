import React, { useRef } from "react";
import HeadingH2 from "../Typography/Headings/HeadingH2";
import styles from "./LatestBanner.module.scss";
import LatestTile from "./LatestTile";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { CarOffer } from "@/models/models";
import Warning from "../Typography/Warning";
import ScrollContainer from "react-indiana-drag-scroll";
interface Props {
  offers: CarOffer[];
}
const LatestBanner = ({ offers }: Props) => {
  const bannerRef = useRef<HTMLUListElement>(null);

  function scrollRight() {
    if (window.innerWidth > 600) {
      bannerRef!.current.scrollLeft += 360;
    } else {
      bannerRef!.current.scrollLeft += 270;
    }
  }
  function scrollLeft() {
    if (window.innerWidth > 600) {
      bannerRef!.current.scrollLeft -= 360;
    } else {
      bannerRef!.current.scrollLeft -= 270;
    }
  }
  if (offers.length === 0) {
    return (
      <div className="center-loader">
        <Warning>No offers found.</Warning>
      </div>
    );
  }
  return (
    <section className={`${styles["latest-section"]} section-padding`}>
      <HeadingH2>Latest Additions</HeadingH2>
      <div className={`${styles["banner__overlay"]} container`}>
        {offers.length >= 5 && (
          <React.Fragment>
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
          </React.Fragment>
        )}

        <ScrollContainer
          innerRef={bannerRef}
          className={`${styles["latest-banner"]}`}
        >
          {offers.map((offer) => {
            return <LatestTile key={offer._id} offer={offer} />;
          })}
        </ScrollContainer>
      </div>
    </section>
  );
};

export default LatestBanner;
