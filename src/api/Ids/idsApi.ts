import { baseApi } from '@/api/baseApi.ts'

export const idsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getIds: build.query<ResponseIds, RequestIds>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetIdsQuery } = idsApi
