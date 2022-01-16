export interface TokenResponseModel {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  created_at: number
}

export interface TokenRequestModel {
  grantType?: 'password'
  username: string
  password: string
}
