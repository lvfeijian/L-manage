import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    account: sessionStorage.getItem('account'),
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
    progress: 0, // 上传进度
  },
  mutations,
  actions,
  modules,

})

