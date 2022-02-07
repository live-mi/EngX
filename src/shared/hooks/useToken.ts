import {useState} from 'react'
import {useAsyncStorage} from './useAsyncStorage'

export const useToken = <T>(key: string) => {
  const [token, setToken] = useState<T | null>(null)
  const {setItem, removeItem} = useAsyncStorage()

  const setTokenAsync = async (data: T): Promise<void> => {
    await setItem(key, JSON.stringify(data))
    setToken(data)
  }

  const removeTokenAsync = async (): Promise<void> => {
    await removeItem(key)
    setToken(null)
  }

  return {token, setTokenAsync, removeTokenAsync}
}
