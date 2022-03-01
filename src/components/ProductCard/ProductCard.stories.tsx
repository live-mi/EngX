import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {productMock} from './product.mock'
import {ProductCard} from './ProductCard'

storiesOf('components/ProductCard', module).add('ProductCard', () => (
  <ProductCard product={productMock} onClick={() => console.log('onPress')} />
))
