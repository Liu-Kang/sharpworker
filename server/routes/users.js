module.exports = function(app){
	app.get('/users', registerController);
};

function registerController(req,res,next){
	res.render('users',{
		title:'个人主页'
	});
}
