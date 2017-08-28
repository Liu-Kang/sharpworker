<template>
  <div class="chat-container">
    <div class="inner-container">
      <leftbox></leftbox>
      <rightbox></rightbox>
      <createroom></createroom>
    </div>
  </div>
</template>

<script>
  import leftbox from '../components/leftbox.vue'
  import rightbox from '../components/rightbox.vue'
  import createroom from '../components/createroom.vue'
  import RoomModel from '../model/room'

  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    components:{
      leftbox,
      rightbox,
      createroom
    },
    created() {
      RoomModel.getRoomList().then(data => {
        if (data.code === 0) {
          this.setChatRooms(data.chatrooms)
        }
      })
    },
    methods: {
      ...mapActions([
        'setChatRooms'
      ])
    }
  }
</script>

<style lang="less">
  @import '../style/common.less';
  .chat-container{
    width: 1000px;
    height: 80%;
    min-height: 600px;
    padding-top: 100px;
    margin: 0 auto;
    border-radius: 3px;
    overflow: hidden;
    .inner-container{
      overflow: hidden;
      border-radius: 3px;
      width: 100%;
      height: 100%;
    }
  }
</style>