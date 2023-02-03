import HeadingH2 from "@/components/Typography/Headings/HeadingH2";
import React from "react";
import styles from "./Map.module.scss";
const Map = () => {
  return (
    <section className={styles["map__section"]}>
      <div className={styles["map__wrappers"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.59372208733!2d13.284650188052463!3d52.50697037929835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1675345967779!5m2!1spl!2spl"
          style={{ border: 0 }}
          loading="lazy"
          className={styles.map}
        ></iframe>
      </div>
      <div className={styles["location-info"]}></div>
    </section>
  );
};

export default Map;
