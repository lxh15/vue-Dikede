import request from '@/utils/request'
/**
 *
 * @param {*} clientToken
 * @returns
 */
export const imageCode = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`
  })
}

/**
 *
 * @param {*} data
 * @returns
 */

export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data
  })
}
