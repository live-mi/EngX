import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import {ProductCard} from './ProductCard'
import {productMock} from './product.mock'

it('should render <ProductCard> component', () => {
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
