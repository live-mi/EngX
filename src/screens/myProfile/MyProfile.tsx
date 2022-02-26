import React, {FC, useCallback, useEffect, useState} from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import {Button} from 'react-native-elements'
import * as ImagePicker from 'react-native-image-picker'
import {TextInput} from '../../components/TextInput'
import {ImagePickerModal} from '../imagePicker/components'
import styles from './styles'
import {
  useFetchProfileQuery,
  useUpdateProfileMutation,
} from '../../features/auth'
import {useAsyncStorage} from '../../shared/hooks'
import {IMAGE_KEY} from '../../shared/const'

export const MyProfileScreen: FC<any> = ({navigation}) => {
  const {getItem, setItem} = useAsyncStorage()
  const {data, isLoading, isSuccess, refetch} = useFetchProfileQuery('')
  const [updateProfile] = useUpdateProfileMutation()
  const [uri, setUri] = useState<any>(null)
  const [visible, setVisible] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [billAddress, setBillAddress] = useState('')
  const [shipAddress, setShipAddress] = useState('')

  useEffect(() => {
    ;(async () => {
      const data = await getItem(IMAGE_KEY)
      setUri(data)
    })()
  }, [getItem])

  useEffect(() => {
    if (!isLoading && isSuccess && data) {
      setFirstName(data.first_name)
      setLastName(data.last_name)
      setBillAddress(data.bill_address_id)
      setShipAddress(data.ship_address_id)
    }
  }, [data, isSuccess, isLoading])

  const onPicturePress = () => setVisible(true)

  const onImageLibraryPress = useCallback(() => {
    const options: any = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    }
    ImagePicker.launchImageLibrary(options, async ({assets}) => {
      if (assets && assets[0] && assets[0].uri) {
        const {uri} = assets[0]
        setUri(uri)
        await setItem(IMAGE_KEY, uri)
      }
    })
  }, [])

  const onCameraPress = React.useCallback(() => {
    const options: any = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    }
    ImagePicker.launchCamera(options, async ({assets}) => {
      if (assets && assets[0] && assets[0].uri) {
        const {uri} = assets[0]
        setUri(uri)
        await setItem(IMAGE_KEY, JSON.stringify(uri))
      }
    })
  }, [])

  const onUpdate = () => {
    updateProfile({
      first_name: firstName,
      last_name: lastName,
      bill_address_id: billAddress,
      ship_address_id: shipAddress,
    })
    refetch()
  }

  const onLogout = () => {
    navigation.navigate('LogoutDialogModal')
  }

  return (
    <View style={styles.root}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          label="FirstName"
          placeholder="Text"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={styles.avatar}>
        <TouchableOpacity onPress={onPicturePress}>
          <Image
            style={styles.avatarImage}
            source={
              uri ? {uri} : require('../../assets/images/addProfilePhoto.png')
            }
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          label="Lastname"
          placeholder="Text"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          label="Bill address"
          placeholder="Text"
          value={billAddress}
          onChangeText={setBillAddress}
        />
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          label="Ship address"
          placeholder="Text"
          value={shipAddress}
          onChangeText={setShipAddress}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={onUpdate}
          style={styles.button}
          title="Update"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onLogout}
          style={styles.button}
          title="Logout"
          accessibilityLabel="Logout"
        />
      </View>

      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  )
}
