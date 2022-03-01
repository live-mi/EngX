import React from 'react'
import {render} from '@testing-library/react-native'
import {ItemsList} from './ItemsList'

it('should render <ItemsList> component', () => {
  const {getByRole} = render(
    <ItemsList>
      <li>Item 1</li>
      <li>Item 2</li>
    </ItemsList>,
  )

  const container = getByRole('list')
  expect(container).toBeDefined()

  expect(container).toHaveProperty('children')
})
