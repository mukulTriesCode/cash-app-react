import { getToken } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addEntryApi = createApi({
  reducerPath: "addEntryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    addEntry: build.mutation({
      query: (body) => ({
        url: `/api/entry/add-entry`,
        method: "POST",
        body,
      }),
    }),
    getEntries: build.query({
      query: () => ({
        url: `/api/entry/user`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddEntryMutation, useGetEntriesQuery } = addEntryApi;
