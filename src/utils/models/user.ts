import { AdditionalInfo } from './common'

export interface UserInfo {
  id: string
  key?: string
  created_time: number
  email: string
  first_name: string | null
  last_name: string | null
  archive: boolean
  active: boolean
  authority: string
  additional_info: AdditionalInfo
}

// export interface AdditionalInfo {
//   position: string
//   phone: string
//   address: string
//   birthday: number
//   sex: string
// }

export interface UserForm {
  first_name: string
  last_name: string
  email: string
  position: string
  phone: string
  address: string
  birthday: number
  sex: string
  active: boolean
}

export type UserPayload = Omit<
  UserInfo,
  'key' | 'id' | 'created_time' | 'authority' | 'archive' | 'active'
>
export type UserPayloadUpdate = Omit<
  UserInfo,
  'key' | 'created_time' | 'authority' | 'archive' | 'active'
>
