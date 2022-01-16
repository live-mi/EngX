import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CartModel} from './types'
import {config} from '../../const'
import {ResponseData} from '../../shared'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseAuthUrl,
  }),
  endpoints: builder => ({
    updateCart: builder.mutation<ResponseData<any>, CartModel>({
      query: (body: CartModel) => ({
        url: '/token',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {useUpdateCartMutation} = authApi
