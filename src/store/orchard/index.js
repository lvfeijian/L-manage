import actions from './actions'
import mutations from './mutations'

export default{
    namespaced:true,
    state:{
        rolelist:[],//所有角色用户列表数据
    },
    actions,
    mutations
}