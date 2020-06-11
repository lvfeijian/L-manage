import types from '@/store/constants/types'
import axios from '@/lib/ajax'

export default {
    [types.GET_USER_LIST] (context) {
        const that = this
        axios({
            method:'get',
            url:'users',
            data:context.state.queryInfo
        }).then(res => {
            console.log(res);
            res = res.data
            context.commit(types.GET_USER_LIST,res)
        })
    },
    [types.ADD_USER_LIST] (context,payload) {
        axios({
            method:'post',
            url:'users',
            data:payload
        }).then(res => {
            if(res.meta.status == 201){
                context.dispatch(types.GET_USER_LIST)
            }
        })
    }
}