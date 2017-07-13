<template>
  <div id="app">
    <transition name="slidein">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import ChatModel from './model'

  export default {
    data() {
      return {
      }
    },
    created() {
      ChatModel.getIndex().then(data => {
        if (data.code === 0) {
            if (Object.keys(data.user).length) {
              this.$router.push({name: 'chat'})
            } else {
              this.$router.push({name: 'login'})
            }
        } else {
            this.$message.error(data.msg)
        }
      })
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
