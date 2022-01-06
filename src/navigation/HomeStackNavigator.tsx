import {HomeScreen} from '../screens'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ProductDetailsNavigator} from './ProductDetailsNavigator'

const Stack = createNativeStackNavigator()

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetailsStack"
        component={ProductDetailsNavigator}
      />
    </Stack.Navigator>
  )
}
