import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    username: sessionStorage.getItem('username'),
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
    menuList:[],//左侧列表数据
  },
  mutations,
  actions,
  modules,

})

