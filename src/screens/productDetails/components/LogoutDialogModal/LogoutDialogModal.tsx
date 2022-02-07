import React, {FC, useContext} from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import {IconCircle, Modal} from '../../../../components'
import {StorageContext} from '../../../../components/App/StorageContext'
import {
  sharedUseCreateTokenMutation,
  useCreateTokenMutation,
} from '../../../../features/auth'
import styles from './styles'

export const LogoutDialogModal: FC<any> = ({navigation}) => {
  const {removeTokenAsync} = useContext(StorageContext)
  const [, {reset}] = useCreateTokenMutation({
    fixedCacheKey: sharedUseCreateTokenMutation,
  })

  const onCancel = () => navigation.goBack()
  const onLogout = async () => {
    await removeTokenAsync()
    reset()
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
        <Text style={styles.titleText}>Are you sure you want to logout?</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onCancel} title="Cancel" />
          <Button
            style={{...styles.button, ...styles.buttonRight}}
            onPress={onLogout}
            title="Logout"
          />
        </View>
      </View>
    </Modal>
  )
}
