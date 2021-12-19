export interface ProductModel {
  id: string
  type: 'product'
  attributes: Attributes
}

interface Attributes {
  name: string
  description: string
  available_on: string
  slug: string
  meta_description: string
  meta_keywords: string
  updated_at: string
  display_price: string
  purchasable: boolean
}
