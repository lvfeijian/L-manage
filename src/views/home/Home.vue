<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容" style="width: 200px;margin-right: 20px;"></el-input>
        <el-button type='primary'>搜索</el-button>
        <el-button type='primary' @click='showAddUser'>添加用户</el-button>
        <el-table
            :data="getUserList"
            style="width: 100%">
            <el-table-column
                prop="username"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"
                width="180">
            </el-table-column>
            <el-table-column
                prop="mobile"
                label="电话"
                width="180">
            </el-table-column>
            <el-table-column
                prop="role_name"
                label="角色"    
                width="180">
            </el-table-column>
            <el-table-column
                label="状态"
                width="180">
                <!-- 作用域插槽 -->
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.mg_state">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <el-tooltip class="item" effect="dark" content="修改" placement="top" :enterable='false'>
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="分享" placement="top" :enterable='false'>
                    <el-button type="danger" icon="el-icon-share"></el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="删除" placement="top" :enterable='false'>
                    <el-button type="primary" icon="el-icon-delete"></el-button>
                </el-tooltip>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-sizes="[1,2]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
        <!-- 添加用户的对话框 -->
        <el-dialog
            title="添加角色"
            :visible.sync="addRoleDialogVisible"
            width="40%">
            <!-- 内容主体区域 -->
            <el-form :model="rolesRuleForm" :rules="rolesRules" ref="rolesRuleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="rolesRuleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="rolesRuleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="rolesRuleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="rolesRuleForm.mobile"></el-input>
                </el-form-item>
                  
            </el-form>
            <!-- 底部区域 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="addRoleDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="addUser">添加</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import types from '@/store/constants/types'
import ns from '@/store/constants/ns'
import { createNamespacedHelpers } from 'vuex'
const nameSpaced = ns.HOME + '/'
const thisMapState = createNamespacedHelpers(nameSpaced).mapState
export default{
    computed: {
        ...thisMapState(['getUserList','queryInfo','total'])
    },
    data(){
        return{
            input:'',
            // value: true,
            addRoleDialogVisible:false,//控制添加角色对话框的显示隐藏，默认false隐藏
            rolesRuleForm:{//添加角色的表单信息
                username:'lfj',
                password:'123',
                email:'',
                mobile:''
            },
            rolesRules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    created() {
        this.$store.dispatch(nameSpaced + types.GET_USER_LIST)
    },
    methods: {
        //当前页码发生改变
        handleCurrentChange(val){
            this.$store.commit(nameSpaced + types.CHANGE_CURRENT_PAGE,val)
        },
        //每页的数据个数改变
        handleSizeChange(val){
            this.$store.commit(nameSpaced + types.CHANGE_PAGE_SIZE,val)
        },
        //显示添加用户列表
        showAddUser(){
            this.addRoleDialogVisible = true
        },
        //添加用户
        addUser(){
            this.$refs.rolesRuleForm.validate((valid) => {//校验规则
                if(valid){
                    this.$store.dispatch(nameSpaced + types.ADD_USER_LIST,this.rolesRuleForm)
                    this.$message.success('添加用户成功')
                    this.addRoleDialogVisible = false
                } else {
                    this.$message.success('添加用户失败')
                }
            })
            
        }
    },
    updated() {
        console.log('123');
    },
}
</script>

<style lang="scss">
    
</style>