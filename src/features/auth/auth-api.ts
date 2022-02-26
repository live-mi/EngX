import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {
  TokenRequestModel,
  TokenResponseModel,
  UserRequestModel,
  UserResponseModel,
} from './types'
import {config} from '../../const'
import {ResponseData} from '../../shared'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseAuthUrl,
    async prepareHeaders(headers: Headers, api) {
      if (api.endpoint === 'createToken') {
        return headers
      }

      const token =
        // @ts-ignore
        api.getState()?.authApi?.mutations.sharedUseCreateTokenMutation?.data
          .access_token

      headers.append('Authorization', `Bearer ${token}`)

      return headers
    },
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
    fetchProfile: builder.query({
      query: () => ({
        url: '/account',
      }),
    }),
    updateProfile: builder.mutation<
      ResponseData<UserResponseModel>,
      UserRequestModel
    >({
      query: (data: UserRequestModel) => {
        return {
          url: '/account',
          method: 'PATCH',
          body: {
            user: data,
          },
        }
      },
    }),
  }),
})

export const {
  useCreateTokenMutation,
  useUpdateProfileMutation,
  useFetchProfileQuery,
} = authApi
