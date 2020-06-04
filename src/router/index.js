import Vue from 'vue'
import VueRouter from 'vue-router'

//解决Vue中重复点击相同路由控制台报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue')
    },
    {
        path: '/home',
        name: '首页',
        component: () => import('@/views/Main.vue'),
        redirect:'/welcome',
        children:[
            {
                path:'/welcome',
                name: '欢迎界面',
                component:() => import('@/views/home/Welcome.vue')
            },
           
        ]
    },
    {
        path: '/home',
        name: '果园管理',
        component: () => import('@/views/Main.vue'),
        children:[
            {
                path:'/massifList',
                name: '果园列表',
                component:() => import('@/views/manage/massifList.vue')
            },
            {
                path:'/orchardList',
                name: '地块列表',
                component:() => import('@/views/manage/orchardList.vue')
            }
        ]
    }
    
]

const router = new VueRouter({
    routes,
    mode: "hash"
})
// //路由导航守卫
// router.beforeEach((to,from,next) => {
//     if(to.path === '/login' || to.path === '/404') return next()
//     const token = window.sessionStorage.getItem('token')
//     console.log(token)
//     if(!token)
//     return next('/login')
//     next()
// })
export default router
