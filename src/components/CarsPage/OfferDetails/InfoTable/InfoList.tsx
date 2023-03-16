import { CarOffer } from "@/models/models";
import styles from "./InfoList.module.scss";
import React from "react";
interface Props {
  currentOffer: CarOffer;
}

const InfoList = ({ currentOffer }: Props) => {
  return (
    <section>
      <ul className={styles["info-list"]}>
        <li>
          <p>Brand:</p>
          <p>{currentOffer.brand}</p>
        </li>
        <li>
          <p>Model:</p>
          <p>{currentOffer.model}</p>
        </li>
        <li>
          <p>Engine:</p>
          <p>{currentOffer.engine}</p>
        </li>
        <li>
          <p>Power:</p>
          <p>{currentOffer.power} KM</p>
        </li>
        <li>
          <p>Engine Capacity:</p>
          <p>{currentOffer.enginecapacity} cm³</p>
        </li>
        <li>
          <p>Fuel:</p>
          <p>{currentOffer.fuel}</p>
        </li>
        <li>
          <p>Year of production</p>
          <p>{currentOffer.year}</p>
        </li>
        <li>
          <p>Mileage:</p>
          <p>
            {new Intl.NumberFormat("de-DE").format(currentOffer.mileage)} km
          </p>
        </li>
        <li>
          <p>Price:</p>
          <p>
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(currentOffer.price)}
          </p>
        </li>
        <li>
          <p>Color:</p>
          <p>{currentOffer.color}</p>
        </li>
      </ul>
      <div className={styles["info__description"]}>
        <p>Description:</p>
        <p>{currentOffer.description}</p>
      </div>
    </section>
  );
};

export default InfoList;
