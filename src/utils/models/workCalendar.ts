import { ObjectBase } from './common'

export interface Shift extends ObjectBase {
  active: boolean
  dayOfWeek: Array<string>
  start: number
  end: number
  rest: Array<{
    start: number
    end: number
  }>
}
// export interface ShiftOfCalendar extends Shift {}
export interface WorkingCalendarObject {
  id: string
  title: string

  active: boolean
  dayOfWeek: Array<string>
  start: number
  end: number

  rest: Array<{
    start: number
    end: number
  }>
}
