import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/lib/element'                                                               /* 按需导入element-ui*/
import '@/assets/fontIcon/iconfont.css'                                  /**导入字体阿里图标库 */
import md5 from 'js-md5';
import axios from '@/lib/ajax'
import {message} from '@/lib/utils'
Vue.config.productionTip = false
Vue.prototype.$md5 = md5;
Vue.prototype.$axios = axios;
Vue.prototype.$msg = message

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
