import React, {FC} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {NavigationInterface} from '../../shared'
import styles from './styles'
import {ProductModel, useGetProductsQuery} from '../../features/products'
import {ProductCardSmall} from '../../components'

interface MyOrdersProps extends NavigationInterface {}

export const MyOrdersScreen: FC<MyOrdersProps> = ({navigation}) => {
  const {data} = useGetProductsQuery('')
  const products = data?.data || []

  const onPressAddress = () => {
    navigation.navigate('Map')
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.textRow}>
          <Text style={styles.labelText}>Order Id</Text>
          <Text style={styles.valueText}>OD3489488519356</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.labelText}>Order Date</Text>
          <Text style={styles.valueText}>30/11/2019 10:34</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.labelText}>Total Ammount</Text>
          <Text style={styles.valueText}>$ 380.44</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.labelText}>Payment Mode</Text>
          <Text style={styles.valueText}>COD</Text>
        </View>
        <View style={styles.textRow}>
          <TouchableOpacity onPress={onPressAddress}>
            <Text style={styles.labelText}>Shipping Address</Text>
          </TouchableOpacity>
          <Text style={styles.valueText}>LA, Green John, US</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.labelText}>Status</Text>
          <Text style={styles.statusText}>In-Processing</Text>
        </View>
        <Text style={styles.orderedProductsHeader}>Ordered Products</Text>
        <View>
          {products.slice(0, 2).map((product: ProductModel) => (
            <ProductCardSmall key={product.id} product={product} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}
