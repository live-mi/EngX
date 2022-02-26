import React, {FC} from 'react'
import {SafeAreaView, Text, Image, Pressable} from 'react-native'
import Modal from 'react-native-modal'
import styles from './styles'

type ImagePickerModalProps = {
  isVisible: boolean
  onClose: () => void
  onImageLibraryPress: () => void
  onCameraPress: () => void
}

export const ImagePickerModal: FC<ImagePickerModalProps> = ({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Image
            style={styles.buttonIcon}
            source={require('../../../../assets/images/addButton.png')}
          />
          <Text style={styles.buttonText}>Library</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Image
            style={styles.buttonIcon}
            source={require('../../../../assets/images/camera.png')}
          />
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  )
}
