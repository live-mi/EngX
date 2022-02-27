import React, {FC, useState, useCallback} from 'react'
import {
  RefreshControl,
  ScrollView,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import debounce from 'lodash/debounce'
import {ProductModel, useGetProductsQuery} from '../../features/products'
import {ProductCard, ItemsList} from '../../components'
import {NavigationInterface} from 'shared/types/navigation.interface'
import {useWatchLocation} from '../../shared/hooks'
import {TextInput} from '../../components/TextInput'
import styles from './styles'
import {useSearchHistory} from '../../shared/hooks/useSearchHistory'

interface HomeScreenProps extends NavigationInterface {}

export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const [searchText, setSearchState] = useState<string>('')
  const [hasFocus, setFocus] = useState(false)
  const {data, isLoading, refetch} = useGetProductsQuery(searchText)
  const products = data?.data || []
  const {history = [], removeItem, addItem} = useSearchHistory<string>()
  const location = useWatchLocation()

  const debouncedRefetch = useCallback(
    debounce(async (text: string) => {
      refetch()
      if (text) {
        await addItem(text)
      }
    }, 500),
    [refetch],
  )

  const onSearchChange = useCallback(
    (text: string) => {
      setSearchState(text)
      debouncedRefetch(text)
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

  const onSelectSearchHistoryItem = (item: string) => () => {
    setSearchState(item)
  }

  const onRemoveSearchHistoryItem = (index: number) => async () => {
    await removeItem(index)
  }

  const onInputFocus = () => setFocus(true)

  const onInputBlur = () => setFocus(false)

  return (
    <SafeAreaView testID="home-screen-container">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <TextInput
          style={styles.textInput}
          leftIcon={<Icon name="user" size={24} color="black" />}
          label="Search Item"
          placeholder="Search Item"
          autoCompleteType={false}
          value={searchText}
          onChangeText={onSearchChange}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
        {hasFocus && (
          <View style={styles.searchHistoryContainer}>
            {history.map((item: string, index) => (
              <TouchableOpacity
                key={item}
                onPress={onSelectSearchHistoryItem(item)}>
                <View style={styles.searchHistoryItem} key={index}>
                  <Text>{item}</Text>
                  <Icon
                    name="close"
                    size={30}
                    color="red"
                    onPress={onRemoveSearchHistoryItem(index)}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
