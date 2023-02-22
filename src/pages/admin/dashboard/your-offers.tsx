import React from "react";
import Offers from "@/components/AdminPage/Dashboard/YourOffers/Offers";

const YourOffers = () => {
  return <Offers />;
};

// export async function getStaticProps() {
//   const offers = await showOffers();

//   return {
//     props: {
//       offers: offers,
//     },
//     revalidate: 60,
//   };
// }
export default YourOffers;
