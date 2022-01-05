import React from 'react'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import {store} from '../../redux/store'
import {HomeScreen, ProductDetailsScreen} from '../../screens'

Icon.loadFont()

const Stack = createNativeStackNavigator()

export const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
