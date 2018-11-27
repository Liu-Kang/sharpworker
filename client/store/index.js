import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import room from './room'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
    room
	}
})