import React, {FC} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {HomeStackNavigator} from './HomeStackNavigator'
import {CartScreen, SignInScreen} from '../screens'
import {
  sharedUseCreateTokenMutation,
  useCreateTokenMutation,
} from '../features/auth'

const Drawer = createDrawerNavigator()

export const DrawerNavigator: FC = () => {
  const [, userToken] = useCreateTokenMutation({
    fixedCacheKey: sharedUseCreateTokenMutation,
  })
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="MyProfile" component={HomeStackNavigator} />
      <Drawer.Screen name="MyWishList" component={HomeStackNavigator} />
      {!userToken.data ? (
        <Drawer.Screen name="Sign In" component={SignInScreen} />
      ) : (
        <Drawer.Screen name="My Cart" component={CartScreen} />
      )}
    </Drawer.Navigator>
  )
}
