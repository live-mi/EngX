import React, {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Card} from 'react-native-elements'
import {config} from '../../const'
import {ProductModel} from '../../features/products'
import styles from './styles'

interface CardProps {
  product: ProductModel
  onClick?: (id: string) => void
}

export const ProductCardSmall: FC<CardProps> = ({product, onClick}) => {
  return (
    <TouchableOpacity onPress={() => onClick?.(product.id)}>
      <Card>
        <Card.Title style={styles.title}>{product.attributes.name}</Card.Title>
        <View style={styles.content}>
          <View>
            <Text style={styles.attribute}>Color: Blue</Text>
            <Text style={styles.attribute}>Qty: 1</Text>
            <Text style={styles.price}>{product.attributes.display_price}</Text>
          </View>
          <Card.Image
            style={styles.image}
            source={{uri: `${config.baseImageUrl}seed/${product.id}/300/200`}}
          />
        </View>
      </Card>
    </TouchableOpacity>
  )
}
