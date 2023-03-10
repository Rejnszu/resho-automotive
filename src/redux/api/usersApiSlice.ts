import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userActions } from "../user-slice";

export const usersApiSlice = createApi({
  reducerPath: "usersApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/manage-users/`,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getLoggedUser: builder.query<any, string>({
      query: (id) => `?id=${id}`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userActions.setUser(data.user));
        } catch (err) {
          console.log(err.message);
        }
      },
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
    deleteUser: builder.mutation({
      query: (user) => ({
        url: `?email=${user.email}&password=${user.password}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    updateUserInformations: builder.mutation({
      query: (editedUser) => ({
        url: ``,
        method: "PATCH",
        body: editedUser,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUserMutation,
  useGetLoggedUserQuery,
  useDeleteUserMutation,
  useUpdateUserInformationsMutation,
} = usersApiSlice;
