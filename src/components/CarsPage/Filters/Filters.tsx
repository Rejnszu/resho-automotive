import React from "react";
import styles from "./Filters.module.scss";
import { carBrands, yearArray } from "@/dummyData/DummyData";

import HeadingH2 from "@/components/Typography/Headings/HeadingH2";

interface Props {
  filterOffers: (filter: string, value: string | number) => void;
}

const Filters = ({ filterOffers }: Props) => {
  return (
    <>
      <HeadingH2>What you are looking for?</HeadingH2>
      <section className={`${styles.filters}  container`}>
        <div className={styles["filter-wrapper"]}>
          <label>Car brand</label>
          <select
            name="brand"
            onChange={(e) =>
              filterOffers(e.target.name, e.target.value.toLowerCase())
            }
          >
            <option value="">Default</option>
            {carBrands.map((brand) => {
              return (
                <option key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles["filter-wrapper"]}>
          <label htmlFor="model">Model</label>
          <input
            required
            onChange={(e) =>
              filterOffers(e.target.name, e.target.value.toLowerCase())
            }
            type="text"
            id="model"
            name="model"
          />
        </div>
        <div className={styles["filter-wrapper"]}>
          <label htmlFor="number">Year of production</label>
          <select
            onChange={(e) => filterOffers(e.target.name, e.target.value)}
            id="year"
            name="year"
          >
            <option value="">Default</option>

            {yearArray.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles["filter-wrapper"]}>
          <label htmlFor="fuel">Fuel</label>

          <select
            required
            onChange={(e) => filterOffers(e.target.name, e.target.value)}
            id="fuel"
            name="fuel"
          >
            <option value="">Default</option>
            <option value="petrol">petrol</option>
            <option value="diesel">diesel</option>
            <option value="electric">electric</option>
            <option value="hybrid">hybrid</option>
          </select>
        </div>{" "}
        <div className={styles["filter-outer-wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="mileageLowerLevel">From:</label>

            <select
              required
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
              }}
              id="mileageLowerLevel"
              name="mileageLowerLevel"
            >
              <option value={0}>Default</option>
              <option value={5000}>5.000</option>
              <option value={25000}>25.000</option>
              <option value={50000}>50.000</option>
              <option value={75000}>75.000</option>
              <option value={100000}>100.000</option>
              <option value={150000}>150.000</option>
            </select>
          </div>{" "}
          <p>Mileage [km]:</p>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="mileageUpperLevel">To:</label>

            <select
              required
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
              }}
              id="mileageUpperLevel"
              name="mileageUpperLevel"
            >
              <option value={0}>Default</option>
              <option value={5000}>5.000</option>
              <option value={25000}>25.000</option>
              <option value={50000}>50.000</option>
              <option value={75000}>75.000</option>
              <option value={100000}>100.000</option>
              <option value={150000}>150.000</option>
            </select>
          </div>
        </div>
        <div className={styles["filter-outer-wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="priceLowerLevel">From:</label>

            <select
              required
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
              }}
              id="priceLowerLevel"
              name="priceLowerLevel"
            >
              <option value={0}>Default</option>
              <option value={5000}>5.000</option>
              <option value={25000}>25.000</option>
              <option value={50000}>50.000</option>
              <option value={75000}>75.000</option>
              <option value={100000}>100.000</option>
              <option value={150000}>150.000</option>
            </select>
          </div>
          <p>Price [€]:</p>{" "}
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="priceUpperLevel">To:</label>

            <select
              required
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
              }}
              id="priceUpperLevel"
              name="priceUpperLevel"
            >
              <option value={10000000000}>Default</option>
              <option value={5000}>5.000</option>
              <option value={25000}>25.000</option>
              <option value={50000}>50.000</option>
              <option value={75000}>75.000</option>
              <option value={100000}>100.000</option>
              <option value={150000}>150.000</option>
            </select>
          </div>
        </div>{" "}
        <div className={styles["filter-outer-wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="powerLowerLevel">From:</label>

            <select
              required
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
              }}
              id="powerLowerLevel"
              name="powerLowerLevel"
            >
              <option value={0}>Default</option>
              <option value={50}>50</option>
              <option value={80}>80</option>
              <option value={120}>120</option>
              <option value={150}>150</option>
              <option value={200}>200</option>
              <option value={300}>300</option>
              <option value={500}>500</option>
            </select>
          </div>
          <p>Power [KM]:</p>{" "}
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="powerUpperLevel">To:</label>

            <select
              required
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
              }}
              id="powerUpperLevel"
              name="powerUpperLevel"
            >
              <option value={0}>Default</option>
              <option value={50}>50</option>
              <option value={80}>80</option>
              <option value={120}>120</option>
              <option value={150}>150</option>
              <option value={200}>200</option>
              <option value={300}>300</option>
              <option value={500}>500</option>
            </select>
          </div>
        </div>{" "}
        <div className={styles["filter-outer-wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="enginecapacityLowerLevel">From:</label>

            <select
              required
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
              }}
              id="enginecapacityLowerLevel"
              name="enginecapacityLowerLevel"
            >
              <option value={0}>Default</option>
              <option value={50}>50</option>
              <option value={80}>80</option>
              <option value={125}>125</option>
              <option value={250}>250</option>
              <option value={500}>500</option>
              <option value={600}>600</option>
              <option value={750}>750</option>
              <option value={1000}>1000</option>
              <option value={1250}>1250</option>
              <option value={1500}>1500</option>
              <option value={2000}>2000</option>
              <option value={2500}>2500</option>
              <option value={3000}>3000</option>
              <option value={4000}>4000</option>
            </select>
          </div>
          <p>Engine capacity [cm³]:</p>{" "}
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="enginecapacityUpperLevel">To:</label>

            <select
              required
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
              }}
              id="enginecapacityUpperLevel"
              name="enginecapacityUpperLevel"
            >
              <option value={0}>Default</option>
              <option value={50}>50</option>
              <option value={80}>80</option>
              <option value={125}>125</option>
              <option value={250}>250</option>
              <option value={500}>500</option>
              <option value={600}>600</option>
              <option value={750}>750</option>
              <option value={1000}>1000</option>
              <option value={1250}>1250</option>
              <option value={1500}>1500</option>
              <option value={2000}>2000</option>
              <option value={2500}>2500</option>
              <option value={3000}>3000</option>
              <option value={4000}>4000</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
