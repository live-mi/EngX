import React, {useState} from 'react'
import {TextInput, View, Button} from 'react-native'
import {useCreateTokenMutation} from '../../features/auth'

export const SignUpScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [createToken] = useCreateTokenMutation()

  const handleSignIn = () => {
    createToken({username, password})
  }

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  )
}
