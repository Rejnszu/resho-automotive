import { CarOffer } from "@/models/models";
import React from "react";
import styles from "./OffersGrid.module.scss";
import OfferTile from "./OfferTile/OfferTile";
const OffersGrid = (props) => {
  return (
    <section className={`${styles["offers__grid"]} container section-padding`}>
      {props.offers.map((offer) => {
        return <OfferTile key={offer._id} {...offer} />;
      })}
    </section>
  );
};

export default OffersGrid;
