import Fetch from './fetch'

class ChatModel extends Fetch {
  /**
   * 发送消息
   * @return {[Promise]} [description]
   */
  sendChat(params) {
    return this.send({
      url: '/api/sendChat',
      params,
    })
  }
}

export default new ChatModel()
