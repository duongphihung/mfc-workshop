import { ObjectBase, ObjectWithCreatedAndDes } from './common'

export interface PermissionInfo extends ObjectWithCreatedAndDes {
  privs: Privs
  default: boolean
  user_count: number
}

interface Privs {
  string: string
  list: List[]
}

export interface List extends ObjectBase {
  url: string
  tag: string
  type: string
  operation_id: string
  name_vi: string
  default: boolean
  status?: boolean
}
