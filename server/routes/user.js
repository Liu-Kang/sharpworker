const express = require('express');
const router = express.Router();
const User = require('../model/user');
const crypto = require('crypto');

router.post('/api/regist',registSubmitController);
router.post('/api/login', loginController);
router.post('/api/logout', logoutController);

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

	User.getUserByName(data.username).then(doc => {
		if (doc) {
			res.json({
				code: -1,
				msg: '该用户名已经被注册'
			});
		} else {
			User.createUser(data).then(result => {
				res.json({
					code: 0,
					msg: '注册成功'
				});
			});
		}
	});
}

function loginController(req, res, next) {
	let data = req.body;
	let md5 = crypto.createHash('md5');
	let password_md5 = md5.update(data.password).digest('hex');

	User.getUserByName(data.username).then(doc => {
		let cb = {
			code: 0,
			msg: '登录成功'
		};

		if (!doc) {
			cb = {
				code: -1,
				msg: '没有此用户'
			};
		} else if (password_md5 !== doc.password) {
			cb = {
				code: -2,
				msg: '密码错误'
			}
		} else {
			res.cookie('user', {
				userid: doc._id,
				username: doc.username
			}, {
				maxAge: 1000 * 60 * 60 * 24,
				httpOnly: false
			});
		}
		res.json(cb);
	});
}

function logoutController(req, res, next) {
	res.clearCookie('user');
	res.json({
		code: 0,
		msg: '已退出登录'
	});
}

module.exports = router;
