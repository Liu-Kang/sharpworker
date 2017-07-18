import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import Vuebar from 'vuebar'
import './style/common.css'
import './style/theme/index.css'
import './style/scrollbar.css'

Vue.use(ElementUI)
Vue.use(Vuebar)

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
})
