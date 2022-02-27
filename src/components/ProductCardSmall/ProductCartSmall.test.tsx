import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import {ProductCardSmall} from './ProductCardSmall'
import {ProductModel} from '../../features/products'

it('should render <ProductCardSmall> component', () => {
  let productMock: ProductModel = {
    id: 'product',
    type: 'product',
    attributes: {
      name: 'name',
      description: 'description',
      available_on: 'available_on',
      slug: 'slug',
      meta_description: 'meta_description',
      meta_keywords: 'meta_keywords',
      updated_at: '27/02/2022',
      display_price: '22$',
      purchasable: true,
    },
  }
  const onClickCallback = jest.fn()

  const {getByTestId} = render(
    <ProductCardSmall
      onClick={onClickCallback}
      product={productMock}
      testID="card-container-id"
    />,
  )

  const container = getByTestId('card-container-id')
  expect(container).toBeDefined()

  fireEvent.press(container)
  expect(onClickCallback).toBeCalled()
  expect(container).toHaveProperty('children')
})
