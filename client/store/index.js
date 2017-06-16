import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import member from './member'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		user,
		member
	}
})