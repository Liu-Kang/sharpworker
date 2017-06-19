<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import chat from './components/chat.vue'

  export default {
    data() {
      return {
      }
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
