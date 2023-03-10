import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const offersApiSlice = createApi({
  reducerPath: "offersApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/manage-offers/`,
  }),
  tagTypes: ["Offers"],
  endpoints: (builder) => ({
    getOffers: builder.query<any, string>({
      query: (email) => `?email=${email}`,
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
  useGetOffersQuery,
  useAddOfferMutation,
  useDeleteOfferMutation,
  useEditOfferMutation,
} = offersApiSlice;
