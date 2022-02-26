import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import Share, {ShareOptions} from 'react-native-share'

export const CustomDrawerContent = (props: any) => {
  const onShare = async () => {
    try {
      const options: ShareOptions = {
        message: 'https://www.google.com/search?q=market',
        title: 'Lint to the market',
        subject: 'Sharing',
      }
      await Share.open(options)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Share" onPress={onShare} />
    </DrawerContentScrollView>
  )
}
