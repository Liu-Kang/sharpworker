const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const RoomSchema = new Schema({
  roomname: String, // 房间名
  cdate: { type: Date, default: Date.now }, // 创建时间
  creator: String, // 创建者id
  password: String, // 进入房间密码
  members: Array, // 用户列表
  chatlist: [{ // 聊天列表
    user: { // 发送者
      userid: String,
      username: String,
      sex: Number
    },
    date: { type: Date, expires: '3d', default: Date.now }, // 聊天时间
    content: String, // 聊天内容
    to: String // 被@者
  }]
});
const RoomModel = mongoose.model('room', RoomSchema);

class Room {
  /**
   * 创建房间
   */
  createChatRoom(data) {
    return new Promise((resolved, rejected) => {
      const roomEntity = new RoomModel(data);
      roomEntity.save(function(err, result){
        if (err)
          throw err
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
        if (err)
          throw err
        resolved(doc);
      });
    });
  }

  /**
   * 获取单个房间详情
   */
  getRoomDetail(query) {
    return new Promise((resolved, rejected) => {
      RoomModel.findOne(query, function(err, doc){
        if (err)
          throw err
        resolved(doc);
      });
    });
  }

  /**
   * 塞入一条聊天
   */
  setOneChat(data) {
    return new Promise((resolved, rejected) => {
      RoomModel.where(data.where).update({
        $push: { chatlist: data.set }
      }, function(err, result){
        if (err)
          throw err
        resolved(result);
      });
    });
  }

  /**
   * 获取聊天列表
   */
  getChatListByRoomid(query) {
    return new Promise((resolved, rejected) => {
      RoomModel.findOne(query, 'chatlist', function(err, doc){
        if (err)
          throw err
        resolved(doc);
      });
    });
  }
}

module.exports = new Room();