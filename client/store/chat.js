export default {
	state: {
		roomlist: [],
		currentRoom: {
			type: '', // public / private / empty
			id: '', // roomid / userid
			name: ''
		}
	},
	mutations: {
		SET_CHAT_ROOMS(state, data) {
			state.roomlist = data
		},
		CHANGE_CURRENT(state, data) {
			state.currentRoom = data
		}
	},
	actions: {
		// 塞入房间列表
		setChatRooms({ commit }, data) {
			commit('SET_CHAT_ROOMS', data)
		},
		// 更换当前聊天房间
		changeCurrentRoom({ commit }, data) {
			commit('CHANGE_CURRENT', data)
		},
	},
	getters:{
		roomlist: state => state.roomlist,
		currentRoom: state => state.currentRoom
	}
}