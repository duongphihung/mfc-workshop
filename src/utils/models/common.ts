export interface ListResponse<T> {
  data: T[]
  total_elements: number
  total_pages: number
  has_next: boolean
}
export interface AdditionalInfo {
  [key: string]: string | number | boolean
}
export interface ListParams {
  page?: number
  page_size?: number
  [key: string]: string | number | undefined | boolean | object
}

export interface ObjectBase {
  id: string
  name: string
}
export interface ObjectWithCode extends ObjectBase {
  code: string
}
export interface ObjectWithCreatedAndDes extends ObjectBase {
  created_time: number
  description: string
}

export interface CategoryOption {
  value: string
  label: string
  disabled?: boolean
}
export interface Location {
  name: string
  detail: ObjectBase[]
}
export interface AssetObject extends ObjectWithCreatedAndDes {
  code: string
  location: Location
  key?: string
  active?: boolean
  archive?: boolean
  type?: string
}

export interface ItemRouterProps {
  label: string
  path: string
  url: string
  keys: Array<string>
  description?: string
  image?: string
  children?: Array<ItemRouterProps>
}

export interface SelectOption {
  label: string
  value: string
  key?: string
}
