const express = require('express');
const router = express.Router();
const User = require('../model/user');
const crypto = require('crypto');

router.post('/api/regist',registSubmitController);
module.exports = router;

function registSubmitController(req, res, next){
	let data = req.body;
	
	if(!data.username){
		return res.json({
			code: -1,
			msg: '请填写用户名'
		});
	}

	if(!data.password){
		return res.json({
			code: -2,
			msg: '请填写密码'
		});
	}

	if(!data.sex){
		return res.json({
			code: -3,
			msg: '请选择性别'
		});
	}

	let md5 = crypto.createHash('md5');
	let password_md5 = md5.update(data.password).digest('hex');
	data.password = password_md5;

	new User().createUser(data).then(result => {
		res.json({
			code: 0,
			msg: '注册成功'
		});
	});
}