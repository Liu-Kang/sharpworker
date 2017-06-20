const express = require('express');
const router = express.Router();
const User = require('../model/user');
const crypto = require('crypto');

router.post('/api/login',loginController);


function loginController(req, res, next) {
	let data = req.body;
	let md5 = crypto.createHash('md5');
	let password_md5 = md5.update(data.password).digest('hex');

	new User().getUserByName(data.username).then(doc => {
		let cb = {
			code: 0,
			msg: '登录成功'
		};

		if(!doc) {
			cb = {
				code: -1,
				msg: '没有此用户'
			};
		}else if(password_md5 !== doc.password) {
			cb = {
				code: -2,
				msg: '密码错误'
			}
		}else {
			cb.user = doc;
		}
		res.json(cb);
	});
}

module.exports = router;