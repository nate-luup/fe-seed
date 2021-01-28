// https://cloud.tencent.com/developer/article/1540087

import axios from 'axios'
import {
  showSessionExpiredModal,
  showServerInternalErrorModal,
  redirectTo404Page,
  redirectTo502Page,
} from './http.component'

// Create axios instance
const axiosInst = axios.create({
  timeout: 50000,
  baseURL: '/api',
})
const TOKEN_KEY = 'USER_TOKEN'

// Setup reuest interceptor
axiosInst.interceptors.request.use(
  config => {
    // Add token to header
    const token = window.localStorage.getItem(TOKEN_KEY)

    if (token) {
      config.headers.common['Authorization'] = 'Bear ' + token
    }
    // TODO Setup request white list
    return config
  },
  err => {
    return Promise.reject(err)
  },
)
// Setup response interceptor
axiosInst.interceptors.response.use(
  async response => {
    const { status, data, config } = response
    const { code } = data
    switch (status) {
      case 500:
        showServerInternalErrorModal()
        break
      case 502:
        redirectTo502Page()
        break
      case 401:
        showSessionExpiredModal()
        break
      case 404:
        redirectTo404Page()
        break
      default:
        break
    }

    return data
  },
  err => {
    return Promise.reject(err)
  },
)

export default axiosInst
