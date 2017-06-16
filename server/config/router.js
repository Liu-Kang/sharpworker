module.exports = function(app){
	require('../routes/index')(app);
	require('../routes/users')(app);
	require('../routes/register')(app);
	require('../routes/login')(app);
};