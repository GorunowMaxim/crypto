import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { z } from "zod";

const coin = z.object({
  id: z.string(),
  name: z.string(),
  api_symbol: z.string().optional(),
  symbol: z.string().optional(),
  market_cap_rank: z.number().optional(),
  thumb: z.string().optional(),
  large: z.string().optional(),
})

export const searchDataSchema = z.object({
  coins: coin.optional().array(),
  exchanges: coin.optional().array(),
  icos: z.string().optional().array(),
  categories: coin.optional().array(),
  nfts: coin.optional().array(),
})


export type SearchData = z.infer<typeof searchDataSchema>

const baseUrl: string = 'https://api.coingecko.com/api/v3'

export const searchApi = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 120,
  endpoints: (create) => ({
    getSearchList: create.query<SearchData, string>({
      query: (value) => ({
        url: '/search',
        params: {
          query: value,
        },
        transformResponse: (response: SearchData) => {
          searchDataSchema.parse(response);
          return response;
        },
      }),
    })
  })
})
