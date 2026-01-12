import { AssetObject, Location, ObjectBase, ObjectWithCreatedAndDes } from './common'
export interface EquipmentObject extends ObjectWithCreatedAndDes {
  code: string
  serial_number: string
  model: boolean
  archive: boolean
  active: boolean
  group: ObjectBase
  connect_device: boolean
  group_name: string
  installation_date: number
  installation_order: number
  location: Location
}
export interface EqmWithParent extends EquipmentObject {
  parent: string
}

export interface EquipmentPayload {
  id?: string
  name: string
  description: string
  code: string
  serial_number: string
  model: boolean
  active?: boolean
  upload?: string
  type?: string
  group: {
    [key: string]: string
  }
  area_parent_id?: string
}

export type EquipmentGroup = AssetObject

export interface EquipmentGroupPayload {
  id?: string
  name: string
  description: string
}
