import { ObjectBase, ObjectWithCode, ObjectWithCreatedAndDes } from './common'

export interface ToolsAndReplacementObject extends ObjectWithCode {
  available_quantity: number
  group_name: string
  unit_name: string
  active: boolean
}

export interface ToolsAndReplacementInfo extends ToolsAndReplacementObject {
  serial_number: string
  description: string
  archive: boolean
  active: boolean
  group: {
    id: string
    name: string
  }
  unit: ObjectBase
}

export interface ToolsAndReplacementGroup extends ObjectWithCreatedAndDes {
  active?: boolean
  archive?: boolean
}

export interface ToolsGroupPayload {
  id?: string
  name: string
  description: string
}
