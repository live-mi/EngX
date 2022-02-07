import {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {HISTORY_KEY} from '../const'

const MAX_SIZE = 20

export const useSearchHistory = <T>(key = HISTORY_KEY) => {
  const [history, setSearchHistory] = useState<T[]>([])
  const getHistory = async (): Promise<T[]> => {
    try {
      const data = await AsyncStorage.getItem(key)
      return data ? JSON.parse(data) : data
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const setHistory = async (history: T[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(history))
    } catch (error) {
      console.error(error)
    }
  }

  const addItem = async (item: T) => {
    const currentHistory = await getHistory()
    if (!currentHistory) {
      setSearchHistory(() => [item])
      await setHistory([item])
    } else if (!currentHistory.includes(item)) {
      setSearchHistory(state => [item, ...state.slice(0, MAX_SIZE - 1)])
      await setHistory([item, ...currentHistory.slice(0, MAX_SIZE - 1)])
    }
  }

  const removeItem = async (index: number) => {
    let data = await getHistory()
    if (data && Array.isArray(data)) {
      data = data.filter((_, i) => index !== i)
      setSearchHistory(() => data)
      await setHistory(data)
    }
  }

  const clearHistory = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    history,
    getHistory,
    setHistory,
    clearHistory,
    addItem,
    removeItem,
  }
}
