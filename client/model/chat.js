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
  /**
   * 获取房间列表
   */
  getRoomlist() {
    return this.send({
      url: '/api/getRoomList',
      method: 'GET'
    })
  }
}

export default new ChatModel()