// import axios from 'axios'

// export function request(config){
//     const instance = axios.create({
//         baseURL: "http://152.136.185.210:8000/api/n3",
//         // timeout: 5000
//     })
//     return instance(config)
// }
import axios from 'axios';
import router from '../router'
import store from '../store'
const Qs = require('qs')

// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://testorchdbs.yufengtek.com/orchard/pc/api/';
//axios.defaults.baseURL = 'http://113.194.80.54:90/orchard/pc/api/';
axios.defaults.baseURL = '/orchard/pc/api/';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
//http request 拦截器
axios.interceptors.request.use(
    config => {
        const token = localStorage['token'];
        config.data = config.data;
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(err)
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.status == "999007") {
            alert('用户已经在其他地方登录')
            router.push({
                path: "/login",
                querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
            })
            localStorage.removeItem('token');
        }
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, Qs.stringify(data))
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
    })
}


export function json(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } })
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
    })
}
export function form(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {})
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, Qs.stringify(data))
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function dell(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            params: params
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function download(url) {
    return axios({
        method: 'get',
        url: url,
        responseType: 'arraybuffer'
    }).then(res => {
        return res.data
    })
}

export function upFile(url, data) {
    return axios(
        {
            url: url,
            method: 'post',
            data: data,
            timeout: 0,
            onUploadProgress: function (progressEvent) {
                store.commit('setProgress', parseInt(progressEvent.loaded / progressEvent.total * 100))
            }
        }
    )
}
