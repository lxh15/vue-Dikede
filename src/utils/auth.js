import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 记录token存入的时间 方便判断token过期时间
export const setTokenTime = () => {
  Cookies.set('tokenTime', Date.now())
}
// 获取tokenTime时间
export const getTokenTime = () => {
  return Cookies.get('tokenTime')
}
