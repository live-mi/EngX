import AsyncStorage from '@react-native-async-storage/async-storage'

export const useAsyncStorage = () => {
  const tryCatchWrapper = async (action: () => any) => {
    try {
      return await action()
    } catch (error) {
      console.error(error)
    }
  }

  const getItem = async (key: string): Promise<string | null> => {
    return tryCatchWrapper(async () => await AsyncStorage.getItem(key))
  }

  const setItem = async (key: string, value: string): Promise<void> => {
    return tryCatchWrapper(async () => await AsyncStorage.setItem(key, value))
  }

  const removeItem = async (key: string): Promise<void> => {
    return tryCatchWrapper(async () => await AsyncStorage.removeItem(key))
  }

  const clear = async () => {
    return tryCatchWrapper(async () => await AsyncStorage.clear())
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  }
}
