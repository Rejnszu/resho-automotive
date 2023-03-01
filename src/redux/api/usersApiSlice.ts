import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApiSlice = createApi({
  reducerPath: "usersApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/manage-users`,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => "",
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    getUser: builder.mutation({
      query: (user) => ({
        url: ``,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useCreateUserMutation, useGetUserMutation } = usersApiSlice;
