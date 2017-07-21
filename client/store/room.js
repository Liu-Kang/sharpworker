export default {
	state: {
		roomlist: [],
		currentRoom: {
			type: 'empty', // public / private / empty
			detail: {}
		}
	},
	mutations: {
		SET_CHAT_ROOMS(state, data) {
			state.roomlist = data
		},
		CHANGE_CURRENT(state, data) {
			state.currentRoom = data
		},
		SET_CHAT_List(state, data) {
			state.currentRoom.detail.chatlist.push(data)
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
		// 塞入一条聊天进聊天列表
		setChatList({ commit }, data) {
			commit('SET_CHAT_List', data)
		}
	},
	getters:{
		roomlist: state => state.roomlist,
		currentRoom: state => state.currentRoom
	}
}