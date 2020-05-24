<template>
    <div class="home">
        hoem
        {{currTime  |  FormatDate}}
    </div>
</template>

<script>
    import { FormatDate } from '@/lib/utils'
    export default {
        name: 'Home',
        components: {},
        created() {
            setInterval(() => {
                this.currTime = FormatDate(new Date())
            },1000)
        },
        data(){
            return {
                currTime:''
            }
        },
    }
</script>
<style lang="scss" scoped>
    
</style>