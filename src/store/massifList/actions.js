import types from '@/store/constants/types'
import {get,post} from '@/network/request.js'

export default {
    [types.GET_MASSIFLIST] (context,payload){
        post('pc/v1/garden',payload).then(res => {
            res = res.data || {}
            context.commit(types.GET_MASSIFLIST,res)            
        })
    }
}