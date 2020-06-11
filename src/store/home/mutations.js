import types from '@/store/constants/types'
export default {
    [types.GET_USER_LIST](state,paylaod){
        state.total = paylaod.total
        state.getUserList = paylaod.users
    },
    [types.CHANGE_CURRENT_PAGE](state,paylaod){
        state.queryInfo.pagenum = paylaod
    },
    [types.CHANGE_PAGE_SIZE](state,payload){
        state.queryInfo.pagesize = payload
    },
}