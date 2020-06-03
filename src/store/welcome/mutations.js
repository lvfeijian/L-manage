import types from '@/store/constants/types'

export default {
    [types.GET_WELCOME](state,payload){
        state.datalist = payload
    },
    [types.GET_WELCOME_CHART](state,payload){
        state.datachart = payload        
    }
}