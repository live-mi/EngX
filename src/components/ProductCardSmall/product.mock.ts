import {ProductModel} from '../../features/products'

export const productMock: ProductModel = {
  id: 'product',
  type: 'product',
  attributes: {
    name: 'name',
    description: 'description',
    available_on: 'available_on',
    slug: 'slug',
    meta_description: 'meta_description',
    meta_keywords: 'meta_keywords',
    updated_at: '27/02/2022',
    display_price: '22$',
    purchasable: true,
  },
}
