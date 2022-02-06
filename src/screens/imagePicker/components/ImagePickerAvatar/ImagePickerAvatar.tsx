import React, {FC} from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native'

import styles from './styles'

type ImagePickerAvatarProps = {
  uri: string
  onPress: () => void
}

export const ImagePickerAvatar: FC<ImagePickerAvatarProps> = ({
  uri,
  onPress,
}) => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../../../../assets/images/whatsappBackground.jpeg')}>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={
            uri ? {uri} : require('../../../../assets/images/avatar.jpeg')
          }
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Image
            style={styles.addButtonIcon}
            source={require('../../../../assets/images/addButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.usernameText}>Gapur Kassym</Text>
      </View>
    </ImageBackground>
  )
}
