import React, {FC, useCallback, useMemo, useRef, useState} from 'react'
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  StyleSheet,
  Text,
} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button, Divider} from 'react-native-elements'
import {ProductModel, useGetProductByIdQuery} from '../../features/products'
import {makeRandomValue, NavigationInterface} from '../../shared'
import {config} from '../../const'
import {Card} from 'react-native-elements'

type RenderCarouselItem = {
  item: any
  index: number
}

const renderCarouselItem = ({item}: RenderCarouselItem) => {
  return <Card.Image source={item} />
}

interface ProductDetailsScreenProps extends NavigationInterface {}

export const ProductDetailsScreen: FC<ProductDetailsScreenProps> = ({
  route,
}) => {
  const {data, isLoading, refetch} = useGetProductByIdQuery(route.params.id)
  const product: ProductModel | undefined = data?.data
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState<number>(0)
  const {width: viewportWidth} = Dimensions.get('window')
  const carouselRef = useRef<HTMLElement | any>()
  const images = useMemo(
    () =>
      Array.from({length: makeRandomValue(3, 6)}).map((_, index) => ({
        uri: `${config.baseImageUrl}seed/${index + 1}/300/200`,
      })),
    [],
  )

  const onRefresh = useCallback(() => refetch(), [])
  const refHandler = (ref: HTMLElement) => {
    carouselRef.current = ref
  }
  const onSnapHandler = (index: number) => setCurrentCarouselIndex(index)
  const onNextHandler = (): void => {
    const nextIndex = currentCarouselIndex + 1
    if (nextIndex > images.length - 1) {
      return
    }
    carouselRef.current?.snapToItem(nextIndex)
    setCurrentCarouselIndex(nextIndex)
  }
  const onPreviousHandler = (): void => {
    const previousIndex = currentCarouselIndex - 1
    if (previousIndex < 0) {
      return
    }
    carouselRef.current?.snapToItem(previousIndex)
    setCurrentCarouselIndex(previousIndex)
  }

  if (!product) {
    return (
      <SafeAreaView>
        <Text>There's no such a product</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollViewContainer}
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <View style={styles.viewContainer}>
          <View style={styles.carouselContainer}>
            <View>
              <Icon.Button
                name="chevron-left"
                size={24}
                color="gray"
                backgroundColor="transparent"
                onPress={onPreviousHandler}
              />
            </View>
            <View>
              <Carousel
                data={images}
                renderItem={renderCarouselItem}
                onSnapToItem={onSnapHandler}
                // @ts-ignore
                ref={refHandler}
                sliderWidth={viewportWidth - 100}
                itemWidth={viewportWidth}
                dotsLength={images.length}
              />
              <Pagination
                dotsLength={images.length}
                activeDotIndex={currentCarouselIndex}
                dotStyle={styles.paginationActiveDot}
                inactiveDotStyle={styles.paginationInactiveDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </View>
            <View>
              <Icon.Button
                name="chevron-right"
                size={24}
                color="gray"
                backgroundColor="transparent"
                onPress={onNextHandler}
              />
            </View>
          </View>
          <View style={styles.productInfoContainer}>
            <View style={styles.productInfoSection}>
              <Text>{product.attributes.name}</Text>
              <Text>{product.attributes.display_price}</Text>
            </View>
            <Divider />
            <View style={styles.productInfoSection}>
              <Text>Available on: {product.attributes.available_on}</Text>
              <Text>
                Purchasable: {product.attributes.purchasable ? 'Yes' : 'No'}
              </Text>
            </View>
            <Divider />
            <View style={styles.productInfoSection}>
              <Text>{product.attributes.description}</Text>
            </View>
          </View>
          <Button
            style={styles.addToCartButton}
            title="Add to Cart"
            onPress={() => console.log('Add to Cart')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginTop: 10,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  carouselContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfoContainer: {
    margin: 16,
  },
  productInfoSection: {
    marginTop: 10,
    marginBottom: 10,
  },
  addToCartButton: {
    margin: 16,
    // position: 'absolute',
    bottom: 10,
  },
  paginationActiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#008ACE',
  },
  paginationInactiveDot: {
    backgroundColor: '#C3C3C3',
  },
})
