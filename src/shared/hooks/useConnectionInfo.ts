import {useEffect, useState} from 'react'
import NetInfo from '@react-native-community/netinfo'

export const useConnectionInfo = () => {
  const [isOffline, setOfflineStatus] = useState(false)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setOfflineStatus(!(state.isConnected && state.isInternetReachable))
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return {isOffline}
}
