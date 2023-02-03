import React from "react";
import {
  GiRoad,
  GiPriceTag,
  GiCalendar,
  GiPowerLightning,
} from "react-icons/gi";
import styles from "./LatestTile.module.scss";

interface props {
  id: string;
  model: string;
  photo: string;
  mileage: number;
  yearOfProduction: number;
  engine: {
    type: string;
    capacity: number;
    power: number;
  };
  price: number;
}
const LatestTile = ({ ...props }: props) => {
  return (
    <div
      className={styles["latest-tile"]}
      style={{ backgroundImage: `url(${props.photo})` }}
    >
      <p className={styles["tile__title"]}>{props.model}</p>
      <p className={styles["tile__text"]}>
        <GiRoad />
        {props.mileage} KM
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
        {props.yearOfProduction} year
      </p>
      <p className={styles["tile__text"]}>
        <GiPowerLightning />
        {props.engine.power} HP
      </p>
    </div>
  );
};

export default LatestTile;
