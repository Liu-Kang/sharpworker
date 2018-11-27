export default {
  state: {
		roomlist: [],
		currentRoom: {
			type: 'empty', // public / private / empty
			detail: {},
    },
  },
	mutations: {
		SET_CHAT_ROOMS(state, data) {
			state.roomlist = data
		},
		CHANGE_CURRENT(state, data) {
			state.currentRoom = data
		},
		SET_CHAT_LIST(state, data) {
			state.currentRoom.detail.chatlist.push(data)
		},
		SET_ROOM_LIST(state, data) {
			state.roomlist.unshift(data)
    },
		REMOVE_ONE_CHAT(state, data) {
			const list = state.currentRoom.detail.chatlist
			let index = -1
			list.forEach((v, k) => {
				if (v._id === data) {
					index = k
				}
			})
			if (index >= 0) {
				state.currentRoom.detail.chatlist.splice(index, 1)
			}
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
			commit('SET_CHAT_LIST', data)
		},
		// 塞入一个房间
		setRoomList({ commit }, data) {
			commit('SET_ROOM_LIST', data)
		},
		// 删除一条聊天
		removeOneChat({ commit }, data) {
			commit('REMOVE_ONE_CHAT', data)
		},
	},
	getters:{
		roomlist: state => state.roomlist,
		currentRoom: state => state.currentRoom,
	},
}
