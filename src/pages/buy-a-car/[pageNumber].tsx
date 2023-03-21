import React, { useEffect } from "react";

import OffersGrid from "@/components/CarsPage/OffersGrid";

import Warning from "@/components/Typography/Warning";
import Filters from "@/components/CarsPage/Filters/Filters";
import useFilter from "@/hooks/useFilter";
import PageSelect from "@/components/CarsPage/PageSelect/PageSelect";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import Spinner from "@/components/UI/Spinner";
import { useGetAllOffersQuery } from "@/redux/api/offersApiSlice";
import { CarOffer } from "@/models/models";
const CarsPage = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNumber;
  const offersPerPage = useSelector(
    (state: RootState) => state.offers.offersPerPage
  );

  const { data, isLoading, isFetching, isError, refetch } =
    useGetAllOffersQuery({
      type: "all",
    });
  const offers: CarOffer[] = data?.offers;

  const { filterOffers, filteredOffers } = useFilter(offers);

  const paginatedOffers = filteredOffers?.slice(
    +pageNumber * offersPerPage - offersPerPage,
    +pageNumber * offersPerPage
  );

  const loadingCondtion = isLoading || isFetching || !filteredOffers;

  useEffect(() => {
    router.push("/buy-a-car/1");
  }, [offersPerPage, filteredOffers]);

  useEffect(() => {
    refetch();
  }, []);

  if (isError) {
    return (
      <div className="center-loader">
        <Warning>Couldn't fetch offers.</Warning>
      </div>
    );
  }
  return (
    <main className="content-margin">
      <Filters filterOffers={filterOffers} />
      <PageSelect
        offersAmount={filteredOffers?.length}
        currentPageNumber={+pageNumber}
      />
      {filteredOffers?.length === 0 && !loadingCondtion && (
        <Warning>No offers found.</Warning>
      )}
      {loadingCondtion ? (
        <div className="center-loader center-loader--horizontal">
          <Spinner />
        </div>
      ) : (
        <OffersGrid offers={paginatedOffers} />
      )}{" "}
    </main>
  );
};

export default CarsPage;
