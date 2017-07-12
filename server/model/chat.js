const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const ChatSchema = new Schema({
  content: String,
  date: String,
  author: Object
});
const ChatModel = mongoose.model('chat', ChatSchema);

class Chat {
  createChatRoom(data) {
    return new Promise((resolved, rejected) => {
      let chatEntity = new ChatModel(data);
      chatEntity.save(function(err, result){
        if(err){
          throw err;
        }else{
          resolved(result);
        }
      });
    });
  }
}

module.exports = new Chat();