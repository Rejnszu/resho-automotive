import { useState, useEffect } from "react";
import {
  filterByHigherRangeParameter,
  filterByLowerRangeParameter,
  filterByStringParameter,
} from "@/utils/filters";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { CarOffer } from "@/models/models";
import { offersActions } from "@/redux/offersPageSlice";
import { RootState } from "@/redux/store";
const useFilter = (offers: CarOffer[]) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filterObject = useSelector(
    (state: RootState) => state.offers.filterObject
  );
  const [filteredOffers, setFilteredOffers] = useState(offers);

  const filterOffers = (filter: string, value: string | number): void => {
    dispatch(
      offersActions.setFilterObject({ ...filterObject, [filter]: value })
    );
  };

  useEffect(() => {
    let result = offers;
    for (const [key, value] of Object.entries(filterObject)) {
      if (
        key === "powerUpperLevel" ||
        key === "mileageUpperLevel" ||
        key === "enginecapacityUpperLevel" ||
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
        key === "enginecapacityLowerLevel" ||
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

  useEffect(() => {
    return () => {
      dispatch(offersActions.resetFilter());
    };
  }, [router.pathname]);
  return { filterOffers, filteredOffers };
};
export default useFilter;
