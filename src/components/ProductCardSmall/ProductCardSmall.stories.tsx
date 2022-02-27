import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {productMock} from './product.mock'
import {ProductCardSmall} from './ProductCardSmall'

storiesOf('components/ProductCard', module).add('ProductCard', () => (
  <ProductCardSmall
    product={productMock}
    onClick={() => console.log('onPress')}
  />
))
