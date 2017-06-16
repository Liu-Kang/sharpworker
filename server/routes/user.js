const express = require('express');
const router = express.Router();

const members = [
	{ name: 'Tony', userid: '1001', sex: '男', age: 24, location: '三里屯', job: '程序猿', moto: 'to be no1' },
	{ name: 'Jenny', userid: '1002', sex: '女', age: 28, location: '上海', job: '产品', moto: 'keep running' },
	{ name: 'Christina', userid: '1003', sex: '女', age: 21, location: '杭州', job: '设计师', moto: 'be what you wanna be' }
];

router.get('/getMembers', function(req, res, next) {
	res.json({
		code: 0,
		members
	});
});

router.post('/addMember', function(req, res, next) {
	members.push(req.body);
	res.json({
		code: 0
	});
});

router.get('/removeMember', function(req, res, next) {
	let bool = -1;
	let code = -1;
	members.forEach((v, i) => {
		if (v.userid == req.query.userid) {
			members.splice(i, 1)
			bool = i;
		}
	});
	if(bool !== -1){
		code = 0;
	}
	res.json({
		code: code,
		index: bool
	});
});

module.exports = router;
