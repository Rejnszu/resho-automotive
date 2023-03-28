import React from "react";
import Hero from "@/components/HomePage/Hero";
import Banner from "@/components/HomePage/Banner";
import LatestBanner from "@/components/HomePage/LatestBanner";
import AboutCompany from "@/components/HomePage/AboutCompany";
import Main from "@/components/MotionComponents/Main";
import { connectDatabase, getLatestOffers } from "@/utils/db-utils";
import { CarOffer } from "@/models/models";

interface Props {
  offers: CarOffer[];
}

const HomePage = ({ offers }: Props) => {
  return (
    <Main>
      <Hero />
      <AboutCompany />
      <Banner />
      <LatestBanner offers={offers} />
    </Main>
  );
};
export async function getStaticProps() {
  const client = await connectDatabase();
  const response = await getLatestOffers(client, "offers", 10);
  const offers: CarOffer[] = response.map((offer) => {
    return { ...offer, _id: offer._id.toString() };
  });

  return {
    props: {
      offers: offers,
    },
    revalidate: 30,
  };
}
export default HomePage;
