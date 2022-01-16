import React, {FC} from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import {IconCircle, Modal} from '../../../../components'
import styles from './styles'

export const ProductAddedToCartModal: FC<any> = ({navigation}) => {
  const onBack = () => navigation.goBack()

  return (
    <Modal>
      <View style={styles.container}>
        <View>
          <IconCircle
            name="check"
            color="#A5DC86"
            borderColor="#A5DC86"
            size={30}
            borderWidth={7}
            circleSize={65}
          />
        </View>
        <Text style={styles.text}>Product Added To Your Cart</Text>
        <Button style={styles.button} onPress={onBack} title="OK" />
      </View>
    </Modal>
  )
}
