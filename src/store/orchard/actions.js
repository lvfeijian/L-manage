import types from '@/store/constants/types'
import axios from '@/lib/ajax'

export default {
    //获取所有角色列表的数据
    [types.GET_ROLE_LIST] (context){
        axios({
            method:'get',
            url:'roles',
        }).then(res => {
            if(res.meta.status === 200){
                context.commit(types.GET_ROLE_LIST,res.data)
            }
        })
    }
}