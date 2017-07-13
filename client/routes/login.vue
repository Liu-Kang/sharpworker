<template>
	<div class="login-container">
		<div class="login-box">
			<h1 class="login-title">Login</h1>
			<input type="text" v-model.trim="username" placeholder="用户名">
			<input type="password" v-model.trim="password" placeholder="密码">
            <el-button type="primary" class="do-login" @click="doLogin" @keyup.13="doLogin">登录</el-button>
            <router-link class="go-regist" :to="{name: 'regist'}">注册</router-link>
		</div>
	</div>
</template>

<script>
    import ChatModel from '../model'
    
	export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        mounted() {
            const self = this
            document.onkeydown = function(event) {
                if (event.which === 13) {
                    self.doLogin()   
                }
            }
        },
		methods: {
            doLogin() {
                if(!this.username){
                    this.$message({
                        message: '请输入用户名',
                        type: 'warning'
                    })
                    return false
                }
                if(!this.password){
                    this.$message({
                        message: '请输入密码',
                        type: 'warning'
                    })
                    return false
                }

                let params = {
                    username: this.username,
                    password: this.password
                }
                ChatModel.doLogin(params).then(data => {
                    if (data.code === 0) {
                        this.$router.push({name: 'chat'})
                    } else {
                        this.$message.error(data.msg)
                    }
                })
            }
        }
	}
</script>

<style lang="less">
	@import '../style/common.less';
	.login-container{
        width: 100%;
        height: 100%;
        position: relative;
        .login-box{
            width: 280px;
      		height: 170px;
      		background-color: rgba(255,255,255,.2);
      		border-radius: 3px;
      		padding: 30px 25px;
        	position: absolute;
        	top: 50%;
        	left: 50%;
        	margin-top: -85px;
        	margin-left: -165px;
        }
        .login-title{
        	width: 330px;
        	position: absolute;
        	top: -60px;
        	left: 0;
        	text-align: center;
        	color: #fff;
        	font-size: 30px;
        	text-shadow: 0 1px 4px rgba(0,0,0,.2);
        	font-weight: 700;
        }
        input{
            margin-bottom: 25px;
        	background: rgba(45,45,45,.15);
            border: 1px solid rgba(255,255,255,.15);
            box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        	color: #fff;
        }
        .do-login{
        	height: 40px;
            width: 100%;
        }
        .go-regist{
            width: 330px;
            display: block;
            text-align: center;
            height: 40px;
            line-height: 40px;
            position: absolute;
            bottom: -60px;
            left: 0;
        }
    }
</style>