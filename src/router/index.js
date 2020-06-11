import Vue from 'vue'
import VueRouter from 'vue-router'

//解决Vue中重复点击相同路由控制台报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/Main.vue'),
        redirect: '/users',
        children: [
            {
                path: '/users',
                name: 'home',
                component: () => import('@/views/home/Home.vue')
            },
            {
                path: '/roles',
                name: 'orchard',
                component: () => import('@/views/manage/Orchard.vue')
            },
            {
                path: '/rights',
                name: 'massif',
                component: () => import('@/views/manage/Massif.vue')
            },
            // {
            //     path: '/goods',
            //     name: 'goods',
            //     component: () => import('@/views/home/Home.vue')
            // },
            // {
            //     path: '/params',
            //     name: 'params',
            //     component: () => import('@/views/manage/Orchard.vue')
            // },
            // {
            //     path: '/categories',
            //     name: 'categories',
            //     component: () => import('@/views/manage/Massif.vue')
            // },
            // {
            //     path: '/orders',
            //     name: 'orders',
            //     component: () => import('@/views/manage/Massif.vue')
            // },
            // {
            //     path: '/reports',
            //     name: 'reports',
            //     component: () => import('@/views/manage/Massif.vue')
            // }
        ]
    },
    // {
    //     path: '/main',
    //     name: 'main',
    //     component: () => import('@/views/Main.vue'),
    //     children: [
    //         {
    //             path: '/orchard',
    //             name: 'orchard',
    //             component: () => import('@/views/manage/Orchard.vue')
    //         },
    //         {
    //             path: '/massif',
    //             name: 'massif',
    //             component: () => import('@/views/manage/Massif.vue')
    //         },
    //     ]
    // },

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
