import types from '@/store/constants/types'

export default {
    [types.SET_TOKEN](state, userData) {
        state.account = userData.account;
        state.token = userData.token;
        sessionStorage.setItem("account", userData.account);
        sessionStorage.setItem("token", userData.token);
    },
    [types.DEL_TOKEN](state) {
        state.token = "";
        sessionStorage.removeItem("token");
    },
    [types.SET_PROGRESS](state, progress) {
        state.progress = progress;
    }
}