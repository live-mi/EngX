import React, {FC} from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import {IconCircle, Modal} from '../../../../components'
import styles from './styles'

export const SelectColorModal: FC<any> = ({navigation}) => {
  const onBack = () => navigation.goBack()

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <IconCircle
            name="close"
            color="#DD6B55"
            borderColor="#DD6B55"
            size={30}
            borderWidth={7}
            circleSize={65}
          />
        </View>
        <Text style={styles.titleText}>Select Color</Text>
        <Text style={styles.descriptionText}>
          Please select your color to add this item to your cart
        </Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onBack} title="OK" />
        </View>
      </View>
    </Modal>
  )
}
