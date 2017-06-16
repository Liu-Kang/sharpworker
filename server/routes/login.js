module.exports = function(app){
	app.get('/login', registerController);
};

function registerController(req,res,next){
	res.render('login',{
		title:'登录'
	});
}
