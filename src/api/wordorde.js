// 工单管理
import request from '@/utils/request'

/**
 * 获取所有工单类型
 * @returns parmise
 */
export const getaskType = () => {
  return request({
    url: '/task-service/taskType/list',
  })
}

/**
 * 运营工单搜索
 * @param {Number} pageIndex 页数
 * @param {Number} pageSize  一页的数量
 * @param {Boolean} isRepair 是否为维修工单
 * @returns paramise
 */
export const searchBusiness = (params) => {
  return request({
    url: '/task-service/task/search',
    params,
  })
}
/**
 * 运维工单搜索
 * @param {Number} pageIndex 页数
 * @param {Number} pageSize  一页的数量
 * @param {Boolean} isRepair 是否为维修工单
 * @returns paramise
 */
export const searchOperation = (params) => {
  return request({
    url: '/task-service/task/search',
    params,
  })
}
