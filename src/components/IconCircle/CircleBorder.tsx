import React, {FC} from 'react'
import {View} from 'react-native'
import styles from './styles'

interface CircleBorderProps {
  size: number
  borderWidth: number
  borderColor: string
}

export const CircleBorder: FC<CircleBorderProps> = ({
  size,
  borderWidth,
  borderColor,
  children,
}) => (
  <View
    style={{
      ...styles.container,
      width: size,
      height: size,
      borderRadius: 0.5 * size,
      borderColor,
      borderWidth,
    }}>
    {children}
  </View>
)
