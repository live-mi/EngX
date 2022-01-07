import React, {FC} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {IconProps} from 'react-native-vector-icons/Icon'
import {CircleBorder} from './CircleBorder'

interface IconCircleProps {
  circleSize: number
  borderWidth: number
  borderColor: string
}

export const IconCircle: FC<IconCircleProps & IconProps> = ({
  circleSize,
  borderWidth = 2,
  borderColor = 'black',
  ...props
}) => (
  <CircleBorder
    size={circleSize}
    borderWidth={borderWidth}
    borderColor={borderColor}>
    <Icon {...props} />
  </CircleBorder>
)
