<template>
    <div>
        <el-button type='primary' @click='addRoles'>添加角色</el-button>
        <el-table
            :data="rolelist"
            @selection-change="handleSelectionChange"
            style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column 
                type='index'
                label='序号'>
            </el-table-column>
            <el-table-column
                prop="id"
                label="id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="roleName"
                label="角色名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="roleDesc"
                label="角色描述"
                width="180">
            </el-table-column>
        </el-table>

        <!-- 添加角色对话框 -->
        <el-dialog
            title="添加角色"
            :visible.sync="dialogVisible"
            width="30%">
            <div v-for='item in multipleSelection'>
                {{item.id}}
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    import types from '@/store/constants/types'
    import ns from '@/store/constants/ns'
    import { createNamespacedHelpers } from 'vuex'
    const nameSpaced = ns.ORCHARD + '/'
    const thisMapState = createNamespacedHelpers(nameSpaced).mapState
    export default{
        name:'Orchard',
        computed: {
            ...thisMapState(['rolelist'])
        },
        data() {
            return {
                multipleSelection: [],//选中的多选框的数据
                dialogVisible:false,//角色列表提示框显示隐藏
            }
        },
        created() {
            this.$store.dispatch(nameSpaced + types.GET_ROLE_LIST)
        },
        methods: {
            //当多选框变化时触发
            handleSelectionChange(val){
                this.multipleSelection = val
            },
            
            //展示添加角色页面
            addRoles(){
                this.dialogVisible = true

            }
        },
        updated() {
            console.log(this.rolelist);
        },
    }
</script>

<style lang="scss">
    
</style>