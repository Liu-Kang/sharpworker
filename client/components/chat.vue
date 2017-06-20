<template>
	<div class="chat-container">
      	<leftbox></leftbox>
      	<rightbox></rightbox>
    </div>
</template>

<script>
	import leftbox from './leftbox.vue'
	import rightbox from './rightbox.vue'

	export default {
		data() {
			return {
				login: true
			}
		},
		watch: {
			login() {
				if (!this.login) {
					this.$router.push({name: 'login'})
				}
			}
		},
		components:{
	    	leftbox,
	    	rightbox
	  	}
	}
</script>

<style lang="less">
	@import '../style/common.less';
	.chat-container{
      width: 1000px;
      height: 100%;
      margin: 0 auto;
      border-radius: 3px;
      overflow: hidden;
    }
</style>