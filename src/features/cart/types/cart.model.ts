import {ProductModel} from '../../products'

export interface CartModel {
  priceDetails: PriceDetails
}

interface PriceDetails {
  items: ProductModel[]
  price: number
  deliveryPrice: number
  discount: number
  tax: number
}
