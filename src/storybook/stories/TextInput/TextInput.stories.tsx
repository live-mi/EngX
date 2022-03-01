import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {text} from '@storybook/addon-knobs'

import {TextInput} from './TextInput'

storiesOf('components/TextInput', module).add('Components', () => (
  <TextInput value={text('value', 'value')} />
))
