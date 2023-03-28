import React from "react";
import { connectDatabase, getAllOffers } from "@/utils/db-utils";
import Warning from "@/components/Typography/Warning";
import OfferDetails from "@/components/CarsPage/OfferDetails/OfferDetails";
import { CarOffer } from "@/models/models";
interface Props {
  currentOffer: CarOffer;
}
const CarDetails = (props: Props) => {
  const { currentOffer } = props;
  if (currentOffer === undefined) {
    return (
      <div className="center-loader">
        <Warning>There is no such offer.</Warning>;
      </div>
    );
  }
  return <OfferDetails currentOffer={currentOffer} />;
};

export async function getStaticProps(context) {
  const offerId = context.params._id;

  const client = await connectDatabase();
  const response = await getAllOffers(client, "offers");
  const offers: CarOffer[] = response.map((offer) => {
    return { ...offer, _id: offer._id.toString() };
  });
  const currentOffer = offers.find((offer) => offer._id === offerId);
  return {
    props: {
      currentOffer: currentOffer,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const client = await connectDatabase();
  const response = await getAllOffers(client, "offers");
  const offers: CarOffer[] = response.map((offer) => {
    return { ...offer, _id: offer._id.toString() };
  });
  const paths = offers.map((offer) => ({ params: { _id: offer._id } }));

  return {
    paths: paths,
    fallback: true,
  };
}
export default CarDetails;
