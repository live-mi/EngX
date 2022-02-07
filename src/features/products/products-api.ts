import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResponseData} from '../../shared/types/response.model'
import {ProductModel} from './types'
import {config} from '../../const/api'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
  }),
  endpoints: builder => ({
    getProducts: builder.query<ResponseData<ProductModel[]>, string>({
      query: (query: string) => ({
        url: 'products',
        params: {
          'filter[name]': query,
        },
      }),
    }),
    getProductById: builder.query<ResponseData<ProductModel>, string>({
      query: id => `products/${id}`,
    }),
  }),
})

export const {useGetProductsQuery, useGetProductByIdQuery} = productsApi
