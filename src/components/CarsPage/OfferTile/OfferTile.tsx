import React from "react";
import styles from "./OfferTile.module.scss";
import Link from "next/link";
import { CarOffer } from "@/models/models";
import {
  GiRoad,
  GiPriceTag,
  GiCalendar,
  GiPowerLightning,
} from "react-icons/gi";

const OfferTile = ({ ...props }: CarOffer) => {
  return (
    <Link href={`/buy-a-car/offer/${props._id}`}>
      <div
        className={styles["offer-tile"]}
        style={{ backgroundImage: `url(${props.images[0]})` }}
      >
        <p className={styles["tile__title"]}>{props.model}</p>
        <p className={styles["tile__text"]}>
          <GiRoad />
          {new Intl.NumberFormat("de-DE").format(props.mileage)} KM
        </p>
        <p className={styles["tile__text"]}>
          <GiPriceTag />
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(props.price)}
        </p>
        <p className={styles["tile__text"]}>
          <GiCalendar />
          {props.year} year
        </p>
        <p className={styles["tile__text"]}>
          <GiPowerLightning />
          {props.power} HP
        </p>
      </div>
    </Link>
  );
};

export default OfferTile;
