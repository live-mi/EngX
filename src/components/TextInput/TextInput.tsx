import React from 'react'
import {TextInput as Input} from 'react-native-paper'

export const TextInput = (props: any) => {
  return <Input mode="outlined" {...props} testID={props.testID} />
}
