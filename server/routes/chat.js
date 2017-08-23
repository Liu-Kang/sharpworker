const express = require('express');
const router = express.Router();
const Room = require('../model/room');
const socketIO = require('socket.io');

router.post('/api/sendChat', sendChatController);

/**
 * socket.io处理
 */
router.socketReady = function(server) {
  const io = socketIO.listen(server);
  io.sockets.on('connection', socket => {
    // 接收聊天并广播
    socket.on('sendChat', param => {
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
        let chat = doc.chatlist.pop()
        socket.emit('sendChat', {
          code: 0,
          msg: '发送成功',
          chat: chat
        });
        socket.broadcast.emit('getNewChat', {
          chat: chat
        });
      });
    });

    // 删除一条消息
    socket.on('removeOneChat', param => {
      Room.removeOneChat(param).then(() => {
        socket.emit('removeOneChat', {
          code: 0,
          msg: '删除成功',
          chatid: param.chatid,
          roomid: param.roomid
        });
        socket.broadcast.emit('getRemoveOne', param);
      });
    });
  });
}

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
    res.json({
      code: 0,
      msg: '发送成功',
      chat: result.chatlist.pop()
    });
  });
}

module.exports = router;
