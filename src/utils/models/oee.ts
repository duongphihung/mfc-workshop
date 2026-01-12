import { ReactNode } from 'react'

export interface oeeDashboard {
  icon?: ReactNode
  title: string
  cost: {
    value: number
    type: string
  }
  consumtion: {
    expected: number
    used: number
  }
}
