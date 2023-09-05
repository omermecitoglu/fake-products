import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CurrencyData } from "~/core/currencyApi";

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getCurrencyData: builder.query<CurrencyData, null>({
      query: () => "/currency",
    }),
  }),
});

export const { useGetCurrencyDataQuery } = userApi;
