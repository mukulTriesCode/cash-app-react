import { getToken } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = getToken();

export const addEntryApi = createApi({
  reducerPath: "addEntryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    addEntry: build.mutation({
      query: (body) => ({
        url: `/api/entry/add-entry`,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
    getEntries: build.query({
      query: () => ({
        url: `/api/entry/user`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddEntryMutation, useGetEntriesQuery } = addEntryApi;
