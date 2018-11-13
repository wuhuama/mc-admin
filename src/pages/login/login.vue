<template>
    <div id='login-page' @keyup.enter='login'>
        <div class="login-form">
            <div class="input-group">
                <div class="title">登录</div>
                <el-input 
                :autofocus='true'
                placeholder="请输入用户名"
                icon='name'
                v-model="username"
                ></el-input>
            </div>
            <div class="input-group">
                <el-input
                placeholder="请输入密码"
                type="password"
                icon="time"
                v-model="password"
                ></el-input>
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
import { requestLogin } from '@/api/api'

export default {
    data () {
        return {
            username: 'nimda',
            password: '123456',
            remember: false,
            isBtnLoading: false,
            // btnText: '登录'
        }
    },
    computed: {
        btnText() {
            if (this.isBtnLoading) return '登录中...';
            return '登录';
        }
    },
    methods: {
        login () {
            if (!this.username) {
                this.$message.error('请填写用户名哦')
                return
            }
            if(!this.password) {
                this.$message.error('请填写密码')
                return
            }
            let loginParams = {username: this.username, password: this.password};
            this.isBtnLoading = true;
            requestLogin(loginParams).then(data => {
                this.isBtnLoading = false
                let { msg, code, user } = data
                if (code !== 200) {
                    this.$message.error(msg)
                }
                else {
                    localStorage.setItem('user', JSON.stringify(user))
                    if (this.$route.query.redirect) {
                        this.$router.push({path: this.route.redirect})
                    } else {
                        this.$router.push({ path: '/list' })
                    }
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
            button {
                width: 100%
            }
        }
    }
}
</style>

