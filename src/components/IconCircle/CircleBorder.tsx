import React, {FC} from 'react'
import {View} from 'react-native'
import styles from './styles'

interface CircleBorderProps {
  size: number
  borderWidth?: number
  borderColor?: string
  backgroundColor?: string
  testID?: string
}

export const CircleBorder: FC<CircleBorderProps> = ({
  size,
  borderWidth,
  borderColor,
  backgroundColor,
  children,
  testID,
}) => (
  <View
    style={{
      ...styles.container,
      width: size,
      height: size,
      borderRadius: 0.5 * size,
      borderColor,
      borderWidth,
      backgroundColor,
    }}
    testID={testID}>
    {children}
  </View>
)
