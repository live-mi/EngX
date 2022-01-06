import React, {FC} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {HomeStackNavigator} from './HomeStackNavigator'

const Drawer = createDrawerNavigator()

export const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="MyProfile" component={HomeStackNavigator} />
      <Drawer.Screen name="MyWishList" component={HomeStackNavigator} />
    </Drawer.Navigator>
  )
}
