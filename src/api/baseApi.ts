import { baseQuery } from '@/api/baseQuery.ts'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  endpoints: () => ({}),
})
