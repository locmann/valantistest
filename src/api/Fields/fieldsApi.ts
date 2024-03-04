import { baseApi } from '@/api/baseApi.ts'

export const fieldsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFields: build.query<ResponseFields, RequestFields>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetFieldsQuery } = fieldsApi
