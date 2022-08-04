// 引入api
import { searchBusiness, searchOperation } from '@/api/wordorde'
export default {
  namespaced: true,
  state: {
    businessList: [],
    OperationList: [],
  },
  mutations: {
    setBusinessList(state, payload) {
      state.businessList.push(...payload)
    },
    setOperateList(state, payload) {
      state.OperationList.push(...payload)
    },
  },
  actions: {
    // 获取运营工单
    async getBusinessList({ commit }, payload) {
      console.log(1)
      // state.replenishment.pageIndex++
      const { data } = await searchBusiness(payload)
      commit('setBusinessList', data.currentPageRecords)
      console.log(data.currentPageRecords)
    },
    // 获取运维工单
    async getOperationList({ commit }, payload) {
      const { data } = await searchOperation(payload)
      commit('setOperateList', data.currentPageRecords)
      console.log(data.currentPageRecords)
    },
  },
}
