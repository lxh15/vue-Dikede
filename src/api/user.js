import request from '@/utils/request'
/**
 * 验证码的接口
 * @param {Number} clientToken  随机数
 * @returns parmise
 */
export const imageCode = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`
  })
}

/**
 * 登录接口
 * @param {Object} data 登陆所需的基本信息
 * @returns parmise
 */

export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data
  })
}

/**
 * 获取用户基本信息
 * @param {Object} id  用户的id
 * @returns  parmise
 */
export const getBaseuser = (id) => {
  return request({
    url: '/user-service/user/' + id
  })
}
