import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { getAuth } from '@/utils/getAuth.ts'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.valantis.store:41000/',
  prepareHeaders: (headers) => {
    const authToken = getAuth()
    headers.set('X-Auth', authToken)
    return headers
  },
})
