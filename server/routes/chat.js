const express = require('express');
const router = express.Router();
const Chat = require('../model/chat');
const crypto = require('crypto');

router.post('/api/createRoom', createRoomController);
router.get('/api/getRoomList', getRoomListController);
router.get('/api/getRoomDetail', getRoomDetailController)

function createRoomController(req, res, next) {
  let data = req.body;
  let md5 = crypto.createHash('md5');
  let password_md5 = md5.update(data.password).digest('hex');
  data.password = password_md5;
  
  Chat.createChatRoom(data).then(result => {
    res.json({
      code: 0,
      msg: '创建成功'
    });
  })
}

function getRoomListController(req, res, next) {
  Chat.getAllRooms().then(doc => {
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

function getRoomDetailController(req, res, next) {
  const data = req.query
  const query = {}
  if (data.roomid) {
    query._id = data.roomid
  }
  if (data.roomname) {
    query.roomname = data.roomname
  }
  Chat.getRoomDetail(query).then(doc => {
    let result = doc.toObject();
    delete result.password;

    res.json({
      code: 0,
      msg: '获取成功',
      room: result
    });
  })
}

module.exports = router;
