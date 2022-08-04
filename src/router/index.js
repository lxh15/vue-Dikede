import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '帝可得', icon: 'home' }
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    meta: { title: '工单管理', icon: 'gongdan' },

    children: [
      {
        path: 'business',
        name: 'business',
        component: () => import('@/views/workorder'),
        meta: { title: '运营工单' }
      },
      {
        path: 'operation',
        name: 'Operation',
        component: () => import('@/views/workorder'),
        meta: { title: '运维工单' }
      }
    ]
  },
  {
    path: '/node',
    component: Layout,
    children: [
      {
        path: 'region',
        component: () => import('@/views/pointposition'),
        meta: { title: '点位管理', icon: 'dianwei' }
      }
    ]
  },
  {
    path: '/vm',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/equipment/index'),
        meta: { title: '设备管理', icon: 'shebei' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/personnel/index'),
        meta: { title: '人员管理', icon: 'renyuan' }
      }
    ]
  },
  {
    path: '/sku',
    component: Layout,
    children: [
      {
        path: 'sku-class',
        component: () => import('@/views/commodity/index'),
        meta: { title: '商品管理', icon: 'shangpin' }
      }
    ]
  },

  {
    path: '/policy',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/strategy/index'),
        meta: { title: '策略管理', icon: 'celue' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/order/index'),
        meta: { title: '订单管理', icon: 'dingdan' }
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/reconciliation/index'),
        meta: { title: '对账管理', icon: 'duizhang' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
