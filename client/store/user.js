export default {
	state:{
		user:{
			name:'',
			userid:''
		},
		doLogin:false
	},
	mutations:{
		loginStart(state) {
			state.doLogin = true
		},
		loginCancel(state) {
			state.doLogin = false
		},
		loginSubmit(state,obj) {
			state.user = obj.user
			state.doLogin = false
		},
		logout(state) {
			state.user = {
				name:'',
				userid:''
			}
		}
	},
	getters:{
		isLogin : state => state.user.userid ? true : false
	}
}