import { login } from '@/api/user'
import router from '@/router/index.js'
import { getBaseuser } from '@/api/user'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: JSON.parse(localStorage.getItem('vuex.user.token')) || '',
    loginFrom: {},
    userInfo: {
      roleName: ''
    }
  },

  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    // setLoginFrom(state, payload) {
    //   state.loginFrom = payload
    // },
    // 记录用户基本信息
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    logout(state) {
      state.userInfo = { roleName: '' }
      state.token = ''
    }
  },
  actions: {
    // 获取token
    async getToken(context, loginFrom) {
      const { data } = await login(loginFrom)
      console.log(data)
      // 添加token并跳转
      if (data.success == true || data.msg == '登陆成功') {
        context.commit('setUserInfo', data)
        context.commit('setToken', data.token)
        setTokenTime() // 存入token的时间戳
        router.push({ path: './' })
      }
    },
    // 获取用户数据
    async getUserInfo(context) {
      // console.log(context.state.loginFrom)
      const { data } = await getBaseuser(context.state.userInfo.userId)
      console.log(data)
      context.commit('setUserInfo', data)
    },
    // 退出登录
    logout(context) {
      context.commit('logout')
    }
  }
}
