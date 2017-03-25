module.exports = function(app){
	app.get('/register', registerController);
};

function registerController(req,res,next){
	res.render('register',{
		title:'注册'
	});
}
