import React from 'react'
import {render} from '@testing-library/react-native'
import {Modal} from './Modal'

it('should render <ProductCardSmall> component', () => {
  const {getByRole} = render(<Modal />)

  const modal = getByRole('alert')
  expect(modal).toBeDefined()
})
