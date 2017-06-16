const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username:String,
	password:String,
	email:String,
	sex:Number
});
mongoose.model('user',UserSchema);

class User{
	createUser(data,cb){
		let UserSchema = mongoose.model('user');
		let user = new UserSchema(data);
		user.save(function(err,result){
			if(err){
				throw err;
			}else{
				cb(result);
			}
		});
	}
}

module.exports = User;