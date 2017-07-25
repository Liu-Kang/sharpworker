<template>
  <div class="chat-list">
    <div class="chat-scope">
      <div v-for="chat in chats" class="chat-item slide-left ng-scope">
        <div class="ext">
          <p class="ext-time">{{chat.time}}</p>
        </div>
        <div class="info">
          <h3 class="nickname">
            <span>{{chat.name}}</span>
          </h3>
          <p class="last-msg">
            <span>{{chat.lastmsg}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chats: [
          {
            name: 'SaySomeThing',
            lastmsg: 'Tony:凑个单',
            time: '17:04'
          },
          {
            name: '相亲相爱',
            lastmsg: 'Liuk:什么时候回去',
            time: '17:20'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
</style>