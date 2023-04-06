import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const offersApiSlice = createApi({
  reducerPath: "offersApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/manage-offers/`,
  }),
  tagTypes: ["Offers"],
  endpoints: (builder) => ({
    getUserOffers: builder.query<any, { email: string; type: string }>({
      query: (obj) => `?email=${obj.email}&type=${obj.type}`,
      providesTags: ["Offers"],
    }),
    getAllOffers: builder.query({
      query: (obj) => `?type=${obj.type}`,
      providesTags: ["Offers"],
    }),
    getOffersByRange: builder.query<
      any,
      {
        min: number;
        max: number;
        type: string;
        model: string;
        brand: string;
        fuel: string;
        color: string;
        powerUpperLevel: number;
        powerLowerLevel: number;
        mileageUpperLevel: number;
        mileageLowerLevel: number;
        enginecapacityUpperLevel: number;
        enginecapacityLowerLevel: number;
        priceUpperLevel: number;
        priceLowerLevel: number;
        yearUpperLevel: number;
        yearLowerLevel: number;
      }
    >({
      query: (obj) =>
        `?min=${obj.min}&max=${obj.max}&type=${obj.type}&model=${obj.model}&brand=${obj.brand}&fuel=${obj.fuel}&color=${obj.color}&powerUpperLevel=${obj.powerUpperLevel}&powerLowerLevel=${obj.powerLowerLevel}&mileageUpperLevel=${obj.mileageUpperLevel}&mileageLowerLevel=${obj.mileageLowerLevel}&enginecapacityUpperLevel=${obj.enginecapacityUpperLevel}&enginecapacityLowerLevel=${obj.enginecapacityLowerLevel}&priceUpperLevel=${obj.priceUpperLevel}&priceLowerLevel=${obj.priceLowerLevel}&yearUpperLevel=${obj.yearUpperLevel}&yearLowerLevel=${obj.yearLowerLevel}`,
      providesTags: ["Offers"],
    }),
    addOffer: builder.mutation({
      query: (carOffer) => ({
        url: "",
        method: "POST",
        body: carOffer,
      }),
      invalidatesTags: ["Offers"],
    }),
    deleteOffer: builder.mutation({
      query: (obj) => ({
        url: ``,
        method: "PUT",
        body: obj,
      }),
      invalidatesTags: ["Offers"],
    }),
    editOffer: builder.mutation({
      query: (obj) => ({
        url: ``,
        method: "PATCH",
        body: obj,
      }),
      invalidatesTags: ["Offers"],
    }),
  }),
});

export const {
  useGetUserOffersQuery,
  useGetAllOffersQuery,
  useGetOffersByRangeQuery,
  useAddOfferMutation,
  useDeleteOfferMutation,
  useEditOfferMutation,
} = offersApiSlice;
