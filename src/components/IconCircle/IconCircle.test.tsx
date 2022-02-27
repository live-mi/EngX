import React from 'react'
import {render} from '@testing-library/react-native'
import {IconCircle} from './IconCircle'

it('should render <IconCircle> component', () => {
  const onPressCallback = jest.fn()
  const {getByTestId} = render(
    <IconCircle
      name="gitlab"
      circleSize={20}
      testID="icon-circle-test-id"
      onPress={onPressCallback}
    />,
  )

  const iconContainer = getByTestId('icon-circle-test-id')
  expect(iconContainer).toBeDefined()
  expect(iconContainer).toHaveProperty('children')
})
