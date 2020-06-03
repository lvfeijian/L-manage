import types from '@/store/constants/types'
import axios from '@/lib/ajax'
export default {
    [types.GET_WELCOME](context) {
        axios({
            method:'get',
            url:'pc/v1/home/count/waitProcess',
        }).then(res => {
            console.log(res);
            res = res.data || {}
            context.commit(types.GET_WELCOME, res)
        })
    },
    [types.GET_WELCOME_CHART](context) {
        axios({
            url:'pc/v1/home/count/dataPreview'
        }).then(res => {
            res = res.data || {}
            let data = { count: [], time: [] }
            res.forEach(item => {
                data.count.push(item.count)
                data.time.push(item.date)
            });
            context.commit(types.GET_WELCOME_CHART, data)
        })
    }
}