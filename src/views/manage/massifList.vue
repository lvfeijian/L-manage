<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name:'massifList',
    methods: {
        async getdata() {
            const res = await this.$get("pc/v1/home/count/waitProcess")
            console.log(res);
        }
    },
    mounted() {
        this.getdata()
    },
}
</script>
<style lang="scss">
    
</style>