import axiosClient from '@/apis/axios-client'
import { Auth_url } from './urlAPI';
import { Account, LoginResponse } from '@/utils/models/auth';
import { UserInfo } from '@/utils/models/user';
import { ListParams } from '@/utils/models/common';

export const authApis = {
  login(params: Account): Promise<LoginResponse> {
    const url = `${Auth_url}/login`;
    return axiosClient.post(url, params);
  },

    getCurrentUser(): Promise<UserInfo> {
        const url = `${Auth_url}/current_user`
        return axiosClient.get(url)
    },
    logout(): Promise<string> {
        const url = `${Auth_url}/logout`
        return axiosClient.post(url)
    },
    resetPasswordByEmail(params: ListParams): Promise<string> {
        const url = "/api/noauth/reset_password_by_email"
        return axiosClient.post(url, params)
    },
    resetPassword(params: ListParams): Promise<unknown> {
        const url = "/api/noauth/reset_password"
        return axiosClient.post(url, params)
    },
    //   getUserRoles(): Promise<ListResponse<RoleElement>> {
    //     const url = `${Auth_url}/view`;
    //     return axiosClient.get(url);
    //   },
}
