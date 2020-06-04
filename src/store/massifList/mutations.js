import types from '@/store/constants/types'

export default {
    [types.GET_MASSIFLIST] (state,payload) {
        state.massifDate = payload
    },
    [types.GET_GARDEN_LIST] (state,payload) {
        state.gardenDetail = payload
    }
}