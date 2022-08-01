import { login } from '@/api/user'
import router from '@/router/index.js'
export default {
  namespaced: true,
  state: {
    token: JSON.parse(localStorage.getItem('vuex.user.token')) || ''
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    // 获取token
    async getToken(context, loginFrom) {
      const { data } = await login(loginFrom)
      // console.log(data)
      // 添加token并跳转
      if (data.success == true || data.msg == '登陆成功') {
        context.commit('setToken', data.token)
        router.push({ path: './' })
      }
    }
  }
}
