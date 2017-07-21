const express = require('express');
const router = express.Router();
const Room = require('../model/room');

router.post('/api/sendChat', sendChatController);

function sendChatController(req, res, next) {
  let param = req.body;
  if (!param.content) {
    return res.json({
      code: -1,
      msg: '发送内容为空'
    });
  }

  let data = {
    where: {
      _id: param.roomid
    },
    set: {
      user: param.user,
      content: param.content
    }
  };

  Room.setOneChat(data).then(result => {
    return Room.getChatListByRoomid(data.where);
  }).then(doc => {
    res.json({
      code: 0,
      msg: '发送成功',
      chat: doc.chatlist.pop()
    });
  });
}

module.exports = router;
