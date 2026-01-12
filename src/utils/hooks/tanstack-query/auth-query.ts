import tanStackKeys from '@/utils/constants/tanstack_keys';
// import routerUrlKeys from '@/utils/constants/routerUrlKeys'
import { Account, ListParams, LoginResponse } from '@/utils/models'

import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { authApis } from '@/apis/authApis'
import { openNotificationWithIcon } from '@/utils/ui/roleNotification';

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [tanStackKeys.CURRENT_USER_KEY],
    queryFn: () => authApis.getCurrentUser(),
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ body }: { body: Account }) => authApis.login(body),
    onSuccess: (data: LoginResponse) => {
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('refresh_token', data.refresh_token)
      navigate('/home', { replace: true })
    },
    onError: () => {
      openNotificationWithIcon('error', 'Thông báo', `Sai tài khoản hoặc mất khẩu`)
    },
  });
};

export const useLogOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => authApis.logout(),
    onSuccess: () => {
      localStorage.clear();
      navigate(`/`);
    },
    onError: () => {
      openNotificationWithIcon('error', 'Thông báo', `Something went wrong`)
    },
  })
}

export const useResetPasswordByEmail = () => {
  return useMutation({
    mutationFn: (email: ListParams) => authApis.resetPasswordByEmail(email),
    onSuccess: () => {
      openNotificationWithIcon('success', 'Thông báo', `Vui lòng kiểm tra Email của bạn`)
    },
    onError: () => {
      openNotificationWithIcon('error', 'Thông báo', `Không tìm thấy email này`)
    },
  })
}

export const useResetPassword = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (params: ListParams) => authApis.resetPassword(params),
    onSuccess: () => {
      openNotificationWithIcon('success', 'Thông báo', `Đổi mật khẩu thành công!`)
      localStorage.clear()
      navigate(`/`)
    },
    onError: () => {
      openNotificationWithIcon('error', 'Thông báo', `Không tìm thấy email này`)
    },
  });
};
