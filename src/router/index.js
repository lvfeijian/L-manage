import Vue from 'vue'
import VueRouter from 'vue-router'

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
        name: 'Home',
        component: () => import('@/views/home/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: "hash"
})
//路由导航守卫
router.beforeEach((to,from,next) => {
    if(to.path === '/login' || to.path === '/404') return next()
    const token = window.sessionStorage.getItem('token')
    console.log(token)
    if(!token)
    return next('/login')
    next()

})
export default router
