import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

//定义一个中央总线，用来做简单的组件间通信
//这里只是简单情况下的处理，复杂情况下建议使用vuex
window.bus = new Vue()

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
})
