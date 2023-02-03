import React from "react";
import styles from "./ShopInfo.module.scss";
import {
  BsFillHouseDoorFill,
  BsFillTelephoneFill,
  BsDoorOpen,
} from "react-icons/bs";

import Text from "@/components/Typography/Text";
const ShopInfo = () => {
  return (
    <section className={`container section-padding ${styles["info__section"]}`}>
      <div className={styles["info__tile"]}>
        <BsFillHouseDoorFill />
        <Text>Visit us:</Text>
        <p className="bold">
          Urlich Strasse 39B,
          <br /> 89-232, Berlin
        </p>
      </div>
      <div className={styles["info__tile"]}>
        <BsDoorOpen />
        <Text>We are open:</Text>
        <p className="bold">Mon-Fri: 8:00-18:00</p>
        <p className="bold">Sat: 8:00-15:00</p>
        <p className="bold">Sun: Closed</p>
      </div>
      <div className={styles["info__tile"]}>
        <BsFillTelephoneFill />
        <Text>Call us:</Text>
        <p className="bold">+49 538-68-68</p>
      </div>
    </section>
  );
};

export default ShopInfo;
