<template>
    <div class="chart">
        <div ref='mychart' style="width:100%; height:400px;"></div>
    </div>
</template>

<script>
import echarts from '@/lib/echarts'
export default {
    name: 'Chart',
    props:{
        data:{
            type:Object,
            default(){
                return {
                    count:[],
                    time:[]
                }
            }
        }
    },
    data(){
    },
    methods: {
        drawChart(){
            let option = {
                xAxis: {
                    type: 'category',
                    data: this.data.time
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data:this.data.count,
                    type: 'line',
                    smooth: true
                }]
            };
            this.chart  = echarts.init(this.$refs.mychart)
            this.chart.setOption(option)
        }
    },
    mounted() {
        this.drawChart()
        window.addEventListener("resize",() => {
            this.chart.resize()
        })
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss">
.chart{

}
</style>