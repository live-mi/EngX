import React, {FC} from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import {IconCircle, Modal} from '../../../../components'
import styles from './styles'

export const NoInternetModal: FC<any> = ({navigation, route}) => {
  const onLogin = () => navigation.goBack()
  const onRetry = () => {
    route.params.retry()
    navigation.goBack()
  }

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <IconCircle
            name="exclamation"
            color="#FEB96B"
            borderColor="#FEB96B"
            size={30}
            borderWidth={7}
            circleSize={65}
          />
        </View>
        <Text style={styles.titleText}>There's no internet connection</Text>
        <Text style={styles.descriptionText}>
          Check the setting and try again
        </Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onLogin} title="Cancel" />
          <Button
            style={{...styles.button, ...styles.buttonRight}}
            onPress={onRetry}
            title="Retry"
          />
        </View>
      </View>
    </Modal>
  )
}
