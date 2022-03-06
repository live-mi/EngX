import React, {FC, ReactNode} from 'react'
import {StyleSheet, View} from 'react-native'

interface ItemsProps {
  children: ReactNode
}

export const ItemsList: FC<ItemsProps> = ({children}) => {
  return (
    <View style={styles.container} accessibilityRole="list">
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
