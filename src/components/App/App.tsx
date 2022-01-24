import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {store} from '../../redux/store'
import {DrawerNavigator} from '../../navigation'
import {useConnectionInfo} from '../../shared/hooks/useConnectionInfo'
import {ConnectionProvider} from '../../shared/ConnectionContext'

Icon.loadFont()

export const App = () => {
  const {isOffline} = useConnectionInfo()

  return (
    <NavigationContainer>
      <Provider store={store}>
        <ConnectionProvider.Provider value={isOffline}>
          <DrawerNavigator />
        </ConnectionProvider.Provider>
      </Provider>
    </NavigationContainer>
  )
}
