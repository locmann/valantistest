import { baseApi } from '@/api/baseApi.ts'

export const itemsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getItems: build.query<ResponseItems, RequestItems>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetItemsQuery } = itemsApi
