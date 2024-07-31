import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const womendressesapi = createApi({
  reducerPath: "womendressesapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products/category/",
  }),
  endpoints: (builder) => ({
    getWomensDresses: builder.query({
      query: () => "womens-dresses",
    }),
  }),
});

export const { useGetWomensDressesQuery } = womendressesapi;
