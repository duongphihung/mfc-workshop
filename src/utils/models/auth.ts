export interface ChangePasswordParams {
  user_id: string;
  old_password: string;
  new_password: string;
}
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface Account {
  username: string;
  password: string;
}
