import actions from './actions'
import mutations from './mutations'

export default{
    namespaced:true,
    state:{
        getUserList:[],//用户列表
        queryInfo:{
            query:'',
            pagenum:1,
            pagesize:1
        },
        total:null
    },
    actions,
    mutations
}