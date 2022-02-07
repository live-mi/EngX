import React, {FC, useContext} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {HomeStackNavigator} from './HomeStackNavigator'
import {CartScreen, SignInScreen} from '../screens'
import {CameraScreen} from '../screens/camera'
import {ImagePickerScreen} from '../screens/imagePicker'
import {CustomDrawerContent} from './CustomDrawerContent'
import {MyProfileScreen} from '../screens/myProfile'
import {StorageContext} from '../components/App/StorageContext'

const Drawer = createDrawerNavigator()

export const DrawerNavigator: FC = () => {
  const {token} = useContext(StorageContext)

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="My Wish List" component={HomeStackNavigator} />
      {!token ? (
        <Drawer.Screen name="SignIn" component={SignInScreen} />
      ) : (
        <>
          <Drawer.Screen name="My Profile" component={MyProfileScreen} />
          <Drawer.Screen name="My Cart" component={CartScreen} />
        </>
      )}
      <Drawer.Screen name="Camera" component={CameraScreen} />
      <Drawer.Screen name="Image Picker" component={ImagePickerScreen} />
    </Drawer.Navigator>
  )
}
