// authHook.ts
export const getLocalAccessToken = () => {
  const token = localStorage.getItem('access_token');
  return token;
};

export const getLocalRefreshToken = () => {
  const refreshToken = localStorage.getItem('refresh_token');
  console.log('Get refresh token:', refreshToken); // Debug
  return refreshToken;
};

export const updateLocalAccessToken = (tokenData: any) => {
  localStorage.setItem('access_token', tokenData.access_token)

  // ⚠️ BẮT BUỘC lưu refresh_token mới
  if (tokenData.refresh_token) {
    localStorage.setItem('refresh_token', tokenData.refresh_token)
  }
}

// Hàm login nên lưu cả 2 tokens
export const setTokens = (tokenData: any) => {
  localStorage.setItem('access_token', tokenData.access_token);
  localStorage.setItem('refresh_token', tokenData.refresh_token);
};