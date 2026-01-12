import { notification } from 'antd'
import { ReactNode } from 'react'

export const openNotificationWithIcon = (
  type: 'success' | 'info' | 'error' | 'warning',
  message: string,
  description: string,
  icon?: ReactNode,
) => {
  if (['success', 'info', 'error', 'warning'].includes(type)) {
    notification[type]({ title: message, description, icon })
  }
}
export const dontHaveRoleNotification = () => {
  return openNotificationWithIcon(
    'info',
    'Thông báo',
    'Bạn không có quyền truy cập, vui lòng liên hệ với người quản trị.',
  )
}
