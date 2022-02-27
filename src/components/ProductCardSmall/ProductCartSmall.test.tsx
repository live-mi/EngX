import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import {ProductCardSmall} from './ProductCardSmall'
import {productMock} from './product.mock'

it('should render <ProductCardSmall> component', () => {
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
