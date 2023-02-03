import React from "react";
import ImageBanner from "@/components/ContactPage/ImageBanner";
import Team from "@/components/ContactPage/Team/Team";
import ContactFom from "@/components/ContactPage/ContactForm/ContactFom";
import Map from "@/components/ContactPage/Map/Map";
import ShopInfo from "@/components/ContactPage/ShopInfo/ShopInfo";
const Contact = () => {
  return (
    <main>
      <ImageBanner />
      <Team />
      <ContactFom />
      <ShopInfo />
      <Map />
    </main>
  );
};

export default Contact;
