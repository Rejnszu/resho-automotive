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
      { min: number; max: number; type: string }
    >({
      query: (obj) => `?min=${obj.min}&max=${obj.max}&type=${obj.type}`,
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
