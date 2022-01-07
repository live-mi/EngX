import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
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
