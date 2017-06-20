export default {
	state:{
		user:{
			name:'',
			sex: ''
		}
	},
	mutations:{
		
	},
	getters:{
		isLogin : state => state.user.name ? true : false
	}
}