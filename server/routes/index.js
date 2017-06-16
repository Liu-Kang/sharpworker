module.exports = function(app){
	app.get('/', registerController);
};

function registerController(req,res,next){
	res.render('index',{
		title:'首页'
	});
}
