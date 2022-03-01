import React, {FC} from 'react'
import {View} from 'react-native'
import styles from './styles'

export const Modal: FC = ({children}) => {
  return (
    <View style={styles.modalContainer} accessibilityRole="alert">
      {children}
    </View>
  )
}
