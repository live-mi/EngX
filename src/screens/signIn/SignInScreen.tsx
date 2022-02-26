import React, {FC, useContext, useEffect, useRef, useState} from 'react'
import {
  ActivityIndicator,
  Animated,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import {TextInput} from '../../components/TextInput'
import {
  sharedUseCreateTokenMutation,
  useCreateTokenMutation,
} from '../../features/auth'
import styles from './styles'
import {StorageContext} from '../../components/App/StorageContext'

export const SignInScreen: FC<any> = ({navigation}) => {
  // @TODO: remove placeholder later
  const [username, setUsername] = useState('maksim@example.com')
  const [password, setPassword] = useState('q12345')
  const [startAnimatedValue, setAnimatedValue] = useState(0)
  const animation = useRef(new Animated.Value(startAnimatedValue)).current
  const [createToken, {error, data, isLoading, isSuccess, isError}] =
    useCreateTokenMutation({
      fixedCacheKey: sharedUseCreateTokenMutation,
    })
  const {setTokenAsync} = useContext(StorageContext)

  useEffect(() => {
    if (isSuccess && data) {
      // @ts-ignore
      setTokenAsync(data)
    }
  }, [isSuccess, data])

  useEffect(() => {
    if (isError) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
    } else {
      setAnimatedValue(0)
    }
  }, [isError, animation, error])

  useEffect(() => {
    // @ts-ignore
    if (error?.status === 'FETCH_ERROR') {
      navigation.navigate('NoInternetModal', {
        retry: () => createToken({username, password}),
      })
    }
  }, [error])

  const handleSignIn = () => {
    createToken({username, password})
  }

  return (
    <View style={styles.root}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          label="Username"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          label="Password"
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      <Animated.View style={{...styles.errorContainer, opacity: animation}}>
        {isError && (
          <Text style={styles.errorMessage}>
            {/* @ts-ignore*/}
            {error?.data?.error_description}
          </Text>
        )}
      </Animated.View>

      <TouchableHighlight underlayColor="transparent" onPress={handleSignIn}>
        <Animated.View style={styles.button}>
          {isLoading ? (
            <ActivityIndicator color="#ffffff" size="large" />
          ) : (
            <Text style={styles.buttonText}>Sign in</Text>
          )}
        </Animated.View>
      </TouchableHighlight>
    </View>
  )
}
