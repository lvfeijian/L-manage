<template>
    <div id="app">
        <transition mode="out-in" appear>
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        font-family: '微软雅黑';
    }

    body {
        box-sizing: border-box;
        font-size: 16px;
    }

    .v-enter,
    .v-leave-to {
        transform: translateX(-100px);
        opacity: 0;
    }

    .v-leave,
    .v-enter-to {
        transform: translateX(0px);
        opacity: 1;
    }

    .v-mode {
        transition: .3s;
    }

    .v-leave-active {
        position: absolute;
        transition: all .3s ease;
    }

    .v-enter-active {
        transition: all .3s ease;
    }
</style>