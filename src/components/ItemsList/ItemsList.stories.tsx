import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {ItemsList} from './ItemsList'

storiesOf('components/ProductCard', module).add('ProductCard', () => (
  <ItemsList>
    <li>ListItem1</li>
    <li>ListItem2</li>
    <li>ListItem3</li>
  </ItemsList>
))
