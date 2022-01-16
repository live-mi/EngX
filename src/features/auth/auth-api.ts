import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {TokenRequestModel, TokenResponseModel} from './types'
import {config} from '../../const'
import {ResponseData} from '../../shared'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseAuthUrl,
  }),
  endpoints: builder => ({
    createToken: builder.mutation<
      ResponseData<TokenResponseModel>,
      TokenRequestModel
    >({
      query: ({
        grantType: grant_type = 'password',
        ...rest
      }: TokenRequestModel) => ({
        url: '/token',
        method: 'POST',
        body: {...rest, grant_type},
      }),
    }),
  }),
})

export const {useCreateTokenMutation} = authApi
