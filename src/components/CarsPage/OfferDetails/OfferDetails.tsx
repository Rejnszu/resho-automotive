import { CarOffer } from "@/models/models";
import React from "react";
import styles from "./OfferDetails.module.scss";
import Image from "next/image";
import ImageGallery from "./ImageGallery/ImageGallery";
import InfoList from "./InfoTable/InfoList";
import ContactInformations from "./ContactInfo/ContactInformations";
interface Props {
  currentOffer: CarOffer;
}
const OfferDetails = ({ currentOffer }: Props) => {
  return (
    <main className={`${styles["offer__details"]} container section-padding`}>
      <ContactInformations
        phone={currentOffer.phone}
        name={currentOffer.name}
        email={currentOffer.email}
      />
      <ImageGallery images={currentOffer.images} />
      <InfoList currentOffer={currentOffer} />
    </main>
  );
};

export default OfferDetails;
