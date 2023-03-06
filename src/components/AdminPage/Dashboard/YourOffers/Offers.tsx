import React, { useEffect, useState } from "react";
import { CarOffer } from "@/models/models";
import styles from "./Offers.module.scss";
import Offer from "./Offer";
import { useGetOffersQuery } from "@/redux/api/offersApiSlice";
import Spinner from "@/components/UI/Spinner";
import Warning from "@/components/Typography/Warning";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Offers = () => {
  const email = useSelector((state: RootState) => state.user?.user?.email);

  const { data, isLoading, isError } = useGetOffersQuery(email);
  const userOffers: CarOffer[] = data?.offers;

  if (isLoading) {
    return (
      <div className="center-loader">
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return <Warning>Couldn't fetch your offers list.</Warning>;
  }
  if (userOffers.length === 0) {
    return <Warning>You have no offers yet.</Warning>;
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
