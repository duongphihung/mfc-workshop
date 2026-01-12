import { userApis } from '@/apis/userApis'
import tanStackKeys from '@/utils/constants/tanstack_keys'
import { ListParams, UserPayload, UserPayloadUpdate } from '@/utils/models'
import { openNotificationWithIcon } from '@/utils/ui/roleNotification'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetUserList = (params: ListParams) => {
  return useQuery({
    queryKey: [tanStackKeys.USER_LIST_KEY, params],
    queryFn: () => userApis.getUserList(params),
  })
}
export const useGetUserDetail = (params: ListParams) => {
  return useQuery({
    queryKey: [tanStackKeys.USER_DETAIL_KEY, params],
    queryFn: () => userApis.getUserDetail(params),
    enabled: !!params.id,
  })
}

export const useUserCreate = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (params: UserPayload) => userApis.createUser(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tanStackKeys.USER_LIST_KEY] })
      openNotificationWithIcon('info', 'Thông báo', 'Tạo thành công')
    },
    onError: (error: AxiosError<{ detail: { Error: string } }>) => {
      if (error.response && error.response.data?.detail) {
        openNotificationWithIcon('error', 'Thông báo', `${error.response.data?.detail.Error}`)
      }
    },
  })
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (params: UserPayloadUpdate) => userApis.updateUser(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tanStackKeys.USER_LIST_KEY] })
      openNotificationWithIcon('info', 'Thông báo', 'Cập nhật thành công')
    },
    onError: (error: AxiosError<{ detail: { Error: string } }>) => {
      if (error.response && error.response.data?.detail) {
        openNotificationWithIcon('error', 'Thông báo', `${error.response.data?.detail.Error}`)
      }
    },
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => userApis.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tanStackKeys.USER_LIST_KEY] })
      openNotificationWithIcon('info', 'Thông báo', 'Xóa thành công')
    },
    onError: (error: AxiosError<{ detail: { Error: string } }>) => {
      if (error.response && error.response.data?.detail) {
        openNotificationWithIcon('error', 'Thông báo', `${error.response.data?.detail.Error}`)
      }
    },
  })
}

export const useChangePasswordUser = () => {
  return useMutation({
    mutationFn: (params: ListParams) => userApis.changePasswordUser(params),
    onSuccess: () => {
      openNotificationWithIcon('info', 'Thông báo', 'Cập nhật mật khẩu thành công')
    },
    onError: (error: AxiosError<{ detail: { Error: string } }>) => {
      if (error.response && error.response.data?.detail) {
        openNotificationWithIcon('error', 'Thông báo', `${error.response.data?.detail.Error}`)
      }
    },
  })
}
