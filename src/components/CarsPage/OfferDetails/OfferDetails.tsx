import { CarOffer } from "@/models/models";
import React from "react";
import styles from "./OfferDetails.module.scss";
import Main from "@/components/MotionComponents/Main";
import ImageGallery from "./ImageGallery/ImageGallery";
import InfoList from "./InfoTable/InfoList";
import ContactInformations from "./ContactInfo/ContactInformations";
interface Props {
  currentOffer: CarOffer;
}
const OfferDetails = ({ currentOffer }: Props) => {
  return (
    <Main style={`${styles["offer__details"]} container section-padding`}>
      <ContactInformations
        phone={currentOffer.phone}
        name={currentOffer.name}
        email={currentOffer.email}
      />
      <ImageGallery images={currentOffer.images} />
      <InfoList currentOffer={currentOffer} />
    </Main>
  );
};

export default OfferDetails;
