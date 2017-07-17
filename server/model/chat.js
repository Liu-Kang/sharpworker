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
}

module.exports = new Chat();