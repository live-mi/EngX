import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
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
  const {isOffline} = useConnectionInfo()
  const {token, setTokenAsync, removeTokenAsync} =
    useToken<TokenResponseModel>(TOKEN_KEY)

  return (
    <NavigationContainer>
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
