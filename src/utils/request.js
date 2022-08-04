import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

import { getTokenTime } from '@/utils/auth'
import router from '@/router'
// create an axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      const tokenTime = getTokenTime()
      const currentTime = Date.now()
      const tokenTimeout = 2 * 60 * 60 * 1000
      if (currentTime - tokenTime > tokenTimeout) {
        console.log(2)
        store.dispatch('user/logout')
        router.push('/login')
        return Promise.reject(new Error('登陆过期'))
      }
    }
    config.headers['Authorization'] = store.state.user.token

    return config
  },
  (error) => {
    console.log(error)
  }
)
// 响应拦截器
request.interceptors.response.use(
  // 响应成功做点什么
  (res) => {
    const { message } = res.data
    if (res.status || res.msg) {
      return res
    }
    Message.error(message)
    return Promise.reject(new Error(message))
  },
  // 响应失败做点什么

  (error) => {
    if (error?.response?.status === 401) {
      Message.error('登陆过期')
      store.dispatch('user/logout')
      router.push('/login')
    } else {
      Message.error(error.message)
    }
    return Promise.reject(error)
  }
)

export default request
