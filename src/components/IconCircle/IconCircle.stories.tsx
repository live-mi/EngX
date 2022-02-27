import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {IconCircle} from './IconCircle'

storiesOf('components/ProductCard', module).add('ProductCard', () => (
  <IconCircle name="gitlab" circleSize={50} />
))
