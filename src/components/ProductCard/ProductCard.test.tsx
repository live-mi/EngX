import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import {ProductCard} from './ProductCard'
import {ProductModel} from '../../features/products'

it('should render <ProductCard> component', () => {
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

  const {getByLabelText} = render(
    <ProductCard onClick={onClickCallback} product={productMock} />,
  )

  const container = getByLabelText('product card container')
  expect(container).toBeDefined()

  fireEvent.press(container)
  expect(onClickCallback).toBeCalled()
  expect(container).toHaveProperty('children')
})
