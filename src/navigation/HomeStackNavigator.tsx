import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ProductDetailsNavigator} from './ProductDetailsNavigator'
import {
  CartScreen,
  HomeScreen,
  LoginFirstCartScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens'
import {
  ProductAddedToCartModal,
  LoginToContinueModal,
  SelectColorModal,
} from '../screens/productDetails/components'
import {
  sharedUseCreateTokenMutation,
  useCreateTokenMutation,
} from '../features/auth'

const Stack = createNativeStackNavigator()

export const HomeStackNavigator = () => {
  const [, userToken] = useCreateTokenMutation({
    fixedCacheKey: sharedUseCreateTokenMutation,
  })

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
      <Stack.Group
        screenOptions={{
          headerShown: true,
        }}>
        {!userToken.data ? (
          <>
            <Stack.Screen name="MyCart" component={LoginFirstCartScreen} />
          </>
        ) : (
          <Stack.Screen name="MyCart" component={CartScreen} />
        )}
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
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
