const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: String,
	password: String,
	sex: Number
});
const UserModel = mongoose.model('user', UserSchema);

class User {
	createUser(data) {
		return new Promise((resolved, rejected) => {
			let userEntity = new UserModel(data);
			userEntity.save(function(err, result){
				if(err){
					throw err;
				}else{
					resolved(result);
				}
			});
		});
	}
	getUserByName(name) {
		return new Promise((resolved, rejected) => {
			UserModel.findOne({username: name}, (err, doc) => {
				if(err){
					throw err;
				}else{
					resolved(doc);
				}
			});
		});
	}
}

module.exports = User;