import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ProductDetailsNavigator} from './ProductDetailsNavigator'
import {HomeScreen} from '../screens'
import {
  ProductAddedToCartModal,
  LoginToContinueModal,
  SelectColorModal,
} from '../screens/productDetails/components'

const Stack = createNativeStackNavigator()

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen
          name="ProductDetailsStack"
          component={ProductDetailsNavigator}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="ProductAddedToCartModal"
          component={ProductAddedToCartModal}
        />
        <Stack.Screen
          name="LoginToContinueModal"
          component={LoginToContinueModal}
        />
        <Stack.Screen name="SelectColorModal" component={SelectColorModal} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
