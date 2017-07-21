const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: String,
	password: String,
	sex: Number
});
const UserModel = mongoose.model('user', UserSchema);

class User {
	/**
	 * 创建用户
	 */
	createUser(data) {
		return new Promise((resolved, rejected) => {
			const userEntity = new UserModel(data);
			userEntity.save(function(err, result){
				if (err)
          throw err
        resolved(result);
			});
		});
	}

	/**
	 * 根据用户名搜索用户
	 */
	getUserByName(name) {
		return new Promise((resolved, rejected) => {
			UserModel.findOne({ username: name }, (err, doc) => {
				if (err)
          throw err
        resolved(doc);
			});
		});
	}
}

module.exports = new User();