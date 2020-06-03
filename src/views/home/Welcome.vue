<template>
    <div class="welcome-box">
        <el-row :gutter="20" style="height: 100%;">
            <el-col :span="15">
                <Quick></Quick>
            </el-col>
            <el-col :span="9">
                <TodoList :data='datalist' v-if="datalist.length"></TodoList>
            </el-col>
        </el-row>
        <div class="welcome-chart">
            <Chart :data='datachart' v-if="datachart.count.length && datachart.time.length"></Chart>
        </div>
    </div>
</template>

<script>
import mapState from 'vuex'
import types from '@/store/constants/types'
import ns from '@/store/constants/ns'
import Quick from './components/Quick'
import TodoList from './components/TodoList'
import Chart from './components/Chart'
import { createNamespacedHelpers } from 'vuex'
const nameSpaced = ns.WELCOME+'/'
const thisMapState = createNamespacedHelpers(nameSpaced).mapState

export default {
    name:'Welcome',
    components:{
        Quick,
        TodoList,
        Chart
    },
    computed: {
        ...thisMapState(['datalist','datachart']),
    },
    methods: {
    },
    created() {
        this.$store.dispatch(nameSpaced + types.GET_WELCOME)
        this.$store.dispatch(nameSpaced + types.GET_WELCOME_CHART)
    },
    mounted() {
    },
}
</script>
<style lang="scss">
.welcome-box{
    .welcome-chart{

    }

}
</style>