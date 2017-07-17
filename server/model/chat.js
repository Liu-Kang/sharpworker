const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const RoomSchema = new Schema({
  roomname: String, // 房间名
  cdate: String, // 创建时间
  creator: String, // 创建者id
  password: String, // 进入房间密码
  members: Array // 用户列表
});
const RoomModel = mongoose.model('room', RoomSchema);

class Chat {
  /**
   * 创建房间
   */
  createChatRoom(data) {
    return new Promise((resolved, rejected) => {
      const roomEntity = new RoomModel(data);
      roomEntity.save(function(err, result){
        if (err) {
          throw err
        }
        resolved(result);
      });
    });
  }

  /**
   * 获取全部房间
   */
  getAllRooms() {
    return new Promise((resolved, rejected) => {
      RoomModel.find(function(err, doc){
        if (err) {
          throw err
        }
        resolved(doc);
      });
    });
  }
}

module.exports = new Chat();