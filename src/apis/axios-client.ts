import axios from 'axios'
import HttpStatusCode from '@/utils/constants/htpp'
import {
  getLocalAccessToken,
  getLocalRefreshToken,
  updateLocalAccessToken,
} from '@/utils/hooks/authHook'

const baseURL = import.meta.env.VITE_API_APP || window.location.origin

const axiosClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

const refreshClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any, token: string | null) => {
  failedQueue.forEach((p) =>
    error ? p.reject(error) : p.resolve(token),
  )
  failedQueue = []
}

const logout = () => {
  localStorage.clear()
  window.location.href = '/'
}

/* ================= REQUEST ================= */
axiosClient.interceptors.request.use((config) => {
  const token = getLocalAccessToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

/* ================= RESPONSE ================= */
axiosClient.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    const original = error.config

    if (error.response?.status !== HttpStatusCode.Unauthorized) {
      return Promise.reject(error)
    }

    if (original._retry) {
      return Promise.reject(error)
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token: string) => {
            original.headers.Authorization = `Bearer ${token}`
            resolve(axiosClient(original))
          },
          reject,
        })
      })
    }

    original._retry = true
    isRefreshing = true

    try {
      const refreshToken = getLocalRefreshToken()
      if (!refreshToken) throw new Error('No refresh token')

      const res = await refreshClient.post(
        '/api/noauth/refresh_token',
        { refresh_token: refreshToken },
      )

      updateLocalAccessToken(res.data)

      processQueue(null, res.data.access_token)

      original.headers.Authorization = `Bearer ${res.data.access_token}`
      return axiosClient(original)

    } catch (err) {
      processQueue(err, null)
      logout()
      return Promise.reject(err)

    } finally {
      isRefreshing = false
    }
  },
)

export default axiosClient
