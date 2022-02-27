import 'react-native-gesture-handler'
import React, {useRef} from 'react'
import {Provider} from 'react-redux'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {StorageContext} from './StorageContext'
import {store} from '../../redux/store'
import {DrawerNavigator} from '../../navigation'
import {useConnectionInfo} from '../../shared/hooks'
import {ConnectionProvider} from '../../shared/ConnectionContext'
import {useToken} from '../../shared/hooks/useToken'
import {TOKEN_KEY} from '../../shared/const'
import {TokenResponseModel} from '../../features/auth'

Icon.loadFont()

export const App = () => {
  const routeNameRef = useRef<string>()
  const navigationRef = useNavigationContainerRef()
  const {isOffline} = useConnectionInfo()
  const {token, setTokenAsync, removeTokenAsync} =
    useToken<TokenResponseModel>(TOKEN_KEY)

  const handleStateChange = () => {
    const previousRouteName = routeNameRef.current

    if (navigationRef.getCurrentRoute) {
      const currentRouteName = navigationRef.getCurrentRoute?.()?.name

      if (previousRouteName !== currentRouteName) {
        console.log(
          'Screen has been changed. Current screen: ',
          currentRouteName,
        )
      }
      routeNameRef.current = currentRouteName
    }
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        if (navigationRef.getCurrentRoute) {
          routeNameRef.current = navigationRef.getCurrentRoute?.()?.name
        }
      }}
      onStateChange={handleStateChange}>
      <Provider store={store}>
        <ConnectionProvider.Provider value={isOffline}>
          <StorageContext.Provider
            value={{
              // @ts-ignore
              token,
              setTokenAsync,
              removeTokenAsync,
            }}>
            <DrawerNavigator />
          </StorageContext.Provider>
        </ConnectionProvider.Provider>
      </Provider>
    </NavigationContainer>
  )
}
