import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import './style/theme/index.css'

Vue.use(ElementUI)

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
})
