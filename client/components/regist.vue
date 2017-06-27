<template>
	<div class="regist-container">
		<div class="regist-box">
			<h1 class="regist-title">Regist</h1>
			<input type="text" v-model.trim="username" placeholder="用户名">
			<input type="password" v-model.trim="password" placeholder="密码">
            <input type="password" v-model.trim="repassword" placeholder="再次输入密码">
            <div class="sex-pick">
                <el-radio class="radio" v-model="sex" label="1">男</el-radio>
                <el-radio class="radio" v-model="sex" label="0">女</el-radio>
            </div>
            <el-button type="primary" class="do-regist" @click="doRegist">注册</el-button>
            <router-link class="go-login" :to="{name: 'login'}">登录</router-link>
		</div>
	</div>
</template>

<script>
    import ChatModel from '../model'

    const model = new ChatModel()

	export default {
		data () {
            return {
                username: '',
                password: '',
                repassword: '',
                sex: '1'
            }
        },
        methods: {
            doRegist() {
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
                if(this.password.length < 6){
                    this.$message({
                        message: '密码长度至少6位',
                        type: 'warning'
                    })
                    return false
                }
                if(!this.repassword){
                    this.$message({
                        message: '请输入确认密码',
                        type: 'warning'
                    })
                    return false
                }
                if(this.repassword !== this.password){
                    this.$message({
                        message: '两次密码输入不一致',
                        type: 'warning'
                    })
                    return false
                }
                if(!this.sex){
                    this.$message({
                        message: '请选择性别',
                        type: 'warning'
                    })
                    return false
                }
                let params = {
                    username: this.username,
                    password: this.password,
                    sex: this.sex
                }
                let self = this
                model.doRegist(params).then(data => {
                    if (data.code === 0) {
                        self.$router.push({name: 'login'})
                        // self.$store.user.user.name = params.name
                    } else {
                        self.$message.error(data.msg)
                    }
                })
              }
        }
	}
</script>

<style lang="less">
	@import '../style/common.less';
	.regist-container{
        width: 100%;
        height: 100%;
        position: relative;
        .regist-box{
      		width: 280px;
      		background-color: rgba(255,255,255,.2);
      		border-radius: 3px;
      		padding: 30px 25px;
        	position: absolute;
        	top: 50%;
        	left: 50%;
        	margin-top: -170px;
        	margin-left: -165px;
            color: #fff;
        }
        .regist-title{
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
        .sex-pick{
            margin-bottom: 25px;
            .el-radio{
                color: #fff;
            }
        }
        .do-regist{
        	height: 40px;
            width: 100%;
        }
        .go-login{
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