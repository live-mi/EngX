import React, {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-elements'
import {config} from '../../const'
import {ProductModel} from '../../features/products'

interface CardProps {
  product: ProductModel
  onClick?: (id: string) => void
}

export const ProductCard: FC<CardProps> = ({product, onClick}) => {
  return (
    <TouchableOpacity onPress={() => onClick?.(product.id)}>
      <Card>
        <Card.Image
          source={{uri: `${config.baseImageUrl}seed/${product.id}/300/200`}}
        />
        <Card.Title style={styles.title}>{product.attributes.name}</Card.Title>
        <Card.Divider />
        <Text style={styles.description} numberOfLines={2}>
          {product.attributes.description}
        </Text>
        <Card.Divider />
        <Text style={styles.price}>{product.attributes.display_price}</Text>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    margin: 10,
    alignSelf: 'flex-start',
  },
  description: {
    marginBottom: 15,
  },
  price: {
    marginBottom: 15,
    fontSize: 18,
  },
})
