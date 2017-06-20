<template>
  <div id="app">
    <transition name="slidein">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import chat from './components/chat.vue'

  export default {
    data () {
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
    .slidein-enter{
      transform: translateX(200px);
      opacity: 0;
    }
    .slidein-enter-active{
      transition: all .8s cubic-bezier(.18, .60, .55, .80);
    }
  }
</style>
