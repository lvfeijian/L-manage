import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/login/fonts/iconfont.css'
import {get, post, put, dell, download, form,json, upFile} from './network/request'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$json = json;
Vue.prototype.$put = put;
Vue.prototype.$dell = dell;
Vue.prototype.$download = download;
Vue.prototype.$form = form;
Vue.prototype.$upFile = upFile;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
