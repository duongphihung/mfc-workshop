import { Dayjs } from 'dayjs'
import { ObjectWithCreatedAndDes } from './common'
import { EquipmentObject } from './equipment'
import { ProcedureMaintenance } from './procedure'
import { ToolsAndReplacementObject } from './tools_and_replacement'
import { UserInfo } from './user'

export interface MaintenanceObject extends ObjectWithCreatedAndDes {
  code: string
  name: string
  state: string
  start_ts: number
  end_ts: number
  estimated_start_time: number
  estimated_end_time: number
  priority: boolean
  list_equipment: EquipmentObject[]
  list_tool: MaintenanceLabor<ToolsAndReplacementObject>[]
  list_replacement_part: MaintenanceLabor<ToolsAndReplacementObject>[]
  list_job: ProcedureMaintenance[]
  list_labor: MaintenanceLabor<UserInfo>[]
  list_image?: string[]
  list_document?: string[]
}

export interface MaintenancePayload {
  code: string
  name: string
  state: string
  start_ts?: number
  end_ts?: number
  estimated_start_time: number
  estimated_end_time: number
  priority: boolean
  list_equipment: EquipmentObject[] | null
  list_tool: MaintenanceLabor<ToolsAndReplacementObject>[] | null
  list_replacement_part: MaintenanceLabor<ToolsAndReplacementObject>[] | null
  list_job: ProcedureMaintenance[] | null
  list_labor: MaintenanceLabor<UserInfo>[] | null
  list_image?: string[]
  list_document?: string[]
}

export interface MaintenanceLabor<T> {
  role: string
  state: string
  list: T[]
}
export interface MaintenanceForm {
  code: string
  name: string
  estimated_time: Dayjs[]
  execution_time: { dates: [Dayjs, Dayjs]; dateStrings: [string, string] }
  priority: boolean
  state: string
}
