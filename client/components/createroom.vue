<template>
  <el-dialog title="房间名称" :visible.sync="createRoomApply" :before-close="handleClose">
    <el-input v-model="roomname" placeholder="请输入房间名称"></el-input>
    <h6 class="mt15">是否需要密码进入</h6>
    <div class="mt10">
      <el-radio class="radio" v-model="isPublic" @click="clearPwd" label="0">否</el-radio>
      <el-radio class="radio" v-model="isPublic" label="1">是</el-radio>
    </div>
    <el-input class="mt10" v-show="Number(isPublic)" v-model="password" placeholder="请输入房间密码"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleCreate">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import RoomModel from '../model/room'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        roomname: '',
        isPublic: '0',
        password: ''
      }
    },
    computed: {
      ...mapGetters([
        'user',
        'createRoomApply'
      ])
    },
    methods: {
      ...mapActions([
        'user',
        'showRoomApply',
        'setRoomList'
      ]),
      clearPwd() {
        this.password = ''
      },
      handleClose() {
        this.roomname = ''
        this.isPublic = '0'
        this.password = ''
        this.showRoomApply(false)
      },
      handleCreate() {
        if (!this.roomname) {
          this.$message({
            message: '请输入房间名称',
            type: 'warning'
          })
          return false
        }

        if (this.isPublic === '1' && !this.password) {
          this.$message({
            message: '请输入房间密码',
            type: 'warning'
          })
          return false
        }

        RoomModel.createRoom({
          roomname: this.roomname,
          password: this.password,
          creator: this.user.userid,
          members: [this.user.userid]
        }).then(data => {
          if (data.code === 0) {
            this.handleClose()
            this.$message({
              message: data.msg,
              type: 'success'
            })
            this.setRoomList(data.room)
          }
        })
      }
    }
  }
</script>
<style lang="less">
</style>