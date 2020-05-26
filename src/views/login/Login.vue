<template>
    <div id="login">
        <div class="left">
            <img src="@/assets/login/1.png" alt="">
        </div>
        <div class="right">
            <h1 class="tit">登录</h1>
            <el-form :model="loginForm" :rules="formRules" ref="ruleForm" class="demo-ruleForm" label-width='0px'
                status-icon>
                <el-form-item prop="user">
                    <el-input v-model="loginForm.user" placeholder="账号" prefix-icon='el-icon-user' ref='user'
                        @keyup.enter.native="submit">
                    </el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input v-model="loginForm.pwd" placeholder="密码" prefix-icon='el-icon-lock' type='password'
                        ref='pwd' @keyup.enter.native="submit">
                    </el-input>
                </el-form-item>
                <el-button type="primary" @click="submit">登录</el-button>
                <el-button @click="resetForm">重置</el-button>
                <div class="remeber-pwd">
                    <el-checkbox v-model="checked">记住用户名和密码</el-checkbox>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
    import { isMobile } from '@/lib/validate'
    import types from '@/store/constants/types'
    export default {
        name: 'Login',
        data() {
            const validatePhone = (rule, value, callback) => {
                if (!isMobile(value)) {
                    callback(new Error('手机号码格式不正确!'))
                } else {
                    callback()
                }
            }
            return {
                checked: false,
                // 双向绑定
                loginForm: {
                    user: '',
                    pwd: ''
                },
                //验证规则
                formRules: {
                    user: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        // { required: true, trigger: 'blur', message: '手机号码格式错误', validator: validatePhone },
                    ],
                    pwd: [
                        { required: true, trigger: 'blur', message: '请输入密码' },
                        // { required: true, trigger: 'blur', message: '密码长度必须在8到18个字符', min: 8, max: 18 },
                    ]
                },

            }
        },

        methods: {
            //重置按钮
            resetForm() {
                this.$refs.ruleForm.resetFields()
            },
            //表单验证
            submit() {
                this.$refs.ruleForm.validate((valid) => {
                    if (!valid) return false;
                    this.login()
                })
            },
            //登录验证
            async login() {
                let data = {
                    userAccount: this.loginForm.user,
                    userPassword: this.$md5(this.loginForm.pwd),
                    type: 1
                }
                const res = await this.$post('pc/user/v1/login/pcpass', data)
                if (res.status == 200) {
                    this.$message.success("登录成功！")
                    let account = res.data.user.account
                    let token = res.data.user.authKey
                    this.$store.commit(types.SET_TOKEN,{ account, token })
                    this.$router.push('/home')
                } else {
                    this.$message.error("登录失败！")
                }
            }

        },

        mounted() {
            const user = this.loginForm.user
            const pwd = this.loginForm.pwd
            if (!user) {
                this.$refs.user.focus()
            } else if (!pwd) {
                this.$refs.pwd.focus()
            }
        },
    }
</script>
<style lang="scss" scoped>
    #login {
        display: flex;
        width: 1100px;
        height: 100vh;
        margin: auto;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-evenly;

        .left {
            width: 500px;
            height: 500px;
            background-color: #94f2e4;
            justify-content: center;
            align-items: center;
            display: -webkit-flex;
            display: flex;
        }

        .right {
            width: 400px;
            height: 500px;

            .tit {
                font-size: 24px;
                color: #06caac;
                margin-bottom: 60px;
            }

            .remeber-pwd {
                margin-top: 20px;
            }
        }
    }
</style>