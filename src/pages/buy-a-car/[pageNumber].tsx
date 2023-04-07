import React, { useEffect, useState } from "react";

import OffersGrid from "@/components/CarsPage/OffersGrid";

import Warning from "@/components/Typography/Warning";
import Filters from "@/components/CarsPage/Filters/Filters";

import PageSelect from "@/components/CarsPage/PageSelect/PageSelect";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import Spinner from "@/components/UI/Spinner";
import { useGetOffersByRangeQuery } from "@/redux/api/offersApiSlice";
import { CarOffer } from "@/models/models";
import Main from "@/components/MotionComponents/Main";
import { useDispatch } from "react-redux";
import { offersActions } from "@/redux/offersPageSlice";
const CarsPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const skipToken = useSelector((state: RootState) => state.offers.skipToken);
  const pageNumber = router.query.pageNumber;
  const offersPerPage = useSelector(
    (state: RootState) => state.offers.offersPerPage
  );
  const filterObject = useSelector(
    (state: RootState) => state.offers.filterObject
  );
  const filterOffers = (filter: string, value: string | number): void => {
    dispatch(
      offersActions.setFilterObject({ ...filterObject, [filter]: value })
    );
  };

  const { data, isLoading, isFetching, isError, refetch } =
    useGetOffersByRangeQuery(
      {
        min: +pageNumber * offersPerPage - offersPerPage,
        max: offersPerPage,
        type: "range",
        ...filterObject,
      },
      { skip: skipToken }
    );
  const filterData: CarOffer[] = data?.offers || [];

  const loadingCondtion = isLoading || isFetching;

  useEffect(() => {
    router.push("/buy-a-car/1");
  }, [offersPerPage, filterObject]);

  if (isError) {
    return (
      <div className="center-loader">
        <Warning>Couldn't fetch offers.</Warning>
      </div>
    );
  }
  return (
    <Main style="content-margin">
      <Filters
        filterOffers={filterOffers}
        startFetching={() => dispatch(offersActions.setSkiptoken(false))}
      />
      <PageSelect offersAmount={data?.count} currentPageNumber={+pageNumber} />
      {filterData?.length === 0 && !loadingCondtion && skipToken === true && (
        <Warning>Please select some filters.</Warning>
      )}
      {filterData?.length === 0 && !loadingCondtion && skipToken !== true && (
        <Warning>No offers found.</Warning>
      )}
      {loadingCondtion ? (
        <div className="center-loader center-loader--horizontal">
          <Spinner />
        </div>
      ) : (
        <OffersGrid offers={filterData} />
      )}{" "}
    </Main>
  );
};

export default CarsPage;
