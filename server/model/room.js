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
    return new Promise((resolved) => {
      const roomEntity = new RoomModel(data);
      roomEntity.save(function(err, result){
        if (err)
          throw err;
        resolved(result);
      });
    });
  }

  /**
   * 获取全部房间
   */
  getAllRooms() {
    return new Promise((resolved) => {
      RoomModel.find(function(err, doc){
        if (err)
          throw err;
        resolved(doc);
      });
    });
  }

  /**
   * 获取单个房间详情
   */
  getRoomDetail(query) {
    return new Promise((resolved) => {
      RoomModel.findOne(query, function(err, doc){
        if (err)
          throw err;
        resolved(doc);
      });
    });
  }

  /**
   * push one data into chatlist
   * @param {[object]} data [data.where, data.set]
   * @return {[Promise]}
   */
  setOneChat(data) {
    return new Promise((resolved) => {
      RoomModel.update(data.where, {
        $push: {
          chatlist: data.set,
        }
      }, function(err, data){
        if (err)
          throw err;
        resolved();
      });
    });
  }

  /**
   * 获取聊天列表
   */
  getChatListByRoomid(query) {
    return new Promise((resolved) => {
      RoomModel.findOne(query, 'chatlist', function(err, doc){
        if (err)
          throw err;
        resolved(doc);
      });
    });
  }
  /**
   * 删除一条聊天
   * @return {[promise]} [description]
   */
  removeOneChat(query) {
    return new Promise((resolved) => {
      RoomModel.update({_id: query.roomid}, {
        $pull: {
          chatlist: {
            _id: query.chatid
          }
        }
      }, function(err){
        if (err)
          throw err;
        resolved();
      });
    });
  }
}

module.exports = new Room();
