import React, { useEffect, useState } from "react";
import { CarOffer } from "@/models/models";

import OffersGrid from "@/components/CarsPage/OffersGrid";
import { getAllOffers, connectDatabase } from "@/utils/db-utils";
import Warning from "@/components/Typography/Warning";
import Filters from "@/components/CarsPage/Filters/Filters";
import {
  filterByHigherRangeParameter,
  filterByLowerRangeParameter,
  filterByStringParameter,
} from "@/utils/filters";
import useFilter from "@/hooks/useFilter";
const CarsPage = (props) => {
  const { offers } = props;
  const { filterOffers, filteredOffers } = useFilter(offers);

  if (offers.length === 0) {
    return (
      <div className="center-loader">
        <Warning>No offers found.</Warning>;
      </div>
    );
  }
  return (
    <main className="content-margin">
      <Filters filterOffers={filterOffers} />
      <OffersGrid offers={filteredOffers} />
    </main>
  );
};

export async function getStaticProps() {
  const client = await connectDatabase();
  const response = await getAllOffers(client, "offers");
  const offers = response.map((offer) => {
    return { ...offer, _id: offer._id.toString() };
  });

  return {
    props: {
      offers: offers,
    },
    revalidate: 30,
  };
}
export default CarsPage;
