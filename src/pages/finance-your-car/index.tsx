import FinancingForms from "@/components/FinancesPage/FinancingForms";
import HeroBanner from "@/components/FinancesPage/HeroBanner";
import Partnership from "@/components/FinancesPage/Partnership";
import React from "react";

const Finances = () => {
  return (
    <main>
      <HeroBanner />
      <FinancingForms />
      <Partnership />
    </main>
  );
};

export default Finances;
