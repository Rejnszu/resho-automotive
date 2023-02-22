import React, { useEffect, useState } from "react";
import { CarOffer } from "@/models/models";
import styles from "./Offers.module.scss";
import Offer from "./Offer";
import Error from "@/components/UI/Error";
import { showOffers } from "@/utils/api-utils";
import { useGetOffersQuery } from "@/redux/api/offersApiSlice";
import Spinner from "@/components/UI/Spinner";
const Offers = () => {
  const { data, isLoading, isError } = useGetOffersQuery();
  const userOffers: CarOffer[] = data?.offers;

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error>Couldn't fetch your offers list.</Error>;
  }
  return (
    <section>
      <ul className={styles.offers}>
        {userOffers?.map((offer) => {
          return <Offer key={offer._id} offer={offer} />;
        })}
      </ul>
    </section>
  );
};

export default Offers;
