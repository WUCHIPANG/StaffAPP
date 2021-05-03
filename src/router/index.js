import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: "/Login",
      name: 'Login',
        component: resolve =>
            require(["@/views/Login"], resolve)
    },
    {
      path: '/',
      redirect: '/waitingtask',
      name: '首頁',
      meta: {
          requireAuth: true,
         },
      component: resolve => require(['@/containers/TheContainer'], resolve),

      children: [

        {
          path: 'waitingtask',
          name:'待接派單',
          component: resolve => require(['@/views/WaitingTask'], resolve)
        },
         {
          path: 'account',
          name: '帳號資訊',
          component: resolve => require(['@/views/staff/Account'], resolve)
        },
        {
          path: 'currentlytask/:num',
          name: '當前派單',
          component: resolve => require(['@/views/staff/CurrentlyTask'], resolve)
        },
        {
          path: 'currentlytask',
          name: '當前派單',
          component: resolve => require(['@/views/staff/CurrentlyTask'], resolve)
        },
        {
          path: 'interrupt',
          name: '中斷/異常通報',
          component: resolve => require(['@/views/staff/Interrupt'], resolve)
        },
        {
          path: 'historytask',
          name: '歷史接單',
          component: resolve => require(['@/views/staff/HistoryTask'], resolve)
        },
        {
          path: 'attendance',
          name: '出勤紀錄',
          component: resolve => require(['@/views/staff/Attendance'], resolve)
        },
        {
          path: 'notice',
          name: 'Notice',
          component: resolve => require(['@/views/staff/Notice'], resolve)
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: resolve => require(['@/views/pages/Page404'], resolve)
        },
        {
          path: '500',
          name: 'Page500',
          component: resolve => require(['@/views/pages/Page500'], resolve)
        },
        {
          path: 'register',
          name: 'Register',
          component: resolve => require(['@/views/pages/Register'], resolve)
        }
      ]
    }
  ]
}

// 要打開(暫時)
router.beforeEach((to, from, next) => {
   const token = window.sessionStorage.getItem('user')
  if (to.matched.some(res => res.meta.requireAuth)) { // 判斷該路由是否需要登入許可權
    // console.log('token',token)
    if (token) { // 取當前的token是否存在
      // store.dispatch('token', token)
      next();
    }
    else {
      next(
        {
          name: 'Login'
          // path: '/login',
          // query: {redirect: to.fullPath} // 將跳轉的路由path作為引數，登入成功後跳轉到該路由
        })
    }
  }
  else {
    next();
  }
});
export default router;