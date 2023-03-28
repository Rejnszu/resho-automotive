import FinancingForms from "@/components/FinancesPage/FinancingForms";
import HeroBanner from "@/components/FinancesPage/HeroBanner";
import Partnership from "@/components/FinancesPage/Partnership";
import ReshoLease from "@/components/FinancesPage/ReshoLease";
import Main from "@/components/MotionComponents/Main";
import React from "react";

const Finances = () => {
  return (
    <Main>
      <HeroBanner />
      <FinancingForms />
      <Partnership />
      <ReshoLease />
    </Main>
  );
};

export default Finances;
