<template>
  <div id="app">
    <transition name="slidein">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import UserModel from './model/user'
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    created() {
      UserModel.getIndex().then(data => {
        if (data.code === 0) {
            if (data.user) {
              this.setUser(data.user)
              this.$router.push({name: 'chat'})
            } else {
              this.$router.push({name: 'login'})
            }
        } else {
            this.$message.error(data.msg)
        }
      })
    },
    methods: {
      ...mapActions([
        'setUser'
      ]),
    }
  }
</script>

<style lang="less">
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
