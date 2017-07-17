const express = require('express');
const router = express.Router();
const Chat = require('../model/chat');
const moment = require('moment');

router.post('/api/createRoom', createRoomController);

function createRoomController(req, res, next) {
  let data = req.body;
  data.members = [];
  data.cdate = moment(new Date()).format('YYYY-MM-DD');
  Chat.createChatRoom(data).then(result => {
    res.json({
      code: 0,
      msg: '创建成功'
    });
  })
}

module.exports = router;
