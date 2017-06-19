<template>
	<div class="login-container">
		<div class="login-box">
			<h1 class="login-title">Login</h1>
			<input type="text" placeholder="用户名">
			<input type="password" placeholder="密码">
			<a href="javascript:;" class="do-login">登录</a>
                  <router-link class="go-regist" :to="{name: 'regist'}">注册</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		
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
      	.btn();
      	height: 40px;
      	line-height: 40px;
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