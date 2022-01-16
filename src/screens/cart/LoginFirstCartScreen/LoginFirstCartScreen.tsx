import React, {FC} from 'react'
import styles from './styles'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import {IconCircle} from '../../../components'

export const LoginFirstCartScreen: FC<any> = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('SignIn')
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <IconCircle
        name="user"
        color="#ffffff"
        borderColor="#008ACE"
        size={55}
        circleSize={120}
        backgroundColor="#008ACE"
      />
      <Text style={styles.textTitle}>Login First!</Text>
      <Text style={styles.textDescription}>Login first to view your cart</Text>
      <Button
        style={styles.loginButton}
        title="Sign in"
        onPress={handleLogin}
      />
      <Button
        style={styles.loginButton}
        type="clear"
        title="New here? Sign Up"
        onPress={handleSignUp}
      />
    </View>
  )
}
