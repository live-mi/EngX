import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import {TextInput} from './TextInput'

it('should change text on <TextInput>', () => {
  const onChangeCallback = jest.fn()

  const {getByTestId} = render(
    <TextInput
      value=""
      onChangeText={onChangeCallback}
      testID="text-input-test-id"
    />,
  )

  const input = getByTestId('text-input-test-id')
  expect(input).toBeDefined()

  fireEvent.changeText(input, 'value')
  expect(onChangeCallback).toBeCalledWith('value')
})
