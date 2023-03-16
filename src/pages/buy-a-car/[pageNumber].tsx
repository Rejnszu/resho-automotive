import React, { useEffect, useState } from "react";

import OffersGrid from "@/components/CarsPage/OffersGrid";
import { getAllOffers, connectDatabase } from "@/utils/db-utils";
import Warning from "@/components/Typography/Warning";
import Filters from "@/components/CarsPage/Filters/Filters";
import useFilter from "@/hooks/useFilter";
import PageSelect from "@/components/CarsPage/PageSelect/PageSelect";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import Spinner from "@/components/UI/Spinner";
import {
  useGetOffersByRangeQuery,
  useGetAllOffersQuery,
} from "@/redux/api/offersApiSlice";
import { CarOffer } from "@/models/models";
const CarsPage = (props) => {
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
  // const count: number = data?.count;
  const { filterOffers, filteredOffers } = useFilter(offers);
  useEffect(() => {
    router.push("/buy-a-car/1");
    refetch();
  }, [offersPerPage, filteredOffers]);

  // if (isLoading || isFetching || !filteredOffers) {
  //   return (
  //     <div className="center-loader">
  //       <Spinner />
  //     </div>
  //   );
  // }
  // if (filteredOffers?.length === 0) {
  //   return (
  //     <div className="center-loader">
  //       <Warning>No offers found.</Warning>;
  //     </div>
  //   );
  // }

  return (
    <main className="content-margin">
      <Filters filterOffers={filterOffers} />
      <PageSelect offersAmount={filteredOffers?.length} />
      {filteredOffers?.length === 0 ? (
        <Warning>No offers found.</Warning>
      ) : isLoading || isFetching || !filteredOffers ? (
        <div className="center-loader center-loader--horizontal">
          <Spinner />
        </div>
      ) : (
        <OffersGrid
          offers={filteredOffers.slice(
            +pageNumber * offersPerPage - offersPerPage,
            +pageNumber * offersPerPage
          )}
        />
      )}
    </main>
  );
};

// export async function getServerSideProps() {
//   const client = await connectDatabase();
//   const response = await getAllOffers(client, "offers");
//   const offers = response.map((offer) => {
//     return { ...offer, _id: offer._id.toString() };
//   });

//   return {
//     props: {
//       offers: offers,
//     },
//   };
// }

export default CarsPage;
