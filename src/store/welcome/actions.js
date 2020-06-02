import types from '@/store/constants/types'
import ajax from '@/lib/ajax'
import {get} from '@/network/request.js'
export default{
    [types.GET_WELCOME] (context) {
        get("pc/v1/home/count/waitProcess").then(res => {
            res = res.data || {}
            context.commit(types.GET_WELCOME,res)
        })
    }
}