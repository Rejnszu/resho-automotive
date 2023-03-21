import React from "react";
import Hero from "@/components/HomePage/Hero";
import Banner from "@/components/HomePage/Banner";
import LatestBanner from "@/components/HomePage/LatestBanner";
import AboutCompany from "@/components/HomePage/AboutCompany";
import { connectDatabase, getLatestOffers } from "@/utils/db-utils";
import { CarOffer } from "@/models/models";

interface Props {
  offers: CarOffer[];
}

const HomePage = ({ offers }: Props) => {
  return (
    <main>
      <Hero />
      <AboutCompany />
      <Banner />
      <LatestBanner offers={offers} />
    </main>
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
