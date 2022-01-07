import React, {FC, useState, useCallback} from 'react'
import {RefreshControl, ScrollView, SafeAreaView, StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Input} from 'react-native-elements'
import {ProductModel, useGetProductsQuery} from '../../features/products'
import {ProductCard, ItemsList} from '../../components'
import {NavigationInterface} from 'shared/types/navigation.interface'

interface HomeScreenProps extends NavigationInterface {}

export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const [searchText, setSearchState] = useState<string>('')
  const {data, isLoading, refetch} = useGetProductsQuery('')
  const products = data?.data || []

  const onSearchChange = useCallback(
    (text: string) => {
      setSearchState(text)
    },
    [searchText],
  )

  const onProductCardClick = useCallback((id: string) => {
    navigation.navigate('ProductDetailsStack', {
      screen: 'ProductDetails',
      params: {id},
    })
  }, [])

  const onRefresh = useCallback(() => refetch(), [])

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        {/*@ts-ignore*/}
        <Input
          placeholder="Search Item"
          leftIcon={<Icon name="user" size={24} color="black" />}
          value={searchText}
          onChangeText={onSearchChange}
        />
        <ItemsList>
          {products.map((product: ProductModel) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductCardClick}
            />
          ))}
        </ItemsList>
      </ScrollView>
    </SafeAreaView>
  )
}
