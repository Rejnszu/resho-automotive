import React from "react";
import ImageBanner from "@/components/ContactPage/ImageBanner";
import Team from "@/components/ContactPage/Team/Team";
import ContactFom from "@/components/ContactPage/ContactForm/ContactFom";
import Map from "@/components/ContactPage/Map/Map";
import ShopInfo from "@/components/ContactPage/ShopInfo/ShopInfo";
import Main from "@/components/MotionComponents/Main";
const Contact = () => {
  return (
    <Main>
      <ImageBanner />
      <Team />
      <ContactFom />
      <ShopInfo />
      <Map />
    </Main>
  );
};

export default Contact;
