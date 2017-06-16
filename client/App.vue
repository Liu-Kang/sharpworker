<template>
  <div id="app">
    <chat v-if="isLogin"></chat>
    <login v-else></login>
  </div>
</template>

<script>
  import chat from './components/chat.vue'
  import login from './components/login.vue'

  export default {
    data() {
      return {
        isLogin: false
      }
    },
    components:{
      chat,
      login
    }
  }
</script>

<style lang="less">
  @import './style/common.less';
  #app {
    width: 100%;
    height: 100%;
    background: url(./assets/bg.jpg) no-repeat 50%;
    background-size: cover;
  }
</style>
