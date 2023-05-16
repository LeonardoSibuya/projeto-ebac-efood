import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { FoodInfos } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<FoodInfos[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantsId: builder.query<FoodInfos, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsIdQuery, useGetRestaurantsQuery } = api

export default api
