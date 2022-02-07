import React, {FC, useState, useCallback, useEffect} from 'react'
import {
  RefreshControl,
  ScrollView,
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Input} from 'react-native-elements'
import {ProductModel, useGetProductsQuery} from '../../features/products'
import {ProductCard, ItemsList} from '../../components'
import {NavigationInterface} from 'shared/types/navigation.interface'
import {useAsyncStorage, useWatchLocation} from '../../shared/hooks'
import {LOCATION_KEY} from '../../shared/const'

interface HomeScreenProps extends NavigationInterface {}

export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const [searchText, setSearchState] = useState<string>('')
  const {data, isLoading, refetch} = useGetProductsQuery('')
  const products = data?.data || []
  const location = useWatchLocation()
  const {getItem, setItem} = useAsyncStorage()

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

  useEffect(() => {
    ;(async () => {
      const location = await getItem(LOCATION_KEY)
      if (location) {
        const parsed = JSON.parse(location)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (location?.longitude && location?.latitude) {
        // await setItem(LOCATION_KEY, JSON.stringify(location))
      }
    })()
  }, [location])

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Location</Text>
        <Text>{location?.latitude}</Text>
        <Text>{location?.longitude}</Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <Input
          placeholder="Search Item"
          leftIcon={<Icon name="user" size={24} color="black" />}
          autoCompleteType={false}
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
