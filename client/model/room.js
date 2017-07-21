import Fetch from './fetch'

class RoomModel extends Fetch {
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
  /**
   * 获取房间详情 
   */
  getRoomDetail(params) {
    return this.send({
      url: '/api/getRoomDetail',
      method: 'GET',
      params
    })
  }
}

export default new RoomModel()