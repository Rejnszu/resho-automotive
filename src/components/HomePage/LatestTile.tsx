import { CarOffer } from "@/models/models";
import Link from "next/link";
import React from "react";
import {
  GiRoad,
  GiPriceTag,
  GiCalendar,
  GiPowerLightning,
} from "react-icons/gi";
import styles from "./LatestTile.module.scss";

interface Props {
  offer: CarOffer;
}
const LatestTile = ({ offer }: Props) => {
  return (
    <Link href={`/buy-a-car/offer/${offer._id}`}>
      <div
        className={styles["latest-tile"]}
        style={{ backgroundImage: `url(${offer.images[0]})` }}
      >
        <p className={styles["tile__title"]}>{offer.model}</p>
        <p className={styles["tile__text"]}>
          <GiRoad />
          {offer.mileage} KM
        </p>
        <p className={styles["tile__text"]}>
          <GiPriceTag />
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(offer.price)}
        </p>
        <p className={styles["tile__text"]}>
          <GiCalendar />
          {offer.year} year
        </p>
        <p className={styles["tile__text"]}>
          <GiPowerLightning />
          {offer.power} HP
        </p>
      </div>
    </Link>
  );
};

export default LatestTile;
