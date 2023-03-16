import React from "react";
import styles from "./Offer.module.scss";
import { CarOffer } from "@/models/models";
import { useRouter } from "next/router";
import { useDeleteOfferMutation } from "@/redux/api/offersApiSlice";
import Warning from "@/components/Typography/Warning";
import { AiOutlineClose, AiFillEdit } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
interface Props {
  offer: CarOffer;
}
const Offer = ({ offer }: Props) => {
  const [deleteOffer, { isLoading, isSuccess }] = useDeleteOfferMutation();
  const router = useRouter();
  const email = useSelector((state: RootState) => state.user.user.email);
  if (isLoading) {
    return <Warning>Deleting offer</Warning>;
  }
  if (isSuccess) {
    return <Warning>Offer deleted Succesfully</Warning>;
  }
  return (
    <li className={styles.offer}>
      <p>Title: {offer.title}</p>
      <p>Model: {offer.model}</p>
      <p>Mileage: {new Intl.NumberFormat("de-DE").format(offer.mileage)} km</p>
      <p>Power: {offer.power}KM</p>
      <p>
        Price:{" "}
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(offer.price)}
      </p>
      <p>Year: {offer.year}</p>
      <Link
        href={`/buy-a-car/offer/${offer._id}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Check Live
      </Link>
      <Link href={`/admin/dashboard/your-offers/${offer._id}`}>
        <AiFillEdit />
      </Link>
      <button
        className={styles["button--add-offer"]}
        onClick={() => {
          deleteOffer({ email: email, id: offer._id });
        }}
      >
        <AiOutlineClose />
      </button>
    </li>
  );
};

export default Offer;
