export default {
	state:{
		user:{
			id: '',
			name:'',
			sex: ''
		},
		createRoomApply: false
	},
	mutations:{
		SET_USER(state, data) {
			state.user = data
		},
		CREATE_ROOM_APPLY(state, bool) {
			state.createRoomApply = bool
		}
	},
	actions: {
		setUser({ commit }, data) {
			commit('SET_USER', data)
		},
		showRoomApply({ commit }, bool) {
			commit('CREATE_ROOM_APPLY', bool)
		}
	},
	getters:{
		user: state => state.user,
		isLogin : state => state.user.id ? true : false,
		createRoomApply: state => state.createRoomApply
	}
}