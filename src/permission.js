import router from './router'
import store from './store'

// 设置白名单
const list = ['/login', '/404']
// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  // 判断有没有token
  const token = store.state.user.token
  if (token) {
    // 初始值为空   判断roleName是否存在
    if (!store.state.user.userInfo.roleName) {
      store.dispatch('user/getUserInfo')
    }
    //   有token 要去登录页 不让去 到首页
    if (to.path === '/login') return next('/')
    // 不去登录页就放行
    next()
  } else {
    //   没有token
    const isCludes = list.includes(to.path)
    //  看去的路径在白名单里没有 取反  就不去白名单里面的 跳到登录
    if (!isCludes) return next('/login')
    //   去白名单就放行
    next()
  }
})
