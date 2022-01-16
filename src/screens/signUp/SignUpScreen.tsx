import React, {useState} from 'react'
import {View} from 'react-native'
import {Button, Input} from 'react-native-elements'
import {
  sharedUseCreateTokenMutation,
  useCreateTokenMutation,
} from '../../features/auth'
import styles from './styles'

export const SignUpScreen = () => {
  // @TODO: remove placeholder later
  const [username, setUsername] = useState('maksim@example.com')
  const [password, setPassword] = useState('q12345')
  const [createToken] = useCreateTokenMutation({
    fixedCacheKey: sharedUseCreateTokenMutation,
  })

  const handleSignIn = () => {
    createToken({username, password})
  }

  return (
    <View>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCompleteType={false}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCompleteType={false}
      />
      <Button
        style={styles.signInButton}
        title="Sign Up"
        onPress={handleSignIn}
      />
    </View>
  )
}
