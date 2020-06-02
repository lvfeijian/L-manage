<template>
    <div>
        <!-- {{$store.state.welcome.datalist}} -->
        {{datalist}}
        <img :src="datalist[4].img" alt="">
    </div>
</template>

<script>
import mapState from 'vuex'
import types from '@/store/constants/types'
import ns from '@/store/constants/ns'
import { createNamespacedHelpers } from 'vuex'
const nameSpaced = ns.WELCOME+'/'
const thisMapState = createNamespacedHelpers(nameSpaced).mapState

export default {
    name:'Welcome',
    computed: {
        ...thisMapState(['datalist']),
        // ...mapState(['token'])
    },
    methods: {
    },
    created() {
        this.$store.dispatch(nameSpaced + types.GET_WELCOME)
    },
    mounted() {
    },
}
</script>
<style lang="scss">
    
</style>