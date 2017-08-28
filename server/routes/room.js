const express = require('express');
const router = express.Router();
const Room = require('../model/room');
const crypto = require('crypto');

router.post('/api/createRoom', createRoomController);
router.get('/api/getRoomList', getRoomListController);
router.get('/api/getRoomDetail', getRoomDetailController);
router.post('/api/checkRoomPassword', checkRoomPasswordController);

function createRoomController(req, res) {
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
function getRoomListController(req, res) {
  Room.getAllRooms().then(doc => {
    let chatlist = [];
    doc.forEach(v => {
      chatlist.push({
        roomid: v._id,
        roomname: v.roomname,
        lastchat: v.chatlist.pop(),
        password: v.password ? true : false,
        creator: v.creator
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
function getRoomDetailController(req, res) {
  const data = req.query;
  const query = {};
  if (data.roomid) {
    query._id = data.roomid;
  }
  if (data.roomname) {
    query.roomname = data.roomname;
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

/**
 * 验证房间密码
 */
function checkRoomPasswordController(req, res) {
  const data = req.body;
  const md5 = crypto.createHash('md5');
  const password_md5 = md5.update(data.password).digest('hex');
  const query = {
    _id: data.roomid
  };

  Room.getRoomDetail(query).then(doc => {
    const pwd = doc.password;
    let cb = {}
    if (password_md5 === pwd) {
      cb = {
        code: 0,
        msg: '验证通过'
      }
    } else {
      cb = {
        code: -1,
        msg: '房间口令输入错误'
      }
    }
    res.json(cb);
  });
}

module.exports = router;
