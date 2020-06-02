/** ajax 基于axios */
import axios from 'axios'
import store from '@/store/index'
import types from '@/store/constants/types'

const Qs = require('qs')
axios.defaults.baseURL = '/orchard/pc/api/';

// 请求发送之前的拦截器
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 请求响应拦截器
axios.interceptors.response.use(res => {
    return Promise.resolve(res)
}, error => {
    return Promise.reject(error)
})

export default function (options) {
    if (/post/i.test(options.method) && !options.headers) {
        options.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        options.data = Qs.stringify(options.data)
    }
    if (/get/i.test(options.method) && !options.headers) {
        options.url += ('?' + Qs.stringify(options.data))
    }
    if (!/json/.test(options.url) && !options.url.startsWith('http')) {
        options.url = config.baseUrl + options.url
    }
    return new Promise((resolve, reject) => {
        axios.request(options).then(res => {
            const resData = res.data
            if (resData.status == '206' && resData.msg == '返回登陆页面') {
                const currRouter = store.state.currRouter
                if (currRouter.to != 'login') {
                    currRouter.instance.push({ name: 'login' })
                }
            }
            resolve(res.data)
        }, error => {
            reject(error)
        })
    })
}
