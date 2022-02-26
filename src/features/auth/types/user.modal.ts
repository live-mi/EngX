export interface UserRequestModel {
  email?: string
  first_name?: string
  last_name?: string
  bill_address_id?: string
  ship_address_id?: string
  password?: string
  password_confirmation?: string
}

export interface UserResponseModel {
  email: string
  first_name: string
  last_name: string
  bill_address_id: string
  ship_address_id: string
  password: string
  password_confirmation: string
}
