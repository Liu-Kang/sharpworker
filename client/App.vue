<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  components:{
    Login,
    ChatHeader,
    MemberList,
    ChatList,
    ChatSend
  },
  data(){
    return {
      contentStyle:{
        height:'0px'
      }
    }
  },
  mounted(){
    this.contentStyle.height = `${document.documentElement.clientHeight - 50}px`;
  },
  computed:{
    ...mapState({
      user:state => state.user.user,
      doLogin:state => state.user.doLogin
    }),
    ...mapGetters([
      'isLogin'
    ])
  }
}
</script>

<style lang="less">
  @import './style/common.less';
  #app {
    width: 100%;
    height: 100%;
    .chat-body{
      padding-top: 50px;
      .clearfix();
    }
    .chat-main{
      width: 80%;
      height: 100%;
      float: right;
      color: #444;
      position: relative;
    }
  }
</style>
