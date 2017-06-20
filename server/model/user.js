const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username:String,
	password:String,
	sex:Number
});
mongoose.model('user',UserSchema);

class User{
	createUser(data){
		return new Promise((resolved, rejected) => {
			let UserSchema = mongoose.model('user');
			let user = new UserSchema(data);
			user.save(function(err,result){
				if(err){
					throw err;
				}else{
					resolved(result);
				}
			});
		})
	}
}

module.exports = User;