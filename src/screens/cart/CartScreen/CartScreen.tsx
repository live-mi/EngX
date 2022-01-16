import React, {FC} from 'react'
import {Image, Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import styles from './styles'

export const CartScreen: FC<any> = ({navigation}) => {
  const handleShopButton = () => {
    navigation.navigate('Main')
  }

  //@TODO: Display items in the cart after implementation API call
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/empty_box.png')}
        style={styles.image}
      />
      <Text style={styles.textTitle}>Your Cart is Empty!</Text>
      <Text style={styles.textDescription}>Add product in your cart now</Text>
      <Button
        style={styles.shopButton}
        title="Shop Now"
        onPress={handleShopButton}
      />
    </View>
  )
}
