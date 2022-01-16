import React, {FC} from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import {IconCircle, Modal} from '../../../../components'
import styles from './styles'

export const LoginToContinueModal: FC<any> = ({navigation}) => {
  const onLogin = () => navigation.goBack()
  const onSignUp = () => navigation.goBack()

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
        <Text style={styles.titleText}>Login To Continue</Text>
        <Text style={styles.descriptionText}>
          Please login to add product to your cart
        </Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onLogin} title="Login" />
          <Button
            style={{...styles.button, ...styles.buttonRight}}
            onPress={onSignUp}
            title="Sign up"
          />
        </View>
      </View>
    </Modal>
  )
}
