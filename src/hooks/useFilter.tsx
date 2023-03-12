import { useState, useEffect } from "react";
import {
  filterByHigherRangeParameter,
  filterByLowerRangeParameter,
  filterByStringParameter,
} from "@/utils/filters";
import { CarOffer } from "@/models/models";
const useFilter = (offers: CarOffer[]) => {
  const [filteredOffers, setFilteredOffers] = useState(offers);
  const [filterObject, setFilterObject] = useState({
    model: "",
    brand: "",
    year: "",
    fuel: "",
    color: "",
    powerUpperLevel: null,
    powerLowerLevel: null,
    mileageUpperLevel: null,
    mileageLowerLevel: null,
    engineCapacityUpperLevel: null,
    engineCapacityLowerLevel: null,
    priceUpperLevel: null,
    priceLowerLevel: null,
  });
  const filterOffers = (filter: string, value: string | number): void => {
    setFilterObject({ ...filterObject, [filter]: value });
  };
  console.log(filterObject);
  useEffect(() => {
    let result = offers;
    for (const [key, value] of Object.entries(filterObject)) {
      if (
        key === "powerUpperLevel" ||
        key === "mileageUpperLevel" ||
        key === "engineCapacityUpperLevel" ||
        key == "priceUpperLevel"
      ) {
        result = filterByHigherRangeParameter(
          key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ")[0],
          value,
          result
        );
      } else if (
        key === "powerLowerLevel" ||
        key === "mileageLowerLevel" ||
        key === "engineCapacityLowerLevel" ||
        key == "priceLowerLevel"
      ) {
        result = filterByLowerRangeParameter(
          key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ")[0],
          value,
          result
        );
      } else {
        result = filterByStringParameter(key, value, result);
      }
    }

    setFilteredOffers(result);
  }, [filterObject, offers]);
  return { filterOffers, filteredOffers };
};
export default useFilter;
