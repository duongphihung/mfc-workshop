import dayjs from 'dayjs'
import { AdditionalInfo, ObjectBase, ObjectWithCreatedAndDes } from './common'

export interface DeviceProfile extends ObjectWithCreatedAndDes {
  transport_type: string
  additional_info: AdditionalInfo
  gateway: boolean
}

export interface DeviceInfo extends ObjectBase {
  type: string
  additional_info: AdditionalInfo
  gateway: boolean
  created_time: number
  key?: string
  active: boolean
  locations: LocationDevice[]
}

export interface LocationDevice {
  parent_id: string | null
  parent_name: string | null
  parent_type: string | null
  grandparent_id: string | null
  grandparent_name: string | null
  grandparent_type: string | null
}

export interface ValueOfDevice {
  ts: number
  value: {
    [key: string]: Array<any>
  } | string | number | boolean | object | any;
  type?: string
  label?: string
  key: string
  max?: number
}

export interface CredentialsObject {
  id: string
  created_time: number
  credentials_id: string
  credentials_type: string
  credentials_value: CredentialsValue
  device_id: string
}

export interface CredentialsValue {
  client_id: string
  user_name: string
  password: string
}

export interface InfoDeviceForm {
  id?: string
  name: string
  type: string
  gateway: boolean
  created_time: dayjs.Dayjs
  client_id: string
  user_name: string
  password: string
  area_id: string | null
  equipment_id: string | null
}
