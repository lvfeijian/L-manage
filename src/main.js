import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/lib/element.js'                                                               /* 按需导入element-ui*/
import '@/assets/login/fonts/iconfont.css'                                  /**导入字体阿里图标库 */
import {get, post, put, dell, download, form,json, upFile} from './network/request'
import md5 from 'js-md5';
import axios from '@/lib/ajax.js'
Vue.config.productionTip = false
Vue.prototype.$md5 = md5;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$json = json;
Vue.prototype.$put = put;
Vue.prototype.$dell = dell;
Vue.prototype.$download = download;
Vue.prototype.$form = form;
Vue.prototype.$upFile = upFile;
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
