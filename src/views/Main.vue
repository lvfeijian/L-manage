<template>
    <el-container class="home-container">
        <!-- header -->
        <el-header>
            <img src="@/assets/logo.svg" alt="">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }" v-for='item in this.$route.matched'>{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="icon">
                <i class="el-icon-refresh"></i>
                <i class="el-icon-full-screen"></i>
                <el-button @click='signOut'>
                    退出
                </el-button>
            </div>

        </el-header>
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '64px'  :  '260px'">
                <div @click="toggleCollapse" class="toggle-collapse">|||</div>
                <el-menu background-color='#007766' text-color='#ccc' active-text-color='#fff'
                    unique-opened :collapse="isCollapse" :collapse-transition="false" router>
                    <template  v-for='(item,index) in menuList'>
                        <el-submenu :index="index+''" :key='item.id' v-if='!item.isHide'>
                            <template slot="title">
                                <i :class="iconFont[item.id]"></i>
                                <span style='margin-left: 8px;'>{{item.authName}}</span>
                            </template>
                            <el-menu-item :index="v.path" v-for='(v,i) in item.children' :key='v.id'  v-if='!item.isHide'>
                                <span>{{v.authName}}</span>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index='item.children[0].path'>
                            <i :class="item.iconcls"></i>
                            <span>{{item.children[0].name}}</span>
                        </el-menu-item>
                    </template>
                    
                </el-menu>



            </el-aside>

            <!-- 主体区域 -->
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>





    </el-container>
</template>

<script>
    import types from '@/store/constants/types'
    import ns from     '@/store/constants/types'
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        computed: {
            ...mapState(['menuList'])
        },
        components: {},
        created() {
            this.$store.dispatch(types.GET_MENU_LIST)
        },
        data() {
            return {
                //没有给接口的时候自定义左侧菜单栏数据
                routes: [
                    {
                        name: '首页',
                        path: '/',
                        iconcls: 'el-icon-s-home',
                        isHide:true,
                        children:[
                            {
                                path:'/home',
                                name:'首页'
                            }
                        ]
                    },
                    {
                        name: '果园管理',
                        iconcls: 'el-icon-menu',
                        path: '/',
                        children: [
                            {
                                path: '/orchard',
                                name: '果园列表'
                            },
                            {
                                path: '/massif',
                                name: '地块列表'
                            }
                        ]
                    },
                    {
                        name: '农事活动',
                        iconcls: 'el-icon-s-custom',
                        children: [
                            {
                                path: '/nsjl',
                                name: '农事记录'
                            },
                            {
                                path: '/zzjl',
                                name: '种植记录'
                            },
                            {
                                path: '/czjl',
                                name: '采摘记录'
                            }
                        ]
                    }
                ],
                isCollapse: false,//左侧菜单栏展开关闭切换，默认展开
                iconFont:{
                    125:'iconfont icon-RectangleCopy',
                    103:'iconfont icon-quanxianguanli',
                    101:'iconfont icon-shangpinguanli',
                    102:'iconfont icon-dingdanguanli',
                    145:'iconfont icon-shujutongji'
                }
            }
        },
        mounted() {
            
        },
        methods: {
            //退出登录
            signOut() {
                this.$store.commit(types.DEL_TOKEN)
                this.$router.push('/login')
            },
            //展开和折叠的切换按钮
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            }
        },
    }
</script>
<style lang="scss" scoped>
    .home-container {
        height: 100vh;
        width: 100vw;
        overflow: hidden;

        .el-header {
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .icon {
                width: 12vw;
                height: 100%;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: space-around;

                i {
                    font-size: 20px;

                    &:hover {
                        color: #3a8ee6;
                    }
                }
            }
        }

        .el-aside {
            background-color: #007766;
            .el-menu{
                border-right: none;
            }
            .toggle-collapse{
                letter-spacing: 3px;
                color:#ccc;
                text-align:center;
                cursor: pointer;
                margin: 10px 0;
            }
        }
    }
</style>