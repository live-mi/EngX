import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ProductDetailsNavigator} from './ProductDetailsNavigator'
import {HomeScreen, SignInScreen, SignUpScreen} from '../screens'
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
  console.log('HomeStackNavigator token:', userToken.data)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!userToken.data ? (
        <>
          <Stack.Group>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Group>
        </>
      ) : (
        <>
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
            <Stack.Screen
              name="SelectColorModal"
              component={SelectColorModal}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  )
}
