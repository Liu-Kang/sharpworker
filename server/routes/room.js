const express = require('express');
const router = express.Router();
const Room = require('../model/room');
const crypto = require('crypto');

router.post('/api/createRoom', createRoomController);
router.get('/api/getRoomList', getRoomListController);
router.get('/api/getRoomDetail', getRoomDetailController)

function createRoomController(req, res, next) {
  let data = req.body;
  let md5 = crypto.createHash('md5');
  if (data.password) {
    let password_md5 = md5.update(data.password).digest('hex');
    data.password = password_md5;
  }
  
  /**
   * 创建房间
   */
  Room.createChatRoom(data).then(result => {
    res.json({
      code: 0,
      msg: '创建成功',
      room: {
        roomid: result._id,
        roomname: result.roomname,
        lastchat: result.chatlist.pop()
      }
    });
  });
}

/**
 * 获取房间列表
 */
function getRoomListController(req, res, next) {
  Room.getAllRooms().then(doc => {
    let chatlist = [];
    doc.forEach(v => {
      chatlist.push({
        roomid: v._id,
        roomname: v.roomname,
        lastchat: v.chatlist.pop()
      });
    });

    res.json({
      code: 0,
      msg: '获取成功',
      chatrooms: chatlist
    });
  }).catch(err => {
    res.json({
      code: -99,
      msg: 'Server Error'
    });
  });
}

/**
 * 获取房间详情
 */
function getRoomDetailController(req, res, next) {
  const data = req.query
  const query = {}
  if (data.roomid) {
    query._id = data.roomid
  }
  if (data.roomname) {
    query.roomname = data.roomname
  }
  Room.getRoomDetail(query).then(doc => {
    let result = doc.toObject();
    delete result.password;

    res.json({
      code: 0,
      msg: '获取成功',
      room: result
    });
  });
}

module.exports = router;
