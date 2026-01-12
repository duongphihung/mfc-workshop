import { ObjectBase, ObjectWithCode } from './common'

export interface ProcedureObject extends ObjectWithCode {
  created_time: number
  description: string
  active: boolean
}
export interface ProcedureMaintenance extends ProcedureObject {
  status: boolean
  jobs: JobObject[]
}

export interface ProcedurePayload {
  name: string
  code: string
  description?: string
}

export interface JobObject extends ObjectBase {
  key?: string
  status: boolean
  sort_order: number
}
