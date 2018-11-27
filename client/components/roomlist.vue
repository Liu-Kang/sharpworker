<template>
  <div class="room-list">
    <div class="room-scope">
      <div
        v-for="(room, index) in roomlist"
        class="room-item"
        :class="{select: room.roomid === currentRoom.detail._id}"
        @click="enterRoom(room)"
        :key="index">
        <div class="info">
          <h3 class="nickname clearfix">
            <span class="fl">{{room.roomname}}</span>
            <span class="fr c999 ext-time" v-if="room.lastchat">{{moment(room.lastchat.date).format('H:mm')}}</span>
          </h3>
          <p class="last-msg">
            <span>{{room.lastchat ? room.lastchat.user.username + '：' + room.lastchat.content : '暂无消息'}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RoomModel from '../model/room'
  import { mapGetters, mapActions } from 'vuex'
  import moment from 'moment'

  export default {
    data() {
      return {
        moment,
      }
    },
    computed: {
      ...mapGetters([
        'user',
        'roomlist',
        'currentRoom',
      ]),
    },
    methods: {
      ...mapActions([
        'changeCurrentRoom',
      ]),
      enterRoom(room) {
        if (room.roomid === this.currentRoom.detail['_id']) {
          return false
        }

        const self = this

        const getRoom = () => {
          RoomModel.getRoomDetail({
            roomid: room.roomid,
          }).then(data => {
            if (data.code === 0) {
              self.changeCurrentRoom({
                type: 'public',
                detail: data.room,
              })
            } else {
              self.$message.error(data.msg)
            }
          })
        }

        if (room.password && self.user.userid !== room.creator) {
          self.$prompt('请输入房间口令', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                RoomModel.checkRoomPassword({
                  roomid: room.roomid,
                  password: instance.$refs.input.value,
                }).then((data) => {
                  if (data.code === 0) {
                    getRoom()
                    done()
                  } else {
                    self.$message.error(data.msg)
                  }
                })
              } else {
                done()
              }
            },
          })
        } else {
          getRoom()
        }
      },
    },
  }
</script>

<style lang="less">
  @import '../style/common.less';
  .room-list{
    border-top: 1px solid #292c33;
    .room-item{
      overflow: hidden;
      padding: 12px 18px 11px;
      border-bottom: 1px solid #292c33;
      cursor: pointer;
      position: relative;
      &.select{
      	background-color: #34363B;
      }
    }
    .room-scope{
      width: 280px;
    }
    .ext{
      float: right;
      color: #6b6f7c;
      font-size: 13px;
      text-align: right;
    }
    .ext-time{
      height: 19px;
      line-height: 1.5;
    }
    .avatar{
      float: left;
      margin-right: 10px;
      position: relative;
      img{
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 2px;
      }
    }
    .info{
      overflow: hidden;
    }
    .nickname{
      font-weight: 400;
      font-size: 13px;
      color: #fff;
      line-height: 20px;
    }
    .last-msg{
      color: #989898;
      font-size: 13px;
      width: 244px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      height: 1.5em;
      .ellipsis();
    }
  }
</style>
