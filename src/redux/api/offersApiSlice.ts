import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const offersApiSlice = createApi({
  reducerPath: "offersApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/manage-offers`,
  }),
  tagTypes: ["Offers"],
  endpoints: (builder) => ({
    getOffers: builder.query<any, void>({
      query: () => "",
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
      query: (id) => ({
        url: ``,
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["Offers"],
    }),
  }),
});

export const {
  useGetOffersQuery,
  useAddOfferMutation,
  useDeleteOfferMutation,
} = offersApiSlice;
