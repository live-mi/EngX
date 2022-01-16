import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {store} from '../../redux/store'
import {DrawerNavigator} from '../../navigation'

Icon.loadFont()

export const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <DrawerNavigator />
      </Provider>
    </NavigationContainer>
  )
}
