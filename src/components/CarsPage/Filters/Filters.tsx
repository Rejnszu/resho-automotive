import React from "react";
import styles from "./Filters.module.scss";
import { carBrands, yearArray } from "@/dummyData/DummyData";
import { useSelector, useDispatch } from "react-redux";
import HeadingH2 from "@/components/Typography/Headings/HeadingH2";
import { RootState } from "@/redux/store";
import Button from "@/components/UI/Button";
import { offersActions } from "@/redux/offersPageSlice";

interface Props {
  filterOffers: (filter: string, value: string | number) => void;
  startFetching: () => void;
}

const Filters = ({ filterOffers, startFetching }: Props) => {
  const filterObject = useSelector(
    (state: RootState) => state.offers.filterObject
  );
  const dispatch = useDispatch();
  const resetFilters = () => {
    dispatch(offersActions.resetFilter());
    dispatch(offersActions.setSkiptoken(true));
  };

  return (
    <>
      <HeadingH2>What you are looking for?</HeadingH2>
      <section className={`${styles.filters}  container`}>
        <div className={styles["filter-wrapper"]}>
          <label>Car brand</label>
          <select
            name="brand"
            value={filterObject.brand}
            onChange={(e) => {
              filterOffers(e.target.name, e.target.value);
              startFetching();
            }}
          >
            <option value="">Default</option>
            {carBrands.map((brand) => {
              return (
                <option key={brand.id} value={brand.name.toLocaleLowerCase()}>
                  {brand.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles["filter-wrapper"]}>
          <label htmlFor="model">Model</label>
          <input
            onChange={(e) => {
              filterOffers(e.target.name, e.target.value.toLowerCase());
              startFetching();
            }}
            value={filterObject.model}
            type="text"
            id="model"
            name="model"
          />
        </div>
        <div className={styles["filter-outer-wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="mileageLowerLevel">From:</label>

            <select
              value={filterObject.yearLowerLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
              }}
              id="yearLowerLevel"
              name="yearLowerLevel"
            >
              <option value={0}>Default</option>

              {yearArray.map((year) => {
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          <p>Year of production:</p>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="yearUpperLevel">To:</label>

            <select
              value={filterObject.yearUpperLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
              }}
              id="yearUpperLevel"
              name="yearUpperLevel"
            >
              <option value={0}>Default</option>

              {yearArray.map((year) => {
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={styles["filter-wrapper"]}>
          <label htmlFor="fuel">Fuel</label>

          <select
            value={filterObject.fuel}
            onChange={(e) => {
              filterOffers(e.target.name, e.target.value);
              startFetching();
            }}
            id="fuel"
            name="fuel"
          >
            <option value="">Default</option>
            <option value="petrol">petrol</option>
            <option value="diesel">diesel</option>
            <option value="electric">electric</option>
            <option value="hybrid">hybrid</option>
          </select>
        </div>
        <div className={styles["filter-outer-wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="mileageLowerLevel">From:</label>

            <select
              value={filterObject.mileageLowerLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
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
              <option value={250000}>250.000</option>
              <option value={500000}>500.000</option>
            </select>
          </div>
          <p>Mileage [km]:</p>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="mileageUpperLevel">To:</label>

            <select
              value={filterObject.mileageUpperLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
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
              <option value={250000}>250.000</option>
              <option value={500000}>500.000</option>
            </select>
          </div>
        </div>
        <div className={styles["filter-outer-wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="priceLowerLevel">From:</label>

            <select
              value={filterObject.priceLowerLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
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
          <p>Price [€]:</p>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="priceUpperLevel">To:</label>

            <select
              value={filterObject.priceUpperLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
              }}
              id="priceUpperLevel"
              name="priceUpperLevel"
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
            <label htmlFor="powerLowerLevel">From:</label>

            <select
              value={filterObject.powerLowerLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
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
          <p>Power [KM]:</p>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="powerUpperLevel">To:</label>

            <select
              value={filterObject.powerUpperLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
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
        </div>
        <div className={styles["filter-outer-wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="enginecapacityLowerLevel">From:</label>

            <select
              value={filterObject.enginecapacityLowerLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
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
          <p>Engine capacity [cm³]:</p>
          <div className={styles["filter-wrapper"]}>
            <label htmlFor="enginecapacityUpperLevel">To:</label>

            <select
              value={filterObject.enginecapacityUpperLevel}
              onChange={(e) => {
                filterOffers(e.target.name, +e.target.value);
                startFetching();
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
        <div className={styles["filter-wrapper"]}>
          <label>Color</label>
          <select
            value={filterObject.color}
            name="color"
            onChange={(e) => {
              filterOffers(e.target.name, e.target.value.toLowerCase());
              startFetching();
            }}
          >
            <option value="">Default</option>
            <option value="beigne">beigne</option>
            <option value="black">black</option>
            <option value="blue">blue</option>
            <option value="brown">brown</option>
            <option value="claret">claret</option>
            <option value="dark blue">dark blue</option>
            <option value="gold">gold</option>
            <option value="green">green</option>
            <option value="grey">grey</option>
            <option value="orange">orange</option>
            <option value="purple">purple</option>
            <option value="red">red</option>
            <option value="silver">silver</option>
            <option value="sky blue">sky blue</option>
            <option value="white">white</option>
            <option value="yellow">yellow</option>
            <option value="other">other</option>
          </select>
        </div>
        <Button style={styles["reset-button"]} onClick={resetFilters}>
          Reset Filters
        </Button>
      </section>
    </>
  );
};

export default Filters;
