import React from "react";
import { CarOffer } from "@/models/models";

import OffersGrid from "@/components/CarsPage/OffersGrid";
import { getAllOffers, connectDatabase } from "@/utils/db-utils";

const CarsPage = (props) => {
  const { offers } = props;
  return <main>{<OffersGrid offers={offers} />}</main>;
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
    revalidate: 60,
  };
}
export default CarsPage;
