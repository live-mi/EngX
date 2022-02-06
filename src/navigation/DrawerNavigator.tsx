import React, {FC} from 'react'
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import {HomeStackNavigator} from './HomeStackNavigator'
import {CartScreen, SignInScreen} from '../screens'
import {CameraScreen} from '../screens/camera'
import {
  sharedUseCreateTokenMutation,
  useCreateTokenMutation,
} from '../features/auth'
import {ImagePickerScreen} from '../screens/imagePicker'
import {CustomDrawerContent} from './CustomDrawerContent'

const Drawer = createDrawerNavigator()

export const DrawerNavigator: FC = () => {
  const [, userToken] = useCreateTokenMutation({
    fixedCacheKey: sharedUseCreateTokenMutation,
  })
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="MyProfile" component={HomeStackNavigator} />
      <Drawer.Screen name="MyWishList" component={HomeStackNavigator} />
      {!userToken.data ? (
        <Drawer.Screen name="Sign In" component={SignInScreen} />
      ) : (
        <Drawer.Screen name="My Cart" component={CartScreen} />
      )}
      <Drawer.Screen name="Camera" component={CameraScreen} />
      <Drawer.Screen name="ImagePicker" component={ImagePickerScreen} />
    </Drawer.Navigator>
  )
}
