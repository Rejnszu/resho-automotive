import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const messagesApiSlice = createApi({
  reducerPath: "messagesApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/manage-messages/`,
  }),
  tagTypes: ["messages"],
  endpoints: (builder) => ({
    updateUserMessages: builder.mutation({
      query: (messageObj) => ({
        url: "",
        method: "PUT",
        body: messageObj,
      }),
      invalidatesTags: ["messages"],
    }),
    getUserMessages: builder.query({
      query: (obj) => `?userEmail=${obj.userEmail}&limit=${obj.limit}`,
      providesTags: ["messages"],
    }),
    deleteMessage: builder.mutation({
      query: (deleteObj) => ({
        url: "",
        method: "DELETE",
        body: deleteObj,
      }),
      invalidatesTags: ["messages"],
    }),
  }),
});

export const {
  useUpdateUserMessagesMutation,
  useGetUserMessagesQuery,
  useDeleteMessageMutation,
} = messagesApiSlice;
