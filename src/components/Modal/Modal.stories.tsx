import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {View} from 'react-native'
import {Modal} from './Modal'

storiesOf('components/Modal', module).add('Modal', () => (
  <Modal>
    <View>Modal Content</View>
  </Modal>
))
