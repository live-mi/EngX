import React, {useContext} from 'react'
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
  LogoutDialogModal,
} from '../screens/productDetails/components'
import {NoInternetModal} from '../screens/productDetails/components/NoInternetModal'
import {StorageContext} from '../components/App/StorageContext'

const Stack = createNativeStackNavigator()

export const HomeStackNavigator = () => {
  const {token} = useContext(StorageContext)

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
        {!token ? (
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
        <Stack.Screen name="LogoutDialogModal" component={LogoutDialogModal} />
        <Stack.Screen name="SelectColorModal" component={SelectColorModal} />
        <Stack.Screen name="NoInternetModal" component={NoInternetModal} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
