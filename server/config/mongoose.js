const mongoose = require('mongoose');
const url = 'mongodb://192.168.1.102:27017/sharpworker';

/**
 * 连接
 */
mongoose.connect(url);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + url);  
});    

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});    

module.exports = mongoose;