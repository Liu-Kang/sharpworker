import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import ElementUI from 'element-ui'
import Vuebar from './lib/vuebar'
import './style/common.css'
import './style/theme/index.css'
import './style/scrollbar.css'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://127.0.0.1:3000')

Vue.use(ElementUI)
Vue.use(Vuebar)

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
})
