import axios from 'axios'
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
    const { data, config } = response

    if (data.code === 404) {
      alert(404)
    } else if (data.code === 500) {
      alert(500)
    }
    return data
  },
  err => {
    return Promise.reject(err)
  },
)

export default axiosInst
