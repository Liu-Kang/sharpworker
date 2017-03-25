const User = require('../model/user');
const crypto = require('crypto');

module.exports = function(app){
	app.get('/register', registerController);
	app.post('/register/submit', registerSubmitController);
};

function registerController(req,res){
	res.render('register',{
		title:'注册'
	});
}

function registerSubmitController(req,res){
	let data = req.body;

	if(!data.username){
		return res.json({
			errorCode:-1,
			errorMsg:'请填写用户名'
		});
	}

	if(!data.password){
		return res.json({
			errorCode:-2,
			errorMsg:'请填写密码'
		});
	}

	if(!data.email){
		return res.json({
			errorCode:-4,
			errorMsg:'请填写邮箱'
		});
	}

	if(!data.sex){
		return res.json({
			errorCode:-5,
			errorMsg:'请选择性别'
		});
	}

	let md5 = crypto.createHash('md5');
	let password_md5 = md5.update(data.password).digest('hex');
	data.password = password_md5;

	new User().createUser(data,function(result){
		console.log(result);
		return res.json({
			errorCode:0,
			errorMsg:'注册成功'
		});
	});
}