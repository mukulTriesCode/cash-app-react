import { Entry } from "@/features/cashCountSlice";
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
  tagTypes: ["Entry"],
  endpoints: (build) => ({
    addEntry: build.mutation<Entry, Partial<Entry>>({
      query: (body) => ({
        url: `/api/entry/add-entry`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Entry"],
    }),
    getEntries: build.query({
      query: () => ({
        url: `/api/entry/user`,
        method: "GET",
      }),
      providesTags: ["Entry"],
    }),
    getCategory: build.query({
      query: () => ({
        url: `/api/categories`,
        method: "GET",
      }),
      providesTags: ["Entry"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddEntryMutation, useGetEntriesQuery, useGetCategoryQuery } =
  addEntryApi;
