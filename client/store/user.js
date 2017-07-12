export default {
	state:{
		user:{
			id: '',
			name:'',
			sex: ''
		}
	},
	mutations:{
		SET_USER(state, data) {
			state.user = data
		}
	},
	actions: {
		setUser({ commit }, data) {
			commit('SET_USER', data)
		}
	},
	getters:{
		user: state => state.user,
		isLogin : state => state.user.id ? true : false
	}
}