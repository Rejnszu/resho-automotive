import EditOfferForm from "@/components/AdminPage/Dashboard/EditOffer/EditOfferForm";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useGetUserOffersQuery } from "@/redux/api/offersApiSlice";

import { RootState } from "@/redux/store";
import Spinner from "@/components/UI/Spinner";
const OfferEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const email = useSelector((state: RootState) => state.user?.user?.email);
  const { data, isLoading, isSuccess } = useGetUserOffersQuery({
    email: email,
    type: "user",
  });
  const selectedOffer = data?.offers?.find((offer) => offer._id === id);
  console.log(selectedOffer);
  if (isLoading) {
    <div className="center-loader">
      <Spinner />
    </div>;
  }
  if (isSuccess) {
    return <EditOfferForm offer={selectedOffer} />;
  }
};

export default OfferEdit;
