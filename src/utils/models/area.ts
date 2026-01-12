import { AssetObject, ObjectBase } from './common'

export interface AreaObject extends AssetObject {
  area_parent: ObjectBase
  serial_number: string
}

export interface AreaPayload {
  name: string
  code: string
  description: string
  id?: string
  area_parent_id?: string
  type?: 'AREA' | 'LINE'
  active?: boolean
  archive?: boolean
  upload?: string
}

export interface AreaDisable {
  id: string
  name: string
}
