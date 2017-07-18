export default {
	state: {
		rooms: [],
		current: {
			type: '', // public / private
			id: '' // roomid / userid
		}
	},
	mutations: {
		SET_CHAT_ROOMS(state, data) {
			state.rooms = data
		},
		CHANGE_CURRENT(state, data) {
			state.currentRoom = data
		}
	},
	actions: {
		setChatRooms({ commit }, data) {
			commit('SET_CHAT_ROOMS', data)
		},
		changeCurrentRoom({ commit }, data) {
			commit('CHANGE_CURRENT', data)
		}
	},
	getters:{
		rooms: state => state.rooms,
		current: state => state.current
	}
}