import Fetch from './fetch'

class ChatModel extends Fetch {
  /**
   * 创建房间
   * @return {[type]} [description]
   */
  createRoom(params) {
    return this.send({
      url: '/api/createRoom',
      params
    })
  }
}

export default new ChatModel()