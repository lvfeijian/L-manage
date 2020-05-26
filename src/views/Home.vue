<template>
    <div class="home">
        home
        {{this.$store.state.account}}
        {{this.$store.state.token}}
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        created() {

        },
        data() {
            return {
            }
        },
    }
</script>
<style lang="scss" scoped>

</style>