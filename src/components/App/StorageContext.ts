import {createContext} from 'react'
import {TokenResponseModel} from '../../features/auth'

const contextValue = {
  token: null,
  async setTokenAsync(data: TokenResponseModel) {},
  async removeTokenAsync() {},
}

export const StorageContext = createContext(contextValue)
