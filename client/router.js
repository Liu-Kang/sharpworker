import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './routes/login.vue'
import regist from './routes/regist.vue'
import chat from './routes/chat.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/chat', name: 'chat', component: chat },
	{ path: '/login', name: 'login', component: login },
	{ path: '/regist', name: 'regist', component: regist }
]

export default new VueRouter({
	routes
})