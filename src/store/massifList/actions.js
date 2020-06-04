import types from '@/store/constants/types'
import {get,post} from '@/network/request'
import axios from '@/lib/ajax'
export default {
    //获取果园列表数据
    [types.GET_MASSIFLIST] (context,payload){
        axios({
            method:'post',
            url:'pc/v1/garden',
            data:payload
        }).then(res => {
            res = res.data || {}
            context.commit(types.GET_MASSIFLIST,res)            
        })
    },
    //添加果园列表数据
    [types.ADD_GARDEN_DATA] (context,payload){
        axios({
            method:'post',
            url:'pc/v1/garden/add',
            data:payload
        }).then(res => {
            console.log(res);
            
        })
    },
    [types.GET_GARDEN_LIST] (context,payload){
        axios({
            method:'get',
            url:'pc/v1/garden/' + payload,
        }).then(res => {
            res = res.data || {}
            context.commit(types.GET_GARDEN_LIST,res)            
        })
    }
    
}