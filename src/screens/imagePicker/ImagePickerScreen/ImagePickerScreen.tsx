import React, {useState, useCallback} from 'react'
import {View} from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
import {
  ImagePickerAvatar,
  ImagePickerHeader,
  ImagePickerModal,
} from '../components'

import styles from './styles'

export const ImagePickerScreen = () => {
  const [pickerResponse, setPickerResponse] = useState<any>(null)
  const [visible, setVisible] = useState(false)

  const onImageLibraryPress = useCallback(() => {
    const options: any = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    }
    ImagePicker.launchImageLibrary(options, setPickerResponse)
  }, [])

  const onCameraPress = React.useCallback(() => {
    const options: any = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    }
    ImagePicker.launchCamera(options, setPickerResponse)
  }, [])

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri

  return (
    <View style={styles.screen}>
      <ImagePickerHeader />
      <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  )
}
