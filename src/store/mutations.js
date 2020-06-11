import types from '@/store/constants/types'

export default {
    [types.SET_TOKEN](state, userLoginInfo) {
        state.username = userLoginInfo.username
        state.token = userLoginInfo.token
        sessionStorage.setItem('username', userLoginInfo.username)
        sessionStorage.setItem('token', userLoginInfo.token)
    },
    [types.DEL_TOKEN](state) {
        state.token = "";
        sessionStorage.removeItem("token");
    },
    [types.GET_MENU_LIST](state,payload){
        state.menuList = payload
    }

}