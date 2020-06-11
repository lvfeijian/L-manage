import types from '@/store/constants/types'

export default {
    [types.GET_ROLE_LIST] (state,payload){
        state.rolelist = payload
    }
}