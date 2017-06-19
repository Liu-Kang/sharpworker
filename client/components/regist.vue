<template>
	<div class="regist-container">
		<div class="regist-box">
			<h1 class="regist-title">Regist</h1>
			<input type="text" placeholder="用户名">
                  <el-radio class="radio" v-model="radio" label="1">男</el-radio>
                  <el-radio class="radio" v-model="radio" label="2">女</el-radio>
			<input type="password" placeholder="密码">
                  <input type="password" placeholder="再次输入密码">
			<a href="javascript:;" class="do-regist">注册</a>
                  <router-link class="go-login" :to="{name: 'login'}">登录</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
                  return {
                        radio: '1'
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
		height: 170px;
		background-color: rgba(255,255,255,.2);
		border-radius: 3px;
		padding: 30px 25px;
      	position: absolute;
      	top: 50%;
      	left: 50%;
      	margin-top: -90px;
      	margin-left: -165px;
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
      .do-regist{
      	.btn();
      	height: 40px;
      	line-height: 40px;
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