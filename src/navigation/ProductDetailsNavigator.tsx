import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ProductDetailsScreen} from '../screens'

const Stack = createNativeStackNavigator()

export const ProductDetailsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}
