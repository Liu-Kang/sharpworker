import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import Vuebar from './lib/vuebar'
import './style/common.css'
import './style/theme/index.css'
import './style/scrollbar.css'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:3000')

Vue.use(ElementUI)
Vue.use(Vuebar)

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
})
