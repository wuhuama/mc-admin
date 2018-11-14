<template>
    <div id='login-page' @keyup.enter='login'>
        <div class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules">
            <div class="input-group">
                <div class="title">登录</div>
                <el-input 
                :autofocus='true'
                placeholder="请输入用户名"
                icon='name'
                v-model="loginForm.username"
                ></el-input>
            </div>
            <div class="input-group">
                <el-input
                placeholder="请输入密码"
                type="password"
                icon="time"
                v-model="loginForm.password"
                ></el-input>
                <span class="show-pwd" @click="showPwd">
                    <svg-icon icon-class="eye" />>
                </span>
            </div>
            <div class="input-group">
                <label for="">记住我?</label>
                <el-switch
                v-model="remember"
                on-text=""
                off-text=""
                ></el-switch>
            </div>
            <div class="input-group">
                <el-button @click.native="login" type="primary" :loading="isBtnLoading">{{btnText}}</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { isvalidUsername } from '@/utils/validate'
import { requestLogin } from '@/api/api'

export default {
    name: 'Login',
    data () {
        const validateUsername = (rule, value, callback) => {
            if (!isvalidUsername(value)) {
                callback( new Error('请输入合法的昵称'))
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback( new Error('密码至少为6位字符'))
            } else {
                callback()
            }
        }
        return {
            loginForm:{
                username: 'admin',
                password: '123456',
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            passwordType: 'password',
            remember: false,
            isBtnLoading: false,
            redirect: undefined
        }
    },
    computed: {
        btnText() {
            if (this.isBtnLoading) return '登录中...';
            return '登录';
        }
    },
    watch: {
        $route: {
            handler: function (route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    methods: {
        showPwd() {
            if (this.passwordType === 'password') {
                this.password = ''
            } else {
                this.passwordType = 'password'
            }
        },
        login () {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.isBtnLoading = true;
                    this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
                        this.isBtnLoading = false
                        this.$router.push({ path: this.redirect || '/' })
                    }).catch(error => {
                        this.isBtnLoading = false
                    })
                } else {
                    console.log('登录失败')
                    return false
                }
            }) 
        }
    }
}
</script>
<style lang="scss" scoped>
#login-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efeeee;

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        height: 400px;
        border-radius: 10px;
        background-color: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0px 0px 25px #cac6c6;

        .title{
            color: #20a0ff;
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            line-height: 2.2;
            font-family: sans-serif;
        }
        
        .input-group{
            margin-top: 30px;
            width: 80%;
            position: relative;
            button {
                width: 100%
            }
            .show-pwd {
                position: absolute;
                right: 10px;
                top: 7px;
                font-size: 16px;
                color: #ccc;
                cursor: pointer;
                user-select: none;
            }
        }
    }
}
</style>

