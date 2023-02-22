import React from "react";
import styles from "./Offer.module.scss";
import { CarOffer } from "@/models/models";
import { useRouter } from "next/router";
import { useDeleteOfferMutation } from "@/redux/api/offersApiSlice";
interface Props {
  offer: CarOffer;
}
const Offer = ({ offer }: Props) => {
  const [deleteOffer, { isLoading, isSuccess }] = useDeleteOfferMutation();
  const router = useRouter();
  // const deleteOffer = async () => {
  //   const response = await fetch(`/api/manage-offers`, {
  //     method: "PUT",
  //     body: JSON.stringify(offer._id),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });
  //   router.reload();
  // };
  if (isLoading) {
    return <p>Deleting offer</p>;
  }
  if (isSuccess) {
    return <p>Offer deleted Succesfully</p>;
  }
  return (
    <li className={styles.offer}>
      {offer.title}{" "}
      <button onClick={deleteOffer.bind(null, offer._id)}>X</button>
    </li>
  );
};

export default Offer;
