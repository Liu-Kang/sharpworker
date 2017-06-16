import Vue from 'vue'
import VueRouter from 'vue-router'
import userInfo from './components/userInfo.vue'
import ChatList from './components/ChatList.vue'

Vue.use(VueRouter)

const routes = [
	{path: '/', name: 'chat', component: ChatList},
	{path: '/user/:userid', name: 'userInfo', component: userInfo}
]

export default new VueRouter({
	routes
})