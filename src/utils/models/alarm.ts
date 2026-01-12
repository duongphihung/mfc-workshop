export interface AlarmObject {
  id: string
  created_time: number | null
  entity: {
    id: string
    type: string
    name: string
    location: string 
  }
  type: string | null
  start_ts: number | null
  end_ts: number | null
  clear_ts: number | null
  severity: string | null
  status: string | null
  additional_info: string | null
}
export interface StatusAlarmCounts {
  done: number
  critical: number
  unprocessed: number
  warning: number
}
