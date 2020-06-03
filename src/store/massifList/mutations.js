import types from '@/store/constants/types'

export default {
    [types.GET_MASSIFLIST] (state,payload) {
        state.massifDate = payload
    }
}