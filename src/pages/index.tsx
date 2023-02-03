import React from "react";
import Hero from "@/components/HomePage/Hero";
import Banner from "@/components/HomePage/Banner";
import LatestBanner from "@/components/HomePage/LatestBanner";
import AboutCompany from "@/components/HomePage/AboutCompany";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutCompany />
      <Banner />
      <LatestBanner />
    </main>
  );
};

export default HomePage;
