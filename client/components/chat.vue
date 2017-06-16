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