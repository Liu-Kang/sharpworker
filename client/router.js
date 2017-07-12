import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './components/login.vue'
import regist from './components/regist.vue'
import chat from './components/chat.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/chat', name: 'chat', component: chat },
	{ path: '/login', name: 'login', component: login },
	{ path: '/regist', name: 'regist', component: regist }
]

export default new VueRouter({
	routes
})