export default {
	state: {
		members:[]
	},
	mutations: {
		GET_MEMBER(state, data){
			state.members = data.members
		},
		ADD_MEMBER(state, user) {
			state.members.push(user)
		},
		REMOVE_MEMBER(state, index) {
			state.members.splice(index, 1)
		}
	},
	actions: {
		getMembers({ commit }) {
			fetch('/getMembers')
				.then(response => response.json())
				.then(data => {
					commit('GET_MEMBER', data)
				})
		},
		addMember({ commit, state }, user) {
			fetch('/addMember', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
				.then(response => response.json())
				.then(data => {
					if (data.code === 0) {
						commit('ADD_MEMBER', user)
					}
				})
		},
		removeMember({ commit, state }, userid) {
			fetch(`/removeMember?userid=${userid}`, {
				method: 'GET'
			})
				.then(response => response.json())
				.then(data => {
					if (data.code === 0) {
						commit('REMOVE_MEMBER', data.index)
					}
				})
		}
	}
}