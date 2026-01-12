import { AdditionalInfo } from './common'

export interface RelationObject {
  id: string
  name: string
  type: string
  relation_type_group: string
  relation_type: string
  additional_info: AdditionalInfo
  description: string | null
  oee_status?: string
}
